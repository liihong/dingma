# 顶妈 AI 营销大师

顶妈租户微信小程序，使用 uni-app、Vue 3 和 TypeScript。代码从 [admin-sfire-ai](https://github.com/liihong/admin-sfire-ai) 的 `dingma` 目录迁出。

接口仍走火源后端。公开请求的租户标识是 `dingma`。

## 开发

需要 Node.js 18 及以上，并用微信开发者工具打开编译结果。

```bash
npm install
npm run dev:mp-weixin
```

H5 调试：`npm run dev:h5`。微信小程序构建：`npm run build:mp-weixin`。
