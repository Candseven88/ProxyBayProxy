# 🚀 小白部署指南 - ProxyBayProxy 网站

## 📋 准备工作

### 1. 确保您有GitHub账号
- 如果没有，请先注册：https://github.com
- 您的仓库地址：https://github.com/Candseven88/ProxyBayProxy.git

### 2. 确保您的电脑已安装Git
- Windows: 下载并安装 https://git-scm.com/download/win
- Mac: 打开终端，运行 `git --version` 检查是否已安装
- Linux: 运行 `sudo apt-get install git` (Ubuntu/Debian)

## 🎯 一键部署步骤

### 第一步：运行部署脚本
在您的项目文件夹中打开终端，运行：

```bash
./deploy.sh
```

这个脚本会自动：
- ✅ 初始化Git仓库
- ✅ 添加所有文件到Git
- ✅ 提交更改
- ✅ 推送到您的GitHub仓库

### 第二步：启用GitHub Pages
1. 打开浏览器，访问：https://github.com/Candseven88/ProxyBayProxy
2. 点击仓库页面顶部的 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分，选择 **Deploy from a branch**
5. 在 **Branch** 下拉菜单中选择 **main**
6. 在 **Folder** 中选择 **/ (root)**
7. 点击 **Save**

等待几分钟，您的网站就会在以下地址可用：
`https://candseven88.github.io/ProxyBayProxy/`

## ☁️ Cloudflare Pages 部署（可选）

### 第一步：注册Cloudflare账号
1. 访问：https://dash.cloudflare.com/sign-up
2. 注册免费账号

### 第二步：创建Pages项目
1. 登录Cloudflare后，点击左侧菜单的 **Pages**
2. 点击 **Create a project**
3. 选择 **Connect to Git**
4. 授权GitHub，选择您的仓库：`Candseven88/ProxyBayProxy`
5. 点击 **Begin setup**

### 第三步：配置构建设置
在配置页面中：
- **Project name**: 输入 `proxybayproxy` 或任何您喜欢的名称
- **Production branch**: 选择 `main`
- **Framework preset**: 选择 `None`
- **Build command**: 留空
- **Build output directory**: 输入 `/`
- 点击 **Save and Deploy**

### 第四步：配置自定义域名
1. 部署完成后，点击项目
2. 点击 **Custom domains** 标签
3. 点击 **Set up a custom domain**
4. 输入您的域名：`proxybayproxy.online`
5. 按照提示配置DNS记录

## 📊 数据统计功能

### Cloudflare Analytics
Cloudflare Pages 提供基本的数据统计：
- 页面访问量
- 访客来源
- 访问时间
- 地理位置分布

### Google Analytics
已为您配置好Google Analytics：
- 跟踪ID: `G-WQTXR5T5BG`
- 查看数据：https://analytics.google.com
- 功能包括：实时访问、用户行为、转化跟踪等

### Microsoft Clarity
已为您配置好Microsoft Clarity：
- 项目ID: `sp4q4n8h3c`
- 查看数据：https://clarity.microsoft.com
- 功能包括：用户会话录制、热力图、点击跟踪等

## 🔧 常见问题解决

### 问题1：部署脚本运行失败
**解决方案：**
```bash
# 检查Git是否安装
git --version

# 如果没有安装，请先安装Git
# 然后重新运行
./deploy.sh
```

### 问题2：GitHub Pages不显示
**解决方案：**
1. 检查仓库设置中的Pages配置
2. 等待5-10分钟让GitHub处理
3. 检查仓库是否有index.html文件

### 问题3：自定义域名不工作
**解决方案：**
1. 确保DNS记录正确配置
2. 等待DNS传播（可能需要24小时）
3. 检查Cloudflare的SSL设置

### 问题4：分析工具不工作
**解决方案：**
1. 等待24小时让数据开始显示
2. 检查浏览器控制台是否有错误
3. 确认代码已正确添加到所有页面

## 📞 获取帮助

如果遇到问题：
1. 检查GitHub仓库的Issues页面
2. 查看Cloudflare的文档
3. 联系技术支持

## 🎉 部署完成！

部署成功后，您的网站将具有：
- ✅ 现代化的响应式设计
- ✅ 完整的SEO优化
- ✅ Google Analytics数据跟踪
- ✅ Microsoft Clarity用户行为分析
- ✅ Cloudflare CDN加速
- ✅ 自定义域名支持

您的网站地址：
- GitHub Pages: `https://candseven88.github.io/ProxyBayProxy/`
- 自定义域名: `https://proxybayproxy.online` (配置后)

---

**提示：** 首次部署可能需要几分钟时间。如果遇到任何问题，请耐心等待或重新检查配置。 