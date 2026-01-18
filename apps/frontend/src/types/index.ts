/**
 * 药物信息接口
 * 对应 API: GET /api/drugs, GET /api/drugs/{id}, POST /api/drugs/analyze
 */
export interface Drug {
  _id: string
  name: string
  genericName?: string
  description: string
  category: string
  sideEffects?: string[]
  contraindications?: string[]
  dosage?: string
  aiAnalysis?: string
  source: 'manual' | 'ai'
  createdAt: string
  updatedAt: string
}

/**
 * 药物相互作用接口
 * 对应 API: GET /api/interactions/{id}, POST /api/interactions/check
 */
export interface Interaction {
  _id: string
  drug1Id: string
  drug2Id: string
  drug1Name: string
  drug2Name: string
  interactionType: string
  severity: 'low' | 'medium' | 'high'
  description: string
  recommendation: string
  source: 'database' | 'ai'
  createdAt: string
  updatedAt: string
}

/**
 * 相互作用检测结果接口
 * 对应 API: POST /api/interactions/check 响应的 data 字段
 */
export interface InteractionResult {
  interactions: Interaction[]
  riskLevel: 'low' | 'medium' | 'high'
  source: 'database' | 'ai' | 'mixed'
  drugCount: number
  interactionCount: number
}

/**
 * 图谱节点接口
 * 对应 API: GET /api/drugs/graph 响应的 nodes 数组元素
 */
export interface GraphNode {
  id: string
  name: string
  category: string
  value: number
  source?: string
  description?: string
}

/**
 * 图谱边接口
 * 对应 API: GET /api/drugs/graph 响应的 edges 数组元素
 */
export interface GraphEdge {
  source: string
  target: string
  value: number
  severity: 'low' | 'medium' | 'high'
  interactionType?: string
  description?: string
}

/**
 * 图谱数据接口
 * 对应 API: GET /api/drugs/graph 响应的 data 字段
 */
export interface GraphData {
  nodes: GraphNode[]
  edges: GraphEdge[]
}

/**
 * 图谱统计信息接口
 * 对应 API: GET /api/drugs/graph/stats 响应的 data 字段
 */
export interface GraphStats {
  totalDrugs: number
  totalInteractions: number
  severityDistribution: {
    low: number
    medium: number
    high: number
  }
}

/**
 * 药物相互作用统计接口
 * 对应 API: GET /api/drugs/{drugId}/interactions/stats 响应的 data 字段
 */
export interface DrugInteractionStats {
  drugId: string
  drugName: string
  totalInteractions: number
  severityCounts: {
    high: number
    medium: number
    low: number
  }
  highRiskCount: number
  mediumRiskCount: number
  lowRiskCount: number
}

/**
 * 分页信息接口
 * 对应 API: GET /api/drugs 响应的 pagination 字段
 */
export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

/**
 * 通用API响应接口
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
  timestamp: number
}

/**
 * 分页响应接口
 * 对应 API: GET /api/drugs 响应
 */
export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: Pagination
  timestamp: number
}

/**
 * 搜索响应接口
 * 对应 API: GET /api/drugs/search 响应
 */
export interface SearchResponse<T> {
  success: boolean
  data: T[]
  count: number
  timestamp: number
}

/**
 * 深度相互作用分析详情接口
 * 对应 API: POST /api/interactions/analyze-by-names 响应的 interactions 数组元素
 */
export interface DetailedInteraction {
  drug1: string
  drug2: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  molecularMechanism: string      // 分子层面机制
  chemicalPrinciples: string      // 化学原理分析
  pharmacodynamics: string        // 药效学影响
  pharmacokinetics: string        // 药代动力学变化
  clinicalImplications: string    // 临床意义
  recommendation: string          // 用药建议
}

/**
 * 分子相互作用详情接口
 * 对应 API: POST /api/interactions/analyze-by-names 响应的 molecularInteractions 数组元素
 */
export interface MolecularInteraction {
  type: string                     // 相互作用类型
  affectedTarget: string           // 受影响的目标（如CYP2C9酶）
  description: string              // 详细描述
}

/**
 * 深度相互作用分析结果接口
 * 对应 API: POST /api/interactions/analyze-by-names 响应的 data 字段
 */
export interface DetailedInteractionResult {
  interactions: DetailedInteraction[]
  overallRisk: 'low' | 'medium' | 'high' | 'critical'
  analysisSummary: string          // 综合分析总结
  molecularInteractions: MolecularInteraction[]
  precautions: string[]            // 注意事项
}