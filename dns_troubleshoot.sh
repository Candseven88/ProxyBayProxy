#!/bin/bash

echo "🔍 DNS故障排除检查"
echo "=================="
echo ""

echo "📋 当前问题："
echo "- DNS仍然返回A记录而不是CNAME记录"
echo "- 网站返回522错误"
echo "- 需要删除冲突的A记录"
echo ""

echo "🛠️ 解决步骤："
echo ""

echo "第一步：在Cloudflare中删除A记录"
echo "1. 登录 Cloudflare 控制面板"
echo "2. 进入 proxybayproxy.online 域名"
echo "3. 点击 DNS > Records"
echo "4. 查找所有A记录并删除："
echo "   - 指向 162.255.119.70 的A记录"
echo "   - 指向 104.21.x.x 的A记录"
echo "5. 只保留CNAME记录（指向 proxybayproxy.pages.dev）"
echo ""

echo "第二步：检查Namecheap DNS设置"
echo "1. 登录 Namecheap 控制面板"
echo "2. 进入域名管理"
echo "3. 检查DNS设置："
echo "   - 应该设置为 'Cloudflare DNS' 或 'Custom DNS'"
echo "   - 如果使用Custom DNS，确保指向："
echo "     * roxy.ns.cloudflare.com"
echo "     * aarav.ns.cloudflare.com"
echo ""

echo "第三步：等待DNS传播"
echo "- DNS更改可能需要5-30分钟生效"
echo "- 最长可能需要24小时"
echo ""

echo "🔍 当前DNS状态："
echo ""

echo "1. A记录检查："
dig +short A proxybayproxy.online
echo ""

echo "2. CNAME记录检查："
dig +short CNAME proxybayproxy.online
echo ""

echo "3. NS记录检查："
dig +short NS proxybayproxy.online
echo ""

echo "4. 测试Cloudflare Pages："
curl -I -s https://proxybayproxy.pages.dev | head -3
echo ""

echo "✅ 故障排除指南完成！"
echo ""
echo "💡 提示：删除A记录后，等待5-10分钟再测试网站。" 