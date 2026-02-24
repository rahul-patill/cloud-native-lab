# Cloud Native Lab 🚀

A modern, hands-on playground for exploring the latest in cloud-native development, web frameworks, and premium UI engineering.

---

## 🎯 Project Intent

**Cloud Native Lab** is a centralized repository for experimental projects and high-performance starter templates. It currently features a "Gold Standard" Next.js starter that showcases:
- **Modular Component Architecture** (UI primitives)
- **Modern CSS Engineering** (Tailwind CSS v4 & CSS Variables)
- **High-Performance React** (React 19 & React Compiler)
- **Cloud-Native Deployment** (Optimized for Vercel/Next.js)

---

## 🚀 hello-world-app: Architecture & Features

The primary project in this lab is a meticulously crafted landing page that serves as a benchmark for UI/UX.

### ✨ Key Features
- **Glassmorphism Design:** Sophisticated frosted-glass UI with multi-layered shadows and backdrop blurs.
- **Tailwind CSS v4:** Driven entirely by a tokenized `@theme` block in `globals.css`.
- **Micro-Animations:** Sophisticated entrance sequences and interactive hover states using CSS `cubic-bezier`.
- **Animated Backgrounds:** High-performance, low-latency gradients with floating orbs and particles.
- **Responsive Layout:** A fluid flexbox-based layout that prevents overlap on all device sizes.

### 🛠️ Tech Stack
- **Framework:** [Next.js 16 (Canary)](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Performance:** [React Compiler](https://react.dev/learn/react-compiler) enabled for automatic memoization.

---

## 📂 Project Structure

```
cloud-native-lab/
├── hello-world-app/       # Premium Next.js 16 application
│   ├── src/
│   │   ├── components/ui/ # Reusable UI Primitives (GlassCard, GlowButton, etc.)
│   │   └── app/           # App Router logic, Layouts, & Global Styles
│   └── package.json       # Project-specific dependencies
├── .gitignore             # Standardized ignore rules
├── GEMINI.md              # Contextual instructions for AI agents
└── README.md              # Consolidated documentation (You are here)
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation & Run
1. **Clone and navigate:**
   ```bash
   git clone https://github.com/your-username/cloud-native-lab.git
   cd cloud-native-lab/hello-world-app
   ```

2. **Install & Start:**
   ```bash
   npm install
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧭 Development Conventions
- **Atomic Components:** UI primitives live in `src/components/ui/`.
- **Design Tokens:** Reference the `@theme` variables in `globals.css` (e.g., `var(--color-brand-primary)`) for all styling.
- **Tailwind Only:** No "naked" CSS; use Tailwind utility classes or theme-aware variables.

---

## 🤝 Contributing & License
Contributions are welcome. Please fork the project and open a Pull Request for any improvements. Distributed under the MIT License.

Built with ❤️ by [Cloud Native Lab Contributors]
