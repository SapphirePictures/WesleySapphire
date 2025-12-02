# Deployment Instructions

## Quick Deploy to Vercel (Recommended)

1. **Sign up for Vercel**: Visit [vercel.com](https://vercel.com) and sign up with GitHub
2. **Import your project**: Click "Import Project" and connect your GitHub repository
3. **Configure**: 
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy**: Click "Deploy" and your site will be live in minutes!

## Quick Deploy to Netlify

1. **Sign up for Netlify**: Visit [netlify.com](https://netlify.com) and sign up
2. **Import your project**: Click "Add new site" > "Import an existing project"
3. **Configure**:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**: Click "Deploy site"

## Manual Build & Deploy

```bash
# Build the project
npm run build

# The dist/ folder now contains your production-ready website
# Upload this folder to any static hosting service
```

## Environment Variables

If you need environment variables:

1. Create a `.env` file in the root directory
2. Add your variables: `VITE_API_KEY=your_key_here`
3. Access them in code: `import.meta.env.VITE_API_KEY`
4. Add them to your hosting platform's environment variables

## Custom Domain

### Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain and follow DNS instructions

### Netlify
1. Go to "Domain settings"
2. Add a custom domain
3. Follow the DNS configuration steps

## Performance Tips

- Images are loaded from CDN (Unsplash) for demo purposes
- Replace with optimized images for production
- Consider using WebP format for better compression
- Enable compression on your hosting platform
- Use lazy loading for images below the fold
