# 📮 PostSpace

PostSpace is a modern, high-performance Progressive Web Application (PWA) designed for seamless post management. Built with React, Vite, and Tailwind CSS v4, it features comprehensive offline support using advanced Service Worker caching strategies rather than vulnerable client-side storage mechanisms.

---

## ✨ Features

*   **📱 Pure PWA Experience:** Fully downloadable and installable to your mobile home screen or desktop via an intuitive, custom in-app banner.
*   **🔒 Secure Offline Architecture:** Implements a strict **Network-First Service Worker cache** logic via Workbox. Data is sandboxed safely away from Cross-Site Scripting (XSS) tracking vulnerabilities inherent in traditional `localStorage`.
*   **🎨 Tailwind CSS v4 Styling:** Features a polished, modern dashboard interface using a responsive Indigo & Cyan color scheme layout.
*   **⚡ Optimized Forms:** Utilizes Formik implementation for predictable, robust state mutation transitions and inline text layout handlers.
*   **🛠️ Resilient CRUD Controls:** Create, Read, Update, and Delete actions synchronize seamlessly through a unified structural data stream pipeline.

---

## 🛠️ Tech Stack & Dependencies

*   **Frontend Framework:** React 18+ (Vite Bundler Archetype)
*   **Styling Engine:** Tailwind CSS v4
*   **Routing Architecture:** React Router DOM v6
*   **Form Management:** Formik
*   **PWA Core Configuration:** `vite-plugin-pwa` (Workbox Engine)
*   **Mock Endpoint API:** JSONPlaceholder REST Pipeline

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your local machine.

### Installation

1. Clone the project repository code:
   ```bash
   git clone [https://github.com/SenaEnana/Posts-App.git](https://github.com/SenaEnana/Posts-App.git)
   cd postspace
```
2. Install the production and design dependencies:
```bash
npm install
```
3. Ensure PWA graphic icons are placed correctly inside the public folder:

* public/pwa-192x192.png (Standard App Launcher Icon)
* public/pwa-512x512.png (Splash Screen & Adaptive Maskable Graphic)

---

## ⚙️ Development vs. Production Compilation

Running Locally (Development Mode)

To spin up the development environment workspace server:

```bash
npm run dev
```

*💡 Note: The background service worker layer remains disabled during local dev compilation to avoid servicing stale UI code while you make styling updates.

## Simulating the full PWA Capabilities (Production Preview)
 
To accurately test the download banner installations, network disconnections, and offline runtime data retrieval caching rules:

```bash
npm run build
npm run preview
```
