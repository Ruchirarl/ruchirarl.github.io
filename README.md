# Ruchira Lokhande - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark/light theme toggle, interactive particles background, and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Interactive Particles**: Animated background particles that react on hover
- **Smooth Navigation**: Single-page application with smooth scrolling
- **Project Carousel**: Auto-scrolling project showcase with manual controls
- **Contact Form**: Functional contact form (ready for backend integration)
- **Medium Integration**: RSS feed integration for blog articles
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Particles**: TSParticles
- **Carousel**: Embla Carousel
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ruchirarl/ruchirarl.github.io.git
cd ruchirarl.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` directory
3. Deploy to GitHub Pages or any static hosting service

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   ├── Navigation.tsx     # Navigation component
│   └── ParticlesBackground.tsx
├── contexts/
│   └── ThemeContext.tsx   # Theme management
├── App.tsx               # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Teal (#0d9488)
- Accent: Amber (#f59e0b)
- Dark theme: Custom dark palette

### Content
Update the content in the respective section components:
- Personal information in `Home.tsx`
- About content in `About.tsx`
- Skills in `Skills.tsx`
- Experience in `Experience.tsx`
- Projects in `Projects.tsx`
- Certifications in `Certifications.tsx`

### Contact Form
The contact form is ready for backend integration. Update the form submission logic in `Contact.tsx` to connect with your preferred service (Formspree, Web3Forms, etc.).

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels and roles
- High contrast ratios
- Reduced motion support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

Ruchira Lokhande - [ruchirarl07@gmail.com](mailto:ruchirarl07@gmail.com)

Project Link: [https://github.com/ruchirarl/ruchirarl.github.io](https://github.com/ruchirarl/ruchirarl.github.io)

