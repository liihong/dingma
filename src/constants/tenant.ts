/**
 * dingma 租户小程序：公开接口租户标识（与后端 tenants.code / tenants.wechat_app_id 一致）
 */
export const DINGMA_TENANT_CODE = 'dingma'

/** OSS 静态资源根路径（okoss.sourcefire.cn） */
const OSS_DINGMA_BASE = 'https://okoss.sourcefire.cn/dingma'

/**
 * 阿里云 OSS 图片动态处理：按场景缩放并降质量，Bucket 内保留原图
 * CDN 加速时需关闭「忽略参数」或保留回源参数 x-oss-process，否则仍会返回原图
 * @see https://help.aliyun.com/zh/oss/user-guide/resize-images-4
 */
function ossImage(file: string, process: string): string {
  return `${OSS_DINGMA_BASE}/${file}?x-oss-process=image/${process}`
}

/** 小程序首页全屏展示图（竖屏 aspectFit，宽 1080px @3x 足够） */
export const DINGMA_SPLASH_IMAGE_URL = ossImage('dingmavi.jpg', 'resize,w_1080/quality,q_80')

/** 创富工具 Tab 顶部横幅（370rpx 高度，横图居中裁剪） */
export const DINGMA_HOME_BANNER_URL = ossImage('dingmavi.jpg', 'resize,m_fill,w_750,h_370/quality,q_78')

/** 仅首次进入小程序时播放首页轻微放大动画，标记后不再播放 */
export const STORAGE_DINGMA_SPLASH_ZOOM_PLAYED = 'dingma_splash_zoom_played'

/** 对话页智能体（顶顶妈分身）默认头像（页面最大约 128rpx，256px 足够） */
export const DINGMA_AGENT_DEFAULT_AVATAR_URL = ossImage('dingmalogo.jpg', 'resize,w_256/quality,q_85')

/** 「我的」页未登录 / 无头像时的默认展示（顶妈品牌） */
export const DINGMA_DEFAULT_PROFILE_AVATAR_URL = DINGMA_AGENT_DEFAULT_AVATAR_URL

/** 微信小程序 AppID（与 manifest mp-weixin.appid 一致，勿带首尾空格） */
export const DINGMA_WECHAT_APP_ID = 'wx22d311d2ee7c7ae6'

/** 附加到 /api/v1/client 请求的 Query/Body 与 Header */
export const DINGMA_PUBLIC_TENANT_SCOPE = {
  /** Query 参数名 tenant_id：传租户代码 dingma（后端按 Tenant.code 解析） */
  tenant_id: DINGMA_TENANT_CODE,
  /** Query 参数名 appid：微信小程序 AppID */
  appid: DINGMA_WECHAT_APP_ID,
} as const
