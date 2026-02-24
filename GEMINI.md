# Cloud Native Lab — Repository Overview

This repository, `cloud-native-lab`, serves as a **cloud-native learning playground** — a collection of hands-on projects exploring modern web technologies, frameworks, and cloud-native development patterns.

---

## 🎯 Repository Intent

The primary goal is to provide a workspace for cloud-native development experiments. It currently contains a primary Next.js application, `hello-world-app`, which is a modern, responsive web application built with a premium, component-based architecture.

---

## 📂 Project Structure

```
cloud-native-lab/
├── GEMINI.md              ← Current source of truth for AI agents
├── hello-world-app/       ← Next.js starter application
│   ├── src/
│   │   ├── components/    ← Reusable UI Primitives
│   │   │   └── ui/
│   │   │       ├── BackgroundElements.tsx
│   │   │       ├── GlassCard.tsx
│   │   │       └── GlowButton.tsx
│   │   └── app/
│   │       ├── layout.tsx     Root layout (Inter font, metadata)
│   │       ├── page.tsx       Main Hello World page (modularized)
│   │       └── globals.css    Global styles, animations, & design tokens
│   ├── public/                Static assets
│   ├── package.json           Dependencies & scripts
│   ├── next.config.ts         Next.js configuration
│   ├── tsconfig.json          TypeScript configuration
│   ├── eslint.config.mjs      ESLint configuration
│   └── postcss.config.mjs     PostCSS / Tailwind pipeline
├── README.md              ← Consolidated repo documentation
└── .gitignore             ← Standardized ignore rules
```

---

## 🚀 hello-world-app

A **premium-styled Hello World landing page** built with a modern Next.js stack and a focus on clean, reusable UI primitives.

### Tech Stack

| Technology      | Version | Role                              |
| --------------- | ------- | --------------------------------- |
| Next.js         | 16.1.6* | App framework (App Router)        |
| React           | 19.2.3  | UI library                        |
| TypeScript      | ^5      | Type safety                       |
| Tailwind CSS    | ^4      | Utility-first CSS (via PostCSS)   |
| React Compiler  | 1.0.0   | Automatic memoization             |
| ESLint          | ^9      | Code linting                      |

*\*Note: `package.json` specifies Next.js `16.1.6`.*

### Key Architectural Features

- **Component-Based UI:** UI is split into reusable primitives in `src/components/ui/` for better maintainability.
- **Design Tokens:** Centralized CSS variables in `globals.css` control brand colors, glass effects, and animations.
- **Enhanced Visual Hierarchy:** Improved type scale and vertical rhythm using Tailwind v4 and custom cubic-bezier animations.
- **Interactive Polish:** Refined entrance sequences, hover scales, and glassmorphism blurs for a premium feel.

---

## 🛠️ Building and Running

All commands should be executed from within the `hello-world-app` directory:

```bash
cd hello-world-app
npm install        # Install dependencies
npm run dev        # Starts dev server at http://localhost:3000
```

### Available Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `npm run dev`    | Start development server (using standard dev) |
| `npm run build`  | Create production build                      |
| `npm run start`  | Serve production build                       |
| `npm run lint`   | Run ESLint checks                            |

---

## 🧭 Conventions & Constraints

### Operational Constraints
- **No Backend:** No backend or API routes are currently implemented.
- **No Database:** No database is currently connected.
- **No Testing:** No testing framework is currently set up.
- **No Turbopack:** `npm run dev` currently runs without Turbopack (no `--turbo` flag in `package.json`).

### Development Conventions
- **Component First:** New UI elements should be added as reusable primitives in `src/components/ui/`.
- **Token Usage:** Reference CSS variables (`--brand-primary`, etc.) for consistency across styles.
- **App Router:** Follow Next.js App Router patterns in `src/app/`.
- **Font:** Inter (loaded via `next/font/google`).

---

## 📝 Future Expansion

This repository is designed to grow with additional cloud-native experiments. New projects should be added as sibling directories to `hello-world-app/`, each with its own `README.md` and independent dependency management.
