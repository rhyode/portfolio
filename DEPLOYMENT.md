# 🚀 Deployment Guide - Tanmay Tripathi Portfolio

Complete step-by-step guide to deploy your Next.js portfolio to Vercel.

## 📋 Prerequisites

Before deploying, ensure you have:
- ✅ GitHub account
- ✅ Vercel account (free at [vercel.com](https://vercel.com))
- ✅ Git installed on your machine
- ✅ Portfolio code ready

## 🚀 Method 1: GitHub + Vercel (Recommended)

### Step 1: Push to GitHub

1. **Create a new repository on GitHub**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `tanmay-portfolio` or any name you prefer
   - Make it public (for free Vercel deployment)
   - Don't initialize with README (we already have files)

2. **Connect your local project to GitHub**:
   ```bash
   cd tanmay-portfolio
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. **Go to Vercel Dashboard**:
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"

2. **Import your repository**:
   - Find your `tanmay-portfolio` repository
   - Click "Import"
   - Vercel will auto-detect it's a Next.js project

3. **Configure deployment**:
   - **Project Name**: `tanmay-portfolio` (or customize)
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Deploy**:
   - Click "Deploy"
   - Wait 1-2 minutes for build to complete
   - ✅ Your site is live!

## 🌐 Method 2: Direct CLI Deployment

If you prefer using the command line:

```bash
cd tanmay-portfolio
npx vercel login  # Follow login prompts
npx vercel --prod
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your username
- **Link to existing project?** → No
- **Project name?** → tanmay-portfolio
- **Directory?** → ./
- **Override settings?** → No

## 📍 Your Deployment URLs & Locations

### Live Website
- **Production URL**: `https://tanmay-portfolio-YOUR_USERNAME.vercel.app`
- **Alternative**: `https://YOUR_PROJECT_NAME.vercel.app`

### Vercel Dashboard Locations
- **Main Dashboard**: `https://vercel.com/dashboard`
- **Project Page**: `https://vercel.com/YOUR_USERNAME/tanmay-portfolio`
- **Deployments**: `https://vercel.com/YOUR_USERNAME/tanmay-portfolio/deployments`
- **Settings**: `https://vercel.com/YOUR_USERNAME/tanmay-portfolio/settings`
- **Analytics**: `https://vercel.com/YOUR_USERNAME/tanmay-portfolio/analytics`

### What You'll Find in Vercel Dashboard

1. **Overview Tab**:
   - Live site preview
   - Recent deployments
   - Git integration status
   - Performance metrics

2. **Deployments Tab**:
   - All deployment history
   - Build logs
   - Preview deployments for branches

3. **Settings Tab**:
   - Custom domains
   - Environment variables
   - Build & development settings
   - Integrations

4. **Analytics Tab**:
   - Visitor statistics
   - Page performance
   - Geographic data

## 🔧 Post-Deployment Steps

### 1. Verify Your Site
- Visit your live URL
- Test all sections and links
- Check mobile responsiveness
- Verify resume download works

### 2. Set Up Custom Domain (Optional)
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate is automatic

### 3. Configure Environment Variables (If Needed)
If you add contact forms or APIs later:
1. Go to **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy to apply changes

### 4. Set Up Analytics
- Vercel provides built-in analytics
- View in **Analytics** tab
- For Google Analytics, add tracking code to `layout.tsx`

## 🔄 Automatic Deployments

After initial setup, every time you push to GitHub:
- ✅ **Main branch** → Production deployment
- ✅ **Other branches** → Preview deployments
- ✅ **Pull requests** → Preview deployments

## 🛠️ Troubleshooting

### Common Issues & Solutions

**Build Failed**:
```bash
# Check build locally first
npm run build
npm run start
```

**Dependencies Error**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Deployment Timeout**:
- Check build logs in Vercel dashboard
- Reduce bundle size if needed
- Contact Vercel support if persistent

### Build Settings

If you need to modify build settings:
1. Go to **Settings** → **Build & Development**
2. Modify as needed:
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
   - **Development Command**: `npm run dev`

## 🎯 Performance Optimization

Your site is already optimized with:
- ✅ Next.js automatic optimizations
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS minification
- ✅ Global CDN via Vercel

## 🔐 Security Features

Vercel provides:
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ Security headers
- ✅ Edge caching

## 📊 Monitoring & Analytics

### Built-in Vercel Analytics
- **Real-time visitors**
- **Page performance**
- **Geographic distribution**
- **Conversion tracking**

### Custom Analytics (Optional)
Add Google Analytics to `src/app/layout.tsx`:
```typescript
// Add to head section
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆘 Support & Resources

### Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Deployment Guide](https://nextjs.org/docs/deployment)

### Community
- [Vercel Discord](https://vercel.com/discord)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vercel)

### Contact
- **Vercel Support**: support@vercel.com
- **Status Page**: https://vercel-status.com

---

## 🎉 You're Live!

Once deployed, your portfolio will be live at:
**https://tanmay-portfolio-YOUR_USERNAME.vercel.app**

Share it with:
- ✅ Potential employers
- ✅ LinkedIn connections
- ✅ GitHub profile
- ✅ Resume/CV
- ✅ Email signature

**Pro Tip**: The URL is automatically HTTPS and globally distributed for fast loading worldwide! 🌍

---

*Built with ❤️ using Next.js and deployed on Vercel*
