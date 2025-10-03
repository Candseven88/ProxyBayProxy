#!/bin/bash

echo "🔧 DNS配置修复指南"
echo "=================="
echo ""

echo "📋 当前DNS配置问题："
echo "1. A记录指向错误的IP: 162.255.119.70"
echo "2. 缺少指向Cloudflare Pages的CNAME记录"
echo "3. 需要将域名指向: proxybayproxy.pages.dev"
echo ""

echo "🛠️ 修复步骤："
echo ""

echo "第一步：登录Cloudflare控制面板"
echo "   - 访问: https://dash.cloudflare.com"
echo "   - 选择域名: proxybayproxy.online"
echo ""

echo "第二步：修改DNS记录"
echo "   - 进入 DNS > Records"
echo "   - 找到A记录 (162.255.119.70)"
echo "   - 点击 Edit"
echo "   - 修改为:"
echo "     * 类型: CNAME"
echo "     * 名称: proxybayproxy.online (或留空)"
echo "     * 内容: proxybayproxy.pages.dev"
echo "     * 代理状态: 已代理 (橙色云朵)"
echo "     * TTL: Auto"
echo ""

echo "第三步：检查Cloudflare Pages项目"
echo "   - 进入 Pages"
echo "   - 查找项目: proxybayproxy"
echo "   - 确保状态为 Active"
echo "   - 点击项目名称"
echo "   - 查找 Custom domains 标签"
echo ""

echo "第四步：添加自定义域名"
echo "   - 点击 Custom domains"
echo "   - 点击 Set up a custom domain"
echo "   - 输入: proxybayproxy.online"
echo "   - 点击 Continue"
echo ""

echo "第五步：验证配置"
echo "   - 等待5-10分钟"
echo "   - 运行: curl -I https://proxybayproxy.online"
echo "   - 应该返回200状态码"
echo ""

echo "🔍 当前DNS状态检查："
echo ""

echo "1. 检查A记录："
dig +short A proxybayproxy.online
echo ""

echo "2. 检查CNAME记录："
dig +short CNAME proxybayproxy.online
echo ""

echo "3. 测试Cloudflare Pages默认域名："
curl -I -s https://proxybayproxy.pages.dev | head -3
echo ""

echo "✅ 修复指南完成！"
echo ""
echo "💡 提示：如果仍然看不到Custom domains标签，可能需要重新创建Pages项目。" 