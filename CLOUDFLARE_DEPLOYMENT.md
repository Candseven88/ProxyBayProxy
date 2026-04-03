# ☁️ Cloudflare Pages 部署指南

## 📋 部署流程概述

1. **代码上传到GitHub** ✅ (已完成)
2. **在Cloudflare Pages创建项目**
3. **连接GitHub仓库**
4. **配置构建设置**
5. **设置自定义域名**

## 🚀 详细步骤

### 第一步：确保代码已上传到GitHub

运行部署脚本上传代码：
```bash
./deploy.sh
```

### 第二步：注册Cloudflare账号
1. 访问：https://dash.cloudflare.com/sign-up
2. 注册免费账号（无需信用卡）

### 第三步：创建Cloudflare Pages项目
1. 登录Cloudflare控制面板
2. 点击左侧菜单的 **Pages**
3. 点击 **Create a project**
4. 选择 **Connect to Git**

### 第四步：连接GitHub仓库
1. 点击 **GitHub** 图标
2. 授权Cloudflare访问您的GitHub账号
3. 选择仓库：`Candseven88/ProxyBayProxy`
4. 点击 **Begin setup**

### 第五步：配置构建设置
在配置页面中填写：

| 设置项 | 值 |
|--------|-----|
| **Project name** | `proxybayproxy` |
| **Production branch** | `main` |
| **Framework preset** | `None` |
| **Build command** | (留空) |
| **Build output directory** | `/` |
| **Root directory** | (留空) |

### 第六步：部署
1. 点击 **Save and Deploy**
2. 等待部署完成（通常1-2分钟）

### 第七步：设置自定义域名
1. 部署完成后，点击项目名称
2. 点击 **Custom domains** 标签
3. 点击 **Set up a custom domain**
4. 输入：`proxybayproxy.online`
5. 点击 **Continue**

### 第八步：配置DNS记录
Cloudflare会自动检测您的域名。如果没有：
1. 在您的域名注册商处添加DNS记录
2. 将域名指向Cloudflare的Nameservers
3. 或者添加CNAME记录指向您的Cloudflare Pages URL

## 📊 Cloudflare Analytics 功能

### 免费版功能：
- ✅ 页面访问量
- ✅ 访客来源
- ✅ 地理位置分布
- ✅ 访问时间统计
- ✅ 带宽使用情况
- ✅ 错误率监控

### 查看Analytics：
1. 在Cloudflare控制面板中
2. 点击 **Analytics** 菜单
3. 选择 **Web Analytics**
4. 查看详细数据

## 🔧 构建设置说明

### 为什么选择这些设置：
- **Framework preset: None** - 因为这是静态HTML网站
- **Build command: 留空** - 不需要构建过程
- **Build output directory: /** - 所有文件都在根目录
- **Root directory: 留空** - 使用仓库根目录

## 🌐 最终结果

部署成功后，您的网站将：
- ✅ 通过Cloudflare CDN全球加速
- ✅ 自动SSL证书
- ✅ 自定义域名：`https://proxybayproxy.online`
- ✅ Cloudflare Analytics数据统计
- ✅ 自动缓存优化

## 📈 数据统计

### Cloudflare Analytics
- 实时访问数据
- 详细的访客分析
- 性能监控

### Google Analytics
- 已集成到所有页面
- 跟踪ID: `G-WQTXR5T5BG`

### Microsoft Clarity
- 已集成到所有页面
- 项目ID: `sp4q4n8h3c`

## 🔍 验证部署

部署完成后，访问：
- `https://proxybayproxy.pages.dev` (Cloudflare提供的临时域名)
- `https://proxybayproxy.online` (自定义域名，配置后)

## ❓ 常见问题

### Q: 部署失败怎么办？
A: 检查构建设置是否正确，确保所有必填项都已填写。

### Q: 自定义域名不工作？
A: 确保DNS记录正确配置，等待DNS传播（最多24小时）。

### Q: Analytics数据不显示？
A: 等待24小时让数据开始收集，确保代码已正确添加。

### Q: 网站加载慢？
A: Cloudflare CDN会自动优化，首次访问可能稍慢，后续访问会很快。

---

**提示：** Cloudflare Pages提供免费托管，每月有10万次构建和无限带宽，完全够用！ 