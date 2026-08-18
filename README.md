# Portfolio

A modern, interactive personal portfolio website built with **React, TypeScript, Vite, Tailwind CSS, Three.js, and Framer Motion**. It showcases projects, skills, experience, and professional information with animations and interactive 3D elements.

## Tech Stack

* React 19
* TypeScript
* Vite
* Tailwind CSS
* Three.js
* React Three Fiber
* Framer Motion
* GSAP
* React Router
* Spline
* Lottie
* EmailJS

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Add your EmailJS credentials to the corresponding variables.

> **Note:** Do not commit your `.env` file to GitHub. Make sure `.env` is included in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
```

Open the URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```
