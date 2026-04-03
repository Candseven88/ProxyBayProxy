#!/bin/bash

echo "🔍 验证DNS修复状态"
echo "=================="
echo ""

echo "请先完成以下操作："
echo "1. 在Cloudflare DNS中删除所有A记录"
echo "2. 确保只保留CNAME记录（指向 proxybayproxy.pages.dev）"
echo "3. 等待5-10分钟让DNS传播"
echo ""

echo "然后运行此脚本验证修复结果："
echo ""

echo "📊 当前DNS状态："
echo ""

echo "1. A记录检查（应该为空）："
A_RECORDS=$(dig +short A proxybayproxy.online)
if [ -z "$A_RECORDS" ]; then
    echo "✅ 没有A记录 - 正确！"
else
    echo "❌ 仍有A记录：$A_RECORDS"
    echo "   需要删除这些A记录"
fi
echo ""

echo "2. CNAME记录检查（应该有记录）："
CNAME_RECORDS=$(dig +short CNAME proxybayproxy.online)
if [ -n "$CNAME_RECORDS" ]; then
    echo "✅ 有CNAME记录：$CNAME_RECORDS"
    if [[ "$CNAME_RECORDS" == *"pages.dev"* ]]; then
        echo "✅ 指向正确的Cloudflare Pages域名"
    else
        echo "❌ 没有指向Cloudflare Pages"
    fi
else
    echo "❌ 没有CNAME记录"
fi
echo ""

echo "3. 网站访问测试："
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://proxybayproxy.online)
if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ 网站正常访问 (HTTP $HTTP_STATUS)"
elif [ "$HTTP_STATUS" = "522" ]; then
    echo "❌ 仍然返回522错误"
    echo "   可能需要等待更长时间或检查Pages项目配置"
else
    echo "⚠️  返回HTTP $HTTP_STATUS"
fi
echo ""

echo "4. Cloudflare Pages默认域名测试："
PAGES_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://proxybayproxy.pages.dev)
if [ "$PAGES_STATUS" = "200" ]; then
    echo "✅ Cloudflare Pages正常工作"
else
    echo "❌ Cloudflare Pages有问题"
fi
echo ""

echo "🎯 修复目标："
echo "- 没有A记录"
echo "- 有指向 pages.dev 的CNAME记录"
echo "- 网站返回200状态码"
echo ""

echo "✅ 验证完成！" 