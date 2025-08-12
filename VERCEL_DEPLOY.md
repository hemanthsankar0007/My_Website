# 🚀 Vercel Deployment Guide

This Next.js portfolio website is now ready for deployment on Vercel!

## Quick Deploy to Vercel

### Option 1: One-Click Deploy (Easiest)
1. Fork this repository to your GitHub account
2. Go to [vercel.com](https://vercel.com)
3. Sign in with your GitHub account
4. Click "New Project"
5. Import your forked repository
6. Vercel will automatically detect it's a Next.js project
7. Click "Deploy" - that's it!

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel --prod
```

## Environment Variables (Optional)

The website works without environment variables, but you can add these in Vercel dashboard for enhanced functionality:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add these variables if needed:

```
NEXT_PUBLIC_GTM=your-google-tag-manager-id
NEXT_PUBLIC_APP_URL=your-vercel-deployment-url
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
GMAIL_PASSKEY=your-gmail-app-password
EMAIL_ADDRESS=your-email-address
```

## Project Status ✅

- ✅ Next.js 15.4.6 (Latest stable)
- ✅ Build successful (`npm run build`)
- ✅ No ESLint errors (`npm run lint`)
- ✅ No security vulnerabilities
- ✅ Vercel configuration optimized
- ✅ Production ready

## What's Included

- **Responsive portfolio website**
- **About, Experience, Skills, Projects, Education sections**
- **Blog integration with dev.to**
- **Contact form**
- **Dark/Light theme**
- **SEO optimized**

Your website will be available at: `https://your-project-name.vercel.app`

## Need Help?

If you encounter any issues during deployment:
1. Check the Vercel dashboard for build logs
2. Ensure all dependencies are in package.json
3. Verify environment variables are set correctly

The website is optimized for Vercel and should deploy without issues! 🎉