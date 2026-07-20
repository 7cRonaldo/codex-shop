# 项目知识库

## 1. 项目概览

- 项目名：`shanxia-vue3`
- 产品名称：山下饭堂
- 项目类型：本地静态单页餐厅官网111
- 主要用途：介绍餐厅品牌故事、当季菜品、到店信息，并收集预约意向
- 技术栈：Vue 3、TypeScript、Vite、原生 CSS
- 运行时要求：Node.js 20.19.0 或更高版本
- 在线依赖：页面运行不依赖 Cloudflare、Wrangler、OpenAI Sites、私有认证或其他后端服务

当前实现没有路由、状态管理、后端接口和数据库。所有页面内容、交互和样式都在前端本地完成。

## 2. 目录与文件职责

```text
codex-shop/
├─ index.html             # HTML 壳、SEO 描述、页面标题和 Vue 挂载节点
├─ package.json           # 项目信息、依赖和 npm 命令
├─ package-lock.json      # npm 依赖锁文件
├─ vite.config.ts         # Vite 配置，仅启用 Vue 插件
├─ tsconfig.json          # TypeScript 严格模式与 Bundler 模块解析配置
├─ public/
│  └─ favicon.svg         # 网站图标
├─ src/
│  ├─ main.ts             # 应用入口，挂载 App.vue 并引入全局样式
│  ├─ App.vue             # 唯一页面组件，包含全部页面结构、数据和预约逻辑
│  ├─ style.css           # 全站样式、响应式布局和视觉插画
│  └─ env.d.ts            # Vite 类型声明
├─ tests/
│  └─ app.test.mjs        # Node 内置测试，检查技术栈和离线独立性
└─ dist/                  # 生产构建产物，不应手工编辑或提交
```

仓库中还存在 `app/`、`build/`、`db/`、`drizzle/`、`examples/`、`worker/` 等空目录，它们目前不参与项目运行。`.openai/` 也是空目录，项目没有 `.openai/hosting.json`。

## 3. 应用结构

页面是一个由锚点导航串联的长页面，主要区块如下：

1. 顶部导航：品牌、故事、菜单、到店和订桌入口。
2. 首屏：餐厅定位、营业时间、主要行动按钮和纯 CSS 菜品插画。
3. 品牌故事：介绍时令食材、烹饪理念和用餐体验。
4. 今日推荐：由 `dishes` 数组循环渲染三张推荐菜卡片。
5. 更多菜单：由 `menu` 二维数组循环渲染菜名、配料和价格。
6. 预约区：日期、人数、手机号输入及前端校验。
7. 页脚：地址、营业时间、电话、邮箱和版权信息。

页面导航使用 `#top`、`#story`、`#menu`、`#reserve`、`#visit` 等原生锚点，不使用 Vue Router。

## 4. 数据与交互

`src/App.vue` 使用 `<script setup lang="ts">` 和 Vue Composition API：

- `dishes`：推荐菜数据，包含名称、说明、价格和视觉色调。
- `menu`：更多菜单数据，以三元数组保存菜名、说明和价格。
- `date`、`guests`、`phone`：预约表单状态，均由 `ref` 管理。
- `message`：表单反馈文本。
- `today`：用 `computed` 生成当天的 `YYYY-MM-DD`，作为日期输入的最小值。
- `submitReservation()`：检查日期是否已填写，以及手机号是否符合 `^1\d{10}$`；通过后只显示确认文案，不会发送网络请求或持久化数据。

预约表单当前仅收集“预约意向”。刷新页面后数据会丢失，也没有防重复提交、服务端校验、短信确认或真实库存能力。

## 5. 视觉与响应式设计

- 视觉基调是米白纸张色、酒红、橙色和深墨色，颜色集中定义在 `src/style.css` 的 `:root` CSS 变量中。
- 字体优先使用 `Noto Serif SC`、`Songti SC`，并回退到 Georgia 或系统字体；仓库没有内置字体文件。
- 菜品图、盘子、叶片、印章等均由 CSS 图形绘制，不依赖外部图片。
- 桌面端主要使用双栏和三栏 Grid 布局。
- `800px` 以下切换为单栏、隐藏主导航并调整字号。
- `480px` 以下进一步压缩首屏、菜单和页脚布局。
- 对 `prefers-reduced-motion: reduce` 做了适配，会关闭平滑滚动。

## 6. 常用命令

```bash
npm install
npm run dev
npm run build
npm run preview
npm test
```

- `npm run dev`：启动 Vite 本地开发服务器。
- `npm run build`：先执行 `vue-tsc -b` 类型检查，再由 Vite 输出到 `dist/`。
- `npm run preview`：本地预览生产构建。
- `npm test`：使用 Node.js 内置测试运行器执行 `tests/*.test.mjs`。

在限制 PowerShell 脚本执行的 Windows 环境中，可用 `npm.cmd` 替代 `npm`，例如 `npm.cmd run build`。

## 7. 测试与当前验证结果

测试目前只有两个轻量静态检查：

- 确认主页面使用 Vue、包含预约逻辑，并且没有 Cloudflare、Wrangler、ChatGPT 等在线服务依赖。
- 确认 Vue 主版本为 3、安装了 Vite Vue 插件，并且开发命令为 `vite`。

本次阅读项目时已验证：

- `npm.cmd test`：2 个测试全部通过。
- `npm.cmd run build`：TypeScript 检查和 Vite 生产构建成功。

现有测试不会模拟用户填写表单，也不会检查视觉、响应式布局、无障碍细节或实际浏览器行为。

## 8. 开发约定与修改指南

- 保持 Vue 3 Composition API 和 `<script setup>` 风格。
- 简单文案或菜品更新应优先修改 `src/App.vue` 中的本地数据。
- 全局视觉调整集中修改 `src/style.css`，优先复用现有 CSS 变量。
- 不要直接修改 `dist/`；它由构建命令重新生成。
- 新增依赖后同步提交 `package.json` 和 `package-lock.json`。
- 修改功能后至少运行 `npm test` 和 `npm run build`。
- 若预约功能接入真实服务，需要补充 API 层、加载与失败状态、服务端校验、隐私提示及自动化交互测试。
- 若页面继续扩展，建议把导航、推荐菜、预约表单和页脚拆分为独立 Vue 组件，并为菜品数据定义明确的 TypeScript 类型。

## 9. 已知限制与注意事项

- 项目是纯前端演示站，联系方式、地址、营业时间和菜单均为写死的展示内容。
- 日期由浏览器本地时间生成；在极端时区场景下，`toISOString()` 可能与用户本地自然日出现偏差。
- 手机号校验只接受以 `1` 开头的 11 位数字，适用于简单的中国大陆手机号格式校验，但不是完整号码有效性验证。
- 菜单数据使用位置数组，维护时容易混淆字段；扩展前适合改成带命名属性的对象。
- 页面没有使用外部图片和后端，因此部署目标只需支持静态文件托管与 SPA 资源访问。
- README、源码与测试均应以 UTF-8 读取；旧版 Windows PowerShell 的默认文本解码可能导致中文在终端中显示为乱码，但 Node.js 测试与 Vite 构建可正常读取。
