# Portfolio Website Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173`

## Customization Checklist

### 1. Personal Information
- [ ] Update name and tagline in `src/components/sections/Home.tsx`
- [ ] Add your photo to `public/` folder and update `src/components/sections/About.tsx`
- [ ] Write your personal bio in `src/components/sections/About.tsx`
- [ ] Add your resume PDF to `public/resume.pdf`

### 2. Contact Information
- [ ] Update email, phone, and location in `src/components/sections/Contact.tsx`
- [ ] Update social media links in `src/components/sections/Home.tsx` and `src/components/sections/Contact.tsx`

### 3. Content Updates
- [ ] Update skills and tools in `src/components/sections/Skills.tsx`
- [ ] Update education and experience in `src/components/sections/Experience.tsx`
- [ ] Update projects in `src/components/sections/Projects.tsx`
- [ ] Update certifications in `src/components/sections/Certifications.tsx`
- [ ] Update Medium articles in `src/components/sections/MediumArticles.tsx`

### 4. Contact Form Integration
- [ ] Set up Formspree, Web3Forms, or similar service
- [ ] Update form submission logic in `src/components/sections/Contact.tsx`

### 5. Medium RSS Integration
- [ ] Set up Medium RSS feed URL
- [ ] Update RSS fetching logic in `src/components/sections/MediumArticles.tsx`

### 6. Deployment
- [ ] Push to GitHub repository
- [ ] Enable GitHub Pages in repository settings
- [ ] Configure custom domain (optional)

## Color Scheme

The website uses a sophisticated color palette:
- **Primary**: Teal (#0d9488) - Professional and modern
- **Accent**: Amber (#f59e0b) - Warm and inviting
- **Background**: Dark theme with single black background as requested
- **Text**: High contrast white/gray for readability

## Features Included

✅ **Navigation**: Smooth scroll navigation with mobile menu
✅ **Theme Toggle**: Dark/light theme with system preference detection
✅ **Particles Background**: Interactive particles that react on hover
✅ **Responsive Design**: Mobile-first approach with breakpoints
✅ **Project Carousel**: Auto-scroll with manual controls
✅ **Contact Form**: Ready for backend integration
✅ **Accessibility**: WCAG compliant with keyboard navigation
✅ **Performance**: Optimized with Vite and modern React patterns

## File Structure

```
src/
├── components/
│   ├── sections/          # All page sections
│   ├── Navigation.tsx     # Main navigation
│   └── ParticlesBackground.tsx
├── contexts/
│   └── ThemeContext.tsx   # Theme management
├── App.tsx               # Main app
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Next Steps

1. Replace placeholder content with your actual information
2. Add your photo and resume
3. Set up contact form backend
4. Configure Medium RSS feed
5. Deploy to GitHub Pages
6. Test on different devices and browsers

## Support

If you need help customizing any part of the website, refer to the component files in `src/components/sections/` - each section is well-documented and easy to modify.

