# ProxyBayProxy - PirateBay Proxy Website

A modern, responsive static website that provides access to The Pirate Bay through iframe embedding with enhanced SEO optimization and blog content.

## Features

- **Modern Design**: Clean, responsive interface using Tailwind CSS
- **Iframe Integration**: Seamless embedding of proxybay.vercel.app content
- **Navigation**: Smooth page switching without reloads
- **SEO Optimized**: Comprehensive meta tags, sitemap, and blog content
- **Mobile Responsive**: Works perfectly on all devices
- **Blog Section**: PirateBay-related content for SEO enhancement

## Pages

- **Home** (`/`): Main page with iframe content
- **Setup** (`/setup`): Setup instructions via iframe
- **Submit** (`/submit`): Submission form via iframe
- **Blog** (`/blog`): SEO-optimized blog content
  - Best PirateBay Proxies Guide
  - How to Unblock PirateBay
  - Top PirateBay Mirror Sites

## Technology Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Lightweight interactivity
- **Responsive Design**: Mobile-first approach

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push this code to your repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Cloudflare Pages

1. Create a Cloudflare account
2. Go to Pages > Create a project
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: (leave empty for static site)
   - Build output directory: `/`
5. Deploy and configure custom domain `proxybayproxy.online`

### Custom Domain Setup

1. **DNS Configuration**:
   - Add A record pointing to Cloudflare's IP
   - Or use CNAME record pointing to your Cloudflare Pages URL

2. **SSL Certificate**: Cloudflare provides automatic SSL

3. **Page Rules** (optional):
   - Redirect www to non-www
   - Cache static assets

## File Structure

```
/
├── index.html              # Main homepage
├── sitemap.xml            # SEO sitemap
├── robots.txt             # Search engine directives
├── README.md              # This file
└── blog/
    ├── index.html         # Blog homepage
    ├── best-piratebay-proxies.html
    ├── unblock-piratebay.html
    └── piratebay-mirror-sites.html
```

## SEO Features

- **Meta Tags**: Comprehensive title, description, and keywords
- **Open Graph**: Social media optimization
- **Canonical URLs**: Prevent duplicate content
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine directives
- **Blog Content**: PirateBay-related keywords and content

## Customization

### Colors
The site uses Tailwind CSS with custom colors defined in the config:
- Primary: `#3B82F6` (Blue)
- Secondary: `#1F2937` (Dark Gray)

### Logo
The logo uses a gradient from primary blue to purple. You can modify the gradient in the CSS.

### Content
- Update iframe URLs in `index.html` if needed
- Modify blog content for different keywords
- Add new blog posts in the `/blog/` directory

## Performance

- **CDN**: Tailwind CSS loaded from CDN
- **Optimized Images**: No heavy images to load
- **Minimal JavaScript**: Lightweight vanilla JS
- **Fast Loading**: Static HTML with minimal dependencies

## Security

- **HTTPS**: Always use HTTPS in production
- **Content Security Policy**: Consider adding CSP headers
- **X-Frame-Options**: Configure if needed for iframe security

## Maintenance

- **Regular Updates**: Keep blog content fresh
- **Link Checking**: Verify iframe sources work
- **SEO Monitoring**: Track search engine performance
- **Analytics**: Add Google Analytics or similar

## License

This project is for educational purposes. Ensure compliance with local laws and regulations.

## Support

For issues or questions:
1. Check the deployment documentation
2. Verify DNS and SSL configuration
3. Test iframe sources are accessible
4. Review browser console for errors

---

**Note**: This website is designed to provide access to The Pirate Bay through proxy services. Users are responsible for complying with their local laws and regulations. 