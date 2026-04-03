# 🔧 Cloudflare Pages 配置指南

## 问题诊断

### 找不到"Custom domains"标签的可能原因：

1. **项目未正确创建**
2. **项目状态异常**
3. **权限问题**

## 解决步骤

### 第一步：检查Pages项目

1. 登录 Cloudflare 控制面板
2. 点击左侧菜单的 **Pages**
3. 查看是否有名为 `proxybayproxy` 的项目
4. 检查项目状态是否为 "Active"

### 第二步：重新创建Pages项目（如果需要）

如果项目不存在或状态异常：

1. 点击 **Create a project**
2. 选择 **Connect to Git**
3. 选择你的GitHub仓库：`Candseven88/ProxyBayProxy`
4. 配置构建设置：
   - Project name: `proxybayproxy`
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: (留空)
   - Build output directory: `/`
   - Root directory: (留空)
5. 点击 **Save and Deploy**

### 第三步：配置自定义域名

项目创建成功后：

1. 点击项目名称进入项目详情
2. 应该能看到以下标签：
   - Overview
   - Deployments
   - **Custom domains** ← 这个标签
   - Functions
   - Settings

3. 点击 **Custom domains** 标签
4. 点击 **Set up a custom domain**
5. 输入：`proxybayproxy.online`
6. 点击 **Continue**

### 第四步：DNS配置

Cloudflare会自动添加DNS记录，如果没有：

1. 手动添加CNAME记录：
   - 类型：CNAME
   - 名称：`proxybayproxy.online`（或留空）
   - 内容：`proxybayproxy.pages.dev`
   - 代理状态：已代理

## 验证配置

配置完成后，等待几分钟，然后测试：

```bash
curl -I https://proxybayproxy.online
```

应该返回200状态码而不是522错误。

## 常见问题

### Q: 为什么看不到Custom domains标签？
A: 确保项目已成功部署，状态为Active。

### Q: DNS记录配置后还是不工作？
A: 等待DNS传播（最多24小时），确保CNAME记录正确指向pages.dev域名。

### Q: 仍然显示522错误？
A: 检查源服务器配置，确保Cloudflare Pages项目正常运行。 