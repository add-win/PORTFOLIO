# Addwin Alanolikkal - Professional Developer Portfolio

A responsive, high-performance, and visually stunning personal portfolio website showcasing the skills, projects, and achievements of **Addwin Alanolikkal** (Full Stack Developer & AI/ML Enthusiast).

Built with a premium modern design system using **React**, **Vite**, and **Custom Vanilla CSS** (featuring sleek dark/light mode toggle, glassy glassmorphism aesthetics, responsive layouts, and interactive micro-animations).

---

## 🚀 Live Demo & Repository
- **GitHub Repository:** [https://github.com/add-win/PORTFOLIO](https://github.com/add-win/PORTFOLIO)
- **LinkedIn:** [Addwin Alanolikkal](https://www.linkedin.com/in/addwinalanolikkal)
- **LeetCode:** [Addwin_Alanolikkal](https://leetcode.com/u/Addwin_Alanolikkal/)

---

## ✨ Features

- **🌓 Dynamic Dark & Light Modes:** Seamless theme switching with persistence in local storage and initial detection of preferred system schemes.
- **🎨 Glassmorphism & Modern UI Design:** Vibrant, harmonious color palettes, modern typography, premium gradients, and clean responsive card grids.
- **⚡ Fast Performance:** Built on top of **Vite** for blazing fast loading times, instant HMR during development, and highly optimized production builds.
- **📱 Fully Responsive:** Adaptive layouts optimized for desktops, tablets, and mobile displays.
- **📋 Data-Driven Architecture:** All site content (education, experience, projects, skills, certificates) is easily configurable from a single file: `src/data/portfolioData.js`.
- **✉️ Interactive Contact Form:** Built-in contact form which validation-checks inputs and seamlessly interfaces with the default system mail application.

---

## 🛠️ Tech Stack & Libraries

- **Frontend Core:** React 19 (Hooks, Context, State Management)
- **Build System & Tooling:** Vite 8 (Ultra-fast build and development server)
- **Styling:** Custom Vanilla CSS with CSS Variables for theme tokens, Flexbox/Grid for layouts, and smooth keyframe animations
- **Icons:** [lucide-react](https://lucide.github.io/lucide/) for vector iconography
- **Linter:** [oxlint](https://oxc.rs) for ultra-fast, robust code quality linting

---

## 📁 Project Structure

```text
PORTFOLIO/
├── public/                 # Static assets (favicons, PDFs, resumes)
├── src/
│   ├── assets/             # Brand logos & profile graphics
│   ├── components/         # Reusable React UI Components
│   │   ├── About.jsx       # Education timeline & introduction
│   │   ├── About.css       # About styles
│   │   ├── Achievements.jsx# Credentials, hackathons, & chess champion details
│   │   ├── Achievements.css# Achievements styles
│   │   ├── BrandIcons.jsx  # Customized inline brand icons (Github, Linkedin)
│   │   ├── Contact.jsx     # Contact form & sidebar details
│   │   ├── Contact.css     # Contact styles
│   │   ├── Hero.jsx        # Landing hero banner with social links
│   │   ├── Hero.css        # Hero styles
│   │   ├── Navbar.jsx      # Sticky top navigation with theme switch toggle
│   │   ├── Navbar.css      # Navbar styles
│   │   ├── Projects.jsx    # Projects display grid with tag filtering tabs
│   │   ├── Projects.css    # Projects styles
│   │   ├── Skills.jsx      # Skills category pills & icons
│   │   └── Skills.css      # Skills styles
│   ├── data/
│   │   └── portfolioData.js# CENTRAL PROJECT CONTENT DATABASE
│   ├── App.jsx             # Main application layout, theme handling & footer
│   ├── App.css             # Main wrapper styles
│   ├── index.css           # Global design tokens, themes & CSS utilities
│   └── main.jsx            # React root mount entrypoint
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

## ✍️ Customizing Portfolio Data

You don't need to dive into individual component code to update your details. Simply open `src/data/portfolioData.js` and modify the fields inside the `portfolioData` object:

```javascript
export const portfolioData = {
  personal: {
    name: "Addwin Alanolikkal",
    title: "Full Stack Developer & AI/ML Enthusiast",
    email: "addwinalanolikkal18@gmail.com",
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
