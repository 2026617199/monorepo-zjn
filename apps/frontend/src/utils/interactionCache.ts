import { openDB, type IDBPDatabase } from 'idb'
import { toRaw } from 'vue'
import type { DetailedInteractionResult } from '@/types'

/**
 * 药物相互作用缓存结果接口
 */
export interface CachedInteractionResult {
  drugs: string[]                    // 药物列表（排序后）
  drugNames: string[]                // 药物名称列表（用于显示）
  result: DetailedInteractionResult  // 分析结果
  cachedAt: number                   // 缓存时间
  expiresAt: number                  // 过期时间
}

const DB_NAME = 'drug-interaction-cache'
const DB_VERSION = 1
const STORE_NAME = 'interaction-results'
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000 // 24小时过期

let dbInstance: IDBPDatabase | null = null

/**
 * 获取数据库实例
 */
async function getDB(): Promise<IDBPDatabase> {
    if (dbInstance) return dbInstance

    dbInstance = await openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, { keyPath: 'cacheKey' })
                store.createIndex('cachedAt', 'cachedAt')
                store.createIndex('expiresAt', 'expiresAt')
            }
        }
    })
    return dbInstance
}

/**
 * 生成缓存 key（将药物名称排序后拼接）
 */
function generateCacheKey(drugNames: string[]): string {
    // 深度克隆并排序，避免 Vue 响应式代理问题
    const sortedNames = JSON.parse(JSON.stringify(toRaw(drugNames))).sort()
    return sortedNames.join('|')
}

/**
 * 深度克隆并移除 Vue 响应式代理
 */
function deepClone<T>(obj: T): T {
    const raw = toRaw(obj)
    return JSON.parse(JSON.stringify(raw))
}

/**
 * 保存相互作用分析结果到缓存
 */
export async function saveToCache(
    drugNames: string[],
    result: DetailedInteractionResult
): Promise<void> {
    const db = await getDB()
    const now = Date.now()
    const cacheKey = generateCacheKey(drugNames)

    // 深度克隆结果数据，移除 Vue 响应式代理
    const clonedResult = deepClone(result)

    const cachedData: CachedInteractionResult & { cacheKey: string } = {
        cacheKey,
        drugs: JSON.parse(JSON.stringify(toRaw(drugNames))).sort(),
        drugNames: JSON.parse(JSON.stringify(toRaw(drugNames))),
        result: clonedResult,
        cachedAt: now,
        expiresAt: now + CACHE_EXPIRY_MS
    }

    await db.put(STORE_NAME, cachedData)
}

/**
 * 从缓存获取相互作用分析结果
 */
export async function getFromCache(drugNames: string[]): Promise<CachedInteractionResult | null> {
    const db = await getDB()
    const cacheKey = generateCacheKey(drugNames)
    const cachedData = await db.get(STORE_NAME, cacheKey)

    if (!cachedData) {
        return null
    }

    // 检查是否过期
    if (Date.now() > cachedData.expiresAt) {
        // 过期数据，删除
        await db.delete(STORE_NAME, cacheKey)
        return null
    }

    return {
        drugs: cachedData.drugs,
        drugNames: cachedData.drugNames,
        result: cachedData.result,
        cachedAt: cachedData.cachedAt,
        expiresAt: cachedData.expiresAt
    }
}

/**
 * 删除指定缓存
 */
export async function deleteFromCache(drugNames: string[]): Promise<void> {
    const db = await getDB()
    const cacheKey = generateCacheKey(drugNames)
    await db.delete(STORE_NAME, cacheKey)
}

/**
 * 清除所有过期缓存
 */
export async function clearExpiredCache(): Promise<void> {
    const db = await getDB()
    const now = Date.now()
    const allCache = await db.getAll(STORE_NAME)

    for (const item of allCache) {
        if (now > item.expiresAt) {
            await db.delete(STORE_NAME, item.cacheKey)
        }
    }
}

/**
 * 清除所有缓存
 */
export async function clearAllCache(): Promise<void> {
    const db = await getDB()
    await db.clear(STORE_NAME)
}

/**
 * 获取缓存数量
 */
export async function getCacheCount(): Promise<number> {
    const db = await getDB()
    return await db.count(STORE_NAME)
}

/**
 * 获取所有缓存（用于调试）
 */
export async function getAllCache(): Promise<CachedInteractionResult[]> {
    const db = await getDB()
    const allCache = await db.getAll(STORE_NAME)
    return allCache.map(item => ({
        drugs: item.drugs,
        drugNames: item.drugNames,
        result: item.result,
        cachedAt: item.cachedAt,
        expiresAt: item.expiresAt
    }))
}