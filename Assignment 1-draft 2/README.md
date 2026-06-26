# 🗺️ SkillPath

SkillPath is a modern, premium technical education platform designed to replace unstructured video playlists with interactive, visual, and highly structured learning paths. Built using React, Vite, and custom glassmorphic styling, SkillPath provides a guided engineering education environment tailored to career growth.

---

## ✨ Features

- **🗺️ Personalized Roadmaps**: Tailored learning paths based on goals, current skillset, and ideal timelines, ensuring learners never get lost in tutorials.
- **💻 Interactive Sandbox**: Concept-ready integration for an embedded in-browser code editor with automated lesson verification and built-in test suites.
- **🏆 Proof of Skill**: Cryptographic skill certificates and shareable profile roadmaps to showcase verified credentials directly to hiring managers.
- **🎨 Premium Dark Aesthetic**: High-fidelity dark mode utilizing glassmorphism, glowing accents, modern typography (Plus Jakarta Sans), and smooth transitions.
- **✉️ Interactive Contact & Support**: A validated messaging system with client-side error handling, success notification toasts, and support links.
- **📱 Fully Responsive**: Tailored grid layouts and a toggleable mobile navigation drawer for seamless learning across all devices.

---

## 🛠️ Tech Stack & Dependencies

The project is built using a modern, lightweight frontend stack:

- **Core Framework**: [React 19.2](https://react.dev/)
- **Build Tool**: [Vite 8.1](https://vite.dev/) (featuring Hot Module Replacement)
- **Routing**: [React Router Dom 7.1](https://reactrouter.com/)
- **Icons**: [Lucide React 1.21](https://lucide.dev/)
- **Linting**: [Oxlint 1.69](https://oxc.rs/) (Next-generation high-performance JS/TS linter)
- **Styling**: Pure CSS3 utilizing advanced CSS Custom Properties (Variables), Flexbox/Grid layouts, and Backdrop Filters for glassmorphic effects.

---

## 📂 Directory Structure

```text
├── public/                 # Static assets (favicons, logos, etc.)
├── src/
│   ├── assets/             # Project-specific images and graphics
│   ├── components/         # Reusable structural and visual components
│   │   ├── CTABanner.jsx          # Call-to-action sections
│   │   ├── FeatureCard.jsx        # Display cards for features/services
│   │   ├── Footer.jsx             # Site footer with newsletter form
│   │   ├── HeroSection.jsx        # Landing page main banner
│   │   ├── Navbar.jsx             # Navigation bar with responsive mobile menu
│   │   └── TestimonialSection.jsx # Student reviews carousel-like grid
│   ├── pages/              # Routing pages
│   │   ├── AboutPage.jsx          # Mission statement, stats, and values
│   │   ├── ContactPage.jsx        # Contact form with validation and feedback states
│   │   ├── LandingPage.jsx        # Main landing page assembling features/testimonials
│   │   └── NotFoundPage.jsx       # Beautiful custom 404 page
│   ├── App.jsx             # Router configuration and global shell layout
│   ├── index.css           # Core design system, variables, global layout, and utilities
│   └── main.jsx            # React application entry point
├── .gitignore
├── .oxlintrc.json          # Oxlint configuration
├── package.json            # Scripts and dependencies
└── vite.config.js          # Vite custom config
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the repository and navigate to the project directory:

```bash
cd "Assignment 1-draft 2"
```

### 2. Install Dependencies

Install all project packages via npm:

```bash
npm install
```

### 3. Run Development Server

Launch the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production

Compile the project assets into a highly optimized bundle under the `dist/` directory:

```bash
npm run build
```

### 5. Preview Production Build

Serve the built production code locally:

```bash
npm run preview
```

### 6. Linting

Scan the codebase for errors or warnings using Oxlint:

```bash
npm run lint
```

---

## 🎨 Design System & Customization

The project uses a centralized design system built on CSS Variables located in [src/index.css](file:///d:/vaibhav%20gupta/Coding/Lenovo%20leap%20internship/Assignment%201-draft%202/src/index.css). You can easily update the global styling by modifying the root values:

```css
:root {
  /* Color Palette - Premium Modern Dark Aesthetic */
  --bg-primary: #0a0b10;
  --bg-secondary: #12131a;
  --bg-glass: rgba(18, 19, 26, 0.75);
  
  --color-primary: #8b5cf6; /* Indigo-purple */
  --color-secondary: #06b6d4; /* Teal-cyan */
  --color-accent: #f43f5e; /* Rose-red */
  --color-success: #10b981; /* Emerald */
  
  --font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}
```

---

## 🤝 Contribution Guidelines

1. **Keep components focused**: Modular design is preferred. Place new reusable sections in `src/components/`.
2. **Follow style guidelines**: Leverage the existing utility classes (`.container`, `.card-glass`, `.grid-3`, `.text-gradient`) to maintain visual consistency.
3. **Verify Lints**: Run `npm run lint` before committing changes to ensure clean, fast, and warning-free code.

---

## 📄 License

This project is licensed under the MIT License.
