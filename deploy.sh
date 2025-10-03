#!/bin/bash

# ProxyBayProxy Deployment Script
# This script automates the deployment process for GitHub and Cloudflare Pages

set -e

echo "🚀 Starting ProxyBayProxy deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if git is installed
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_status "Initializing git repository..."
    git init
    print_success "Git repository initialized"
fi

# Check current git status
print_status "Checking git status..."
if [[ -n $(git status --porcelain) ]]; then
    print_status "Changes detected. Adding files to git..."
    git add .
    
    # Get commit message from user or use default
    if [[ -n "$1" ]]; then
        COMMIT_MESSAGE="$1"
    else
        COMMIT_MESSAGE="Update ProxyBayProxy website - $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    git commit -m "$COMMIT_MESSAGE"
    print_success "Changes committed with message: $COMMIT_MESSAGE"
else
    print_warning "No changes detected. Repository is up to date."
fi

# Check if remote origin exists
if ! git remote get-url origin &> /dev/null; then
    print_status "No remote origin found. Adding your GitHub repository..."
    git remote add origin "https://github.com/Candseven88/ProxyBayProxy.git"
    print_success "Remote origin added: https://github.com/Candseven88/ProxyBayProxy.git"
fi

# Push to GitHub
print_status "Pushing to GitHub..."
if git push -u origin main 2>/dev/null || git push -u origin master 2>/dev/null; then
    print_success "Successfully pushed to GitHub"
else
    print_warning "Push failed. You may need to:"
    echo "1. Set up GitHub authentication (SSH key or Personal Access Token)"
    echo "2. Create the repository on GitHub first"
    echo "3. Check your remote URL: git remote -v"
fi

# Deployment instructions
echo ""
print_success "Deployment script completed!"
echo ""
echo "📋 Next steps for deployment:"
echo ""
echo "🔵 GitHub Pages:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings > Pages"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/ (root)' folder"
echo "5. Click Save"
echo ""
echo "☁️  Cloudflare Pages:"
echo "1. Go to https://dash.cloudflare.com"
echo "2. Navigate to Pages > Create a project"
echo "3. Connect your GitHub repository"
echo "4. Configure build settings:"
echo "   - Build command: (leave empty)"
echo "   - Build output directory: /"
echo "5. Deploy and configure custom domain: proxybayproxy.online"
echo ""
echo "🌐 Custom Domain Setup:"
echo "1. Add DNS records for proxybayproxy.online"
echo "2. Configure SSL certificate (automatic with Cloudflare)"
echo "3. Set up page rules if needed"
echo ""
echo "📊 SEO Verification:"
echo "1. Submit sitemap to Google Search Console"
echo "2. Verify robots.txt is accessible"
echo "3. Check meta tags with browser dev tools"
echo "4. Test mobile responsiveness"
echo ""
print_success "Your ProxyBayProxy website is ready for deployment! 🎉" 