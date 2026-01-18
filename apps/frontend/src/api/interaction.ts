import apiClient from './axios'
import type { Interaction, InteractionResult, ApiResponse, DetailedInteractionResult } from '@/types'

export const interactionApi = {
  /**
   * 检测药物相互作用
   * 由于可能调用AI接口，设置5分钟超时
   */
  async checkInteractions(drugIds: string[]): Promise<ApiResponse<InteractionResult>> {
    const response = await apiClient.post('/interactions/check', { drugIds }, {
      timeout: 300000 // 5分钟超时
    })
    return response.data
  },

  /**
   * 获取相互作用详情
   */
  async getInteractionById(id: string): Promise<ApiResponse<Interaction>> {
    const response = await apiClient.get(`/interactions/${id}`)
    return response.data
  },

  /**
   * 根据药物名称深度分析相互作用
   * 从分子层面、化学原理层面详细解释药物相互作用关系
   * 由于详细分析需要更长时间，设置3分钟超时
   */
  async analyzeInteractionsByNames(drugNames: string[]): Promise<ApiResponse<DetailedInteractionResult>> {
    const response = await apiClient.post('/interactions/analyze-by-names', { drugNames }, {
      timeout: 180000 // 3分钟超时
    })
    return response.data
  }
}