/**
 * Hotspot API - 热点榜单相关接口
 * 数据来源：Coze 工作流 API
 */
import { request } from '@/utils/request'

/**
 * 热点榜单项类型（后端已将 Coze 新字段映射为统一格式）
 * Coze 原始：hot_content / hot_type / hot_value → title / hot_type / hot
 */
export interface HotspotItem {
  hot: string       // 热度值（来自 hot_value）
  id: string        // 热点ID
  mobileUrl: string // 移动端链接
  timestamp: string // 更新时间
  title: string     // 热点标题（来自 hot_content）
  url: string       // 链接
  hot_type?: string // 热点类型标签，如「热」
}

/**
 * 获取抖音热点榜单
 */
export function getHotspotList() {
  return request<HotspotItem[]>({
    url: '/api/v1/client/coze/hotspot-list',
    method: 'GET',
    showLoading: true
  })
}
