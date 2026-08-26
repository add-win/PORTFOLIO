# Addwin Alanolikkal - Professional Developer Portfolio

A responsive, high-performance, SEO-optimized, and visually stunning personal portfolio website showcasing the skills, projects, internships, and achievements of **Addwin Alanolikkal** (Full Stack Developer & AI/ML Engineer).

Built with a premium modern design system using **React**, **Vite**, and **Custom Vanilla CSS** (featuring sleek dark/light mode toggle, glassy glassmorphism aesthetics, glowing circular photo frame, responsive layouts, and interactive micro-animations).

---

## 🚀 Live Demo & Links
- **Live Portfolio:** [https://addwin.vercel.app](https://addwin.vercel.app)
- **GitHub Repository:** [https://github.com/add-win/PORTFOLIO](https://github.com/add-win/PORTFOLIO)
- **LinkedIn:** [Addwin Alanolikkal](https://www.linkedin.com/in/addwinalanolikkal)
- **LeetCode:** [Addwin_Alanolikkal](https://leetcode.com/u/Addwin_Alanolikkal/)

---

## ✨ Features

- **🖼️ Glowing Circular Photo Frame:** Sleek profile picture container with rotating gradient borders, hover animations, and floating status badges ("Full-Stack & AI", "B.Tech CSE").
- **🔍 Full Search Engine Optimization (SEO):** Includes OpenGraph, Twitter Cards, canonical tags, `sitemap.xml`, `robots.txt`, and rich **JSON-LD Schema.org** (`Person`, `WebSite`, `ProfilePage`) structured data for maximum search engine indexability.
- **💼 Work & Internship Experience Timeline:** Highlights internships at Infosys Springboard, InAmigos Foundation, and Tata.
- **🌓 Dynamic Dark & Light Modes:** Seamless theme switching with persistence in local storage and initial detection of preferred system schemes.
- **🎨 Glassmorphism & Modern UI Design:** Vibrant color palettes, modern typography (Inter, Outfit, Fira Code), premium gradients, and clean responsive card grids.
- **⚡ Ultra-Fast Performance:** Built on top of **Vite** for blazing fast loading times, instant HMR during development, and highly optimized production bundle outputs.
- **📋 Data-Driven Architecture:** All site content (education, experience, projects, skills, certificates) is easily configurable from a single file: `src/data/portfolioData.js`.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Core:** React 19 (Hooks, Context, State Management)
- **Build System & Tooling:** Vite 8 (Ultra-fast build and development server)
- **Styling:** Custom Vanilla CSS with CSS Variables for theme tokens, Flexbox/Grid layouts, and keyframe animations
- **SEO & Metadata:** Schema.org JSON-LD, OpenGraph, Twitter Cards, Sitemap.xml, Robots.txt
- **Icons:** [lucide-react](https://lucide.github.io/lucide/) for vector iconography
- **Linter:** [oxlint](https://oxc.rs) for ultra-fast code quality linting

---

## 📁 Project Structure

```text
PORTFOLIO/
├── public/                 # Static assets (favicons, profile.jpeg, resume PDFs, sitemap.xml, robots.txt)
├── src/
│   ├── assets/             # Brand logos & profile graphics
│   ├── components/         # Reusable React UI Components
│   │   ├── About.jsx       # Bio & education timeline
│   │   ├── About.css       # About styles
│   │   ├── Achievements.jsx# Credentials, hackathons, & conference paper presentation details
│   │   ├── Achievements.css# Achievements styles
│   │   ├── BrandIcons.jsx  # Customized inline brand icons (Github, Linkedin)
│   │   ├── Contact.jsx     # Contact form & sidebar details (Email, Phone, Location)
│   │   ├── Contact.css     # Contact styles
│   │   ├── Experience.jsx  # Internship & work experience timeline
│   │   ├── Experience.css # Experience styles
│   │   ├── Hero.jsx        # Landing hero banner with circular photo frame & social links
│   │   ├── Hero.css        # Hero styles
│   │   ├── Navbar.jsx      # Sticky top navigation with theme switch toggle
│   │   ├── Navbar.css      # Navbar styles
│   │   ├── Projects.jsx    # Projects display grid with tag filtering tabs
│   │   ├── Projects.css    # Projects styles
│   │   ├── Skills.jsx      # Technical skills category pills & icons
│   │   └── Skills.css      # Skills styles
│   ├── data/
│   │   └── portfolioData.js# CENTRAL PROJECT CONTENT DATABASE
│   ├── App.jsx             # Main application layout, theme handling & footer
│   ├── index.css           # Global design tokens, themes & CSS utilities
│   └── main.jsx            # React root mount entrypoint
├── index.html              # HTML template with SEO meta tags & Schema.org JSON-LD
├── vite.config.js          # Vite build config
├── package.json            # Scripts & dependencies
└── README.md               # Project documentation
```

---

## ⚙️ Getting Started

### 📋 Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/add-win/PORTFOLIO.git
   cd PORTFOLIO
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local address displayed in the terminal (usually `http://localhost:5173`).

---

## 📦 Production & Deployment

### Build the Project
To generate the production-ready build artifacts (highly optimized HTML, JS, and CSS chunks in the `/dist` directory):
```bash
npm run build
```

### Preview the Build
To preview the generated production build locally:
```bash
npm run preview
```

### Linter (Code Quality Check)
To check the codebase for syntax or performance concerns instantly via `oxlint`:
```bash
npm run lint
```

---

## ✍️ Customizing Portfolio Data & Photo

1. **Profile Picture & Resume**: Replace `/public/profile.jpeg` (or `/public/profile.jpg`) with your picture, and `/public/Addwin_Alanolikkal_resume.pdf` with your updated resume PDF.
2. **Text & Portfolio Data**: Open `src/data/portfolioData.js` and modify the fields inside the `portfolioData` object:

```javascript
export const portfolioData = {
  personal: {
    name: "Addwin Alanolikkal",
    title: "Full Stack Developer & AI/ML Engineer",
    email: "addwinalanolikkal18@gmail.com",
    phone: "+91 80861 98653",
    website: "https://addwin.vercel.app",
    // Update links & summary...
  },
  education: [ ... ],
  experience: [ ... ],
  projects: [ ... ],
  skills: { ... },
  achievements: [ ... ],
  certifications: [ ... ]
};
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/add-win/PORTFOLIO/issues) if you have suggestions.
