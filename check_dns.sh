#!/bin/bash

echo "🔍 检查 proxybayproxy.online 的DNS配置..."
echo ""

echo "1. 检查A记录："
dig +short A proxybayproxy.online
echo ""

echo "2. 检查CNAME记录："
dig +short CNAME proxybayproxy.online
echo ""

echo "3. 检查TXT记录："
dig +short TXT proxybayproxy.online
echo ""

echo "4. 检查NS记录："
dig +short NS proxybayproxy.online
echo ""

echo "5. 测试HTTP响应："
curl -I -s https://proxybayproxy.online | head -5
echo ""

echo "6. 测试Cloudflare Pages默认域名："
curl -I -s https://proxybayproxy.pages.dev | head -5
echo ""

echo "✅ DNS检查完成！" 