# Dev Stack — Technology Stack Builder

A React-based web application that lets users explore development technologies and build a personalized technology stack by selecting and removing technology cards.

**Live Demo:** https://silver-sundae-b2e30c.netlify.app/  
**Repository:** https://github.com/Nafsun-baust/dev-stack

## Overview

Dev Stack presents a collection of technologies grouped by category. Users can add technologies to their own stack, avoid duplicate selections, remove individual items, or clear the complete selection.

Technology information is loaded from a local JSON file, so no external API key is required.

## Key Features

- Explore technology cards across categories such as frontend, backend, database, language, styling, and DevOps.
- Build a personalized stack by selecting technologies.
- Prevent duplicate technologies from being added.
- Remove a selected technology individually.
- Clear the entire selected stack.
- Display toast notifications for successful, duplicate, and removal actions.
- Load technology information from `public/data.json`.

## Technology Stack

- **UI Library:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Icons:** React Icons
- **Notifications:** React Toastify
- **Data:** Local JSON
- **Linting:** Oxlint

## Main Dependencies

### Runtime dependencies

- `react`
- `react-dom`
- `@tailwindcss/vite`
- `tailwindcss`
- `react-icons`
- `react-toastify`

### Development dependencies

- `vite`
- `typescript`
- `@vitejs/plugin-react`
- `oxlint`
- `@types/node`
- `@types/react`
- `@types/react-dom`

See [package.json](./package.json) for exact package versions.

## Run Locally

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Nafsun-baust/dev-stack.git
   cd dev-stack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite in your browser (usually [http://localhost:5173](http://localhost:5173)).

### Available Scripts

- `npm run dev` — start the Vite development server.
- `npm run build` — type-check and build the production app.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run Oxlint.

## Project Structure

- `src/components/` — reusable interface components.
- `src/App.tsx` — main application layout.
- `src/main.tsx` — application entry point.
- `public/data.json` — technology catalogue used by the app.

## Project Links

- **Live Demo:** https://silver-sundae-b2e30c.netlify.app/
- **GitHub Repository:** https://github.com/Nafsun-baust/dev-stack

---

Developed by **MD Nafsun Kabir**.
