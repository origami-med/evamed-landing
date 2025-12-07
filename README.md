# evamed Landing Page

A modern, SEO-optimized landing page for evamed - India's Most Doctor Friendly EMR, built with TailwindCSS and Petite Vue.

## Features

- **Component-based architecture** - Clean, modular, and maintainable code
- **Single config file** - All content editable from `src/config.js`
- **SEO optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- **Responsive design** - Mobile-first approach with fixed mobile menu navigation
- **TailwindCSS** - Utility-first CSS framework for rapid styling
- **Petite Vue** - Lightweight progressive enhancement framework (6KB)

## Project Structure

```
evamed-landing/
├── index.html              # Main HTML entry point
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # TailwindCSS configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite build configuration
├── src/
│   ├── config.js           # ⭐ ALL CONTENT - Edit this file only
│   ├── main.js             # Application entry point
│   ├── components/         # Reusable components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── FeatureCard.js
│   │   ├── PricingCard.js
│   │   ├── AddonCard.js
│   │   ├── TestimonialCard.js
│   │   ├── ContactForm.js
│   │   ├── Footer.js
│   │   └── Modal.js
│   └── styles/
│       └── input.css       # TailwindCSS directives
└── dist/                   # Built output (generated)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Editing Content

**IMPORTANT:** All content should be edited in `src/config.js` only. This is the single source of truth for all text, links, images, and configuration.

The config file includes:
- Navigation items
- Hero section content
- Features
- Pricing plans
- Add-ons
- Testimonials
- Contact form labels
- Footer links and social media
- Legal content (Privacy Policy, Terms & Conditions)
- SEO meta information

## SEO Features

This landing page is fully optimized for search engines with:

- **Meta Tags**: Title, description, keywords, robots
- **Open Graph**: Complete OG tags for social sharing
- **Twitter Cards**: Rich previews for Twitter
- **Structured Data (JSON-LD)**:
  - Organization schema
  - SoftwareApplication schema
  - BreadcrumbList schema
- **Semantic HTML**: Proper HTML5 elements
- **Accessibility**: ARIA labels, keyboard navigation

## Technologies

- **TailwindCSS** - Utility-first CSS framework
- **Petite Vue** - Progressive enhancement framework
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 by Innovea Logitech


