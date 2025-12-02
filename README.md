# Portfolio Website

A modern, responsive portfolio website inspired by [The Tandem Co](https://www.thetandemco.com/) and [Fourth Canvas](https://fourthcanvas.co/), built with React, TypeScript, Vite, and Tailwind CSS.

## ✨ Features

- **Responsive Navigation**: Sticky navbar with smooth scroll to sections
- **Hero Section**: Full viewport height with bold typography (Merriweather)
- **Horizontal Scrolling Works**: Unique horizontal scroll experience triggered when section enters viewport
- **Services Grid**: Clean layout showcasing your offerings
- **About Section**: Professional bio with skills showcase
- **Contact Form**: Functional contact form with validation
- **Modern Design**: Clean, minimal aesthetic with smooth transitions
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Mobile Responsive**: Fully responsive design for all devices

## 🎨 Typography

- **Headers**: Merriweather (Google Fonts)
- **Body Text**: Helvetica Neue

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Customization

### Update Content

1. **Personal Information**: Edit component files in `src/components/`
2. **Featured Works**: Update the `works` array in `FeaturedWorks.tsx` with your projects
3. **Services**: Modify the `services` array in `Services.tsx`
4. **Skills**: Update the `skills` array in `About.tsx`
5. **SEO**: Edit meta tags in `index.html`

### Styling

- **Colors & Fonts**: Modify `tailwind.config.js`
- **Global Styles**: Edit `src/index.css`
- **Component Styles**: Update className properties in component files

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify:
```bash
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── FeaturedWorks.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Merriweather typography

## 📝 License

MIT

---

**Note**: Remember to replace placeholder content (images, text, contact information) with your actual information before deploying.
