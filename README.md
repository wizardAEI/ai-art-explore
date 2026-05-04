# 艺术与科技交叉日报

2026-05-04 今日艺术与科技交叉热点日报前端应用。项目使用 Vite 构建，输出目录为 `dist`，可直接部署到 Cloudflare Pages。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
npm run preview
```

## Cloudflare Pages 部署

### 方式一：连接 Git 仓库

1. 在 Cloudflare Dashboard 创建 Pages 项目并连接当前 Git 仓库。
2. Framework preset 选择 `Vite`。
3. Build command 填 `npm run build`。
4. Build output directory 填 `dist`。
5. 保存并部署。

### 方式二：Wrangler 直接部署

```bash
npm run build
npx wrangler pages deploy dist --project-name ai-art-explore
```

`wrangler.toml` 已配置 `pages_build_output_dir = "dist"`，Cloudflare Pages 会使用构建后的静态文件发布页面。
