# 南京大学数智史学实验室网页 - 部署与维护指南

这份指南将一步步教你如何将这个网页模板发布到互联网上，并利用 GitHub 进行后续的更新与合作。

## 准备工作

1. **安装 Node.js**: 访问 [nodejs.org](https://nodejs.org/) 下载并安装 LTS 版本。
2. **准备代码编辑器**: 推荐使用 [VS Code](https://code.visualstudio.com/)。
3. **注册 GitHub 账号**: 访问 [github.com](https://github.com/)。

---

## 第一步：本地运行 (Windows/Mac 通用)

1. **创建文件夹**: 在你的电脑上新建一个文件夹，例如 `nju-lab-web`。
2. **下载代码**: 将本页面生成的所有文件（`index.html`, `package.json`, `vite.config.ts`, `data.ts` 等以及 `components` 和 `pages` 文件夹）全部放入该文件夹中。
   * 注意：保持文件结构，即 `components` 和 `pages` 应该是文件夹。
3. **安装依赖**:
   * 在该文件夹内打开终端（VS Code 中可点击顶部菜单 `Terminal` -> `New Terminal`）。
   * 输入命令并回车：
     ```bash
     npm install
     ```
   * 等待进度条跑完，这会自动下载 React 等工具。
4. **启动网页**:
   * 输入命令并回车：
     ```bash
     npm run dev
     ```
   * 终端会显示一个链接（通常是 `http://localhost:5173`），按住 Ctrl 点击该链接，或者在浏览器输入该地址，即可看到网页。

---

## 第二步：上传到 GitHub 并发布

1. **在 GitHub 创建仓库**:
   * 登录 GitHub，点击右上角 `+` -> `New repository`。
   * Repository name 填写 `nju-digital-history-lab`。
   * 确保选择 `Public`，点击 `Create repository`。

2. **初始化并上传代码**:
   回到 VS Code 的终端，依次执行以下命令（每行输完按回车）：

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   # 下面这行命令从你的 GitHub 仓库页面复制 (HTTPS 那个链接)
   git remote add origin https://github.com/你的用户名/nju-digital-history-lab.git
   git push -u origin main
   ```

3. **一键部署**:
   * 在终端执行：
     ```bash
     npm run deploy
     ```
   * 这个命令会自动打包你的网页并发布到 GitHub Pages。
   * 成功后，终端会显示 "Published"。

4. **开启 GitHub Pages**:
   * 进入 GitHub 仓库页面 -> `Settings` -> `Pages`。
   * 此时你应该能看到 `Branch` 已经自动变为了 `gh-pages`（如果没有，手动选一下）。
   * 你的网站地址通常是：`https://你的用户名.github.io/nju-digital-history-lab/`

---

## 第三步：日常维护

### 修改内容
大部分内容只需要修改 `data.ts` 文件。
例如，要发新闻：
1. 打开 `data.ts`。
2. 在 `NEWS_DATA` 数组中复制一份数据格式，填入新的标题和内容。
3. 保存文件。

### 提交更新
修改完成后，想要发布到网上：
1. 打开终端。
2. 提交代码备份（可选，建议做）：
   ```bash
   git add .
   git commit -m "更新了新闻"
   git push
   ```
3. **发布网站**：
   ```bash
   npm run deploy
   ```
   等待命令执行完毕，几分钟后刷新你的网站即可看到变化。

---

## 常见问题

*   **图片不显示？**
    模板中使用了 `picsum.photos` 的随机图片。正式使用时，建议将图片放在 `public` 文件夹下（需新建），然后用 `/image.jpg` 的方式引用。
*   **路由 404？**
    本模板配置了 `HashRouter` (在 `App.tsx` 中)，这是最适合 GitHub Pages 的路由方式，一般不会出现 404 问题。
