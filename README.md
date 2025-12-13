# Harshan Cabs - React Website

A modern, fully responsive React-based website for Harshan Cabs taxi service with stunning animations and user experience.

## ✨ Features

- 🚗 Modern React single-page application
- 🎨 Beautiful UI with gradient designs and smooth animations
- 📱 Fully responsive design for all devices
- 🗺️ Tour packages for Karnataka, Kerala, and Tamil Nadu
- 📝 Interactive booking form with real-time validation
- 🎭 Scroll reveal animations throughout the site
- 📲 Floating WhatsApp button for instant contact
- ⬆️ Smooth scroll-to-top button
- 🎯 Mobile-friendly hamburger menu with animations
- 💫 Loading screen with animated taxi
- ⚡ Fast performance with Vite
- 🔍 SEO optimized with meta tags

## 🎯 New Enhancements

### Interactive Features
- **Smart Navigation** - Fixed header that changes on scroll with smooth transitions
- **Mobile Menu** - Fully animated hamburger menu with slide-in effect and backdrop
- **Scroll Animations** - Elements fade and slide in as you scroll
- **WhatsApp Integration** - Floating button with pulse animation for instant messaging
- **Back to Top** - Smooth scroll button that appears after scrolling

### Enhanced Booking Form
- **Visual Cab Selection** - Interactive cards to choose cab type with pricing
- **Real-time Validation** - Instant feedback with animated error messages
- **Loading States** - Spinner animation during form submission
- **Success Animation** - Celebratory confirmation with booking summary
- **Icon Integration** - Font Awesome icons for better visual clarity

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with animations and transitions
- **Font Awesome 6.5** - Icons library
- **Intersection Observer API** - Scroll animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd harshan-cabs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
harshan-cabs/
├── public/
│   └── assets/          # Images and static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx   # Navigation with scroll effect
│   │   ├── ScrollToTop.jsx    # Back to top button
│   │   ├── WhatsAppButton.jsx # Floating WhatsApp contact
│   │   ├── LoadingScreen.jsx  # Initial loading animation
│   │   └── ScrollReveal.jsx   # Scroll animation wrapper
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── BookNow.jsx
│   │   ├── Karnataka.jsx
│   │   ├── Kerala.jsx
│   │   └── TamilNadu.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 📄 Pages

- **Home** (`/`) - Landing page with services, destinations, and testimonials
- **Book Now** (`/book-now`) - Enhanced booking form with cab type selection
- **Karnataka Tours** (`/karnataka`) - Karnataka tour packages and destinations
- **Kerala Tours** (`/kerala`) - Kerala tour packages and destinations
- **Tamil Nadu Tours** (`/tamilnadu`) - Tamil Nadu tour packages and destinations

## 🎨 Customization

### Colors

Edit CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #ffd700;
  --secondary-color: #e0b000;
  --background-dark: #000;
  --background-light: #1a1a1a;
}
```

### WhatsApp Number

Update in `src/components/WhatsAppButton.jsx`:
```javascript
const phoneNumber = '919842274790'; // Your number with country code
```

### Content

Update content in respective page components in `src/pages/`

## 🏗️ Building for Production

1. Build the project:
```bash
npm run build
```

2. The production-ready files will be in the `dist/` folder

3. Preview the production build:
```bash
npm run preview
```

## 🌐 Deployment

The built files in `dist/` can be deployed to any static hosting service:
- **Vercel** (Recommended - One-click deployment)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Firebase Hosting**

### Quick Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## 📞 Contact

**Harshan Cabs**
- 📱 Phone: +91 9842274790
- 📍 Address: 3G2A EB COLONY, PATCHAPALAYAM ROAD, KURUMBAPALAYAM, Coimbatore - 641107
- 🕒 Open: 06:00 AM - 11:00 PM (Daily)

## 📄 License

© 2025 Harshan Cabs. All rights reserved.

