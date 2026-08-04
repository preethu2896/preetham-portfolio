<div align="center">

# 🚀 Preetham Bhandary — Developer & AI Portfolio

### *Build Smarter. Automate More. Earn Online.*

[![Live Portfolio](https://img.shields.io/badge/Live_Demo-Portfolio-FF5B1F?style=for-the-badge&logo=vercel&logoColor=white)](https://preetham-portfolio-five.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=for-the-badge)](LICENSE)
[![GitHub Profile](https://img.shields.io/badge/GitHub-preethu2896-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/preethu2896)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Preetham_Bhandary-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/preethambhandary)

---

</div>

## 📌 Overview

Welcome to the official repository of **Preetham Bhandary's Portfolio & AI Showcase**. 

This application is a modern, high-performance developer portfolio featuring a unique **sketchbook & paper-ink design system**, interactive project case studies, and an **embedded AI Assistant ("Ask Preetham")** powered by **Google Gemini 2.5 Flash** via Vercel Serverless Functions.

Preetham B is a **Computer Science & Design student** at Canara Engineering College (2022–2026) and an **AI Engineer Intern** at Inventeron Technologies LLP. He specializes in AI/ML solutions, full-stack software development, automated workflows, and digital products.

---

## ✨ Key Features

- 🎨 **Distinctive Sketchbook Aesthetic**: Custom hand-drawn visual style with interactive cards, sticker badges, doodle underlines, and micro-animations.
- 🤖 **"Ask Preetham" AI Chatbot**: An embedded AI companion powered by Gemini 2.5 Flash API (`api/chat.js`) that answers visitor questions about Preetham's skills, projects, background, and achievements in real time.
- 📂 **Detailed Case Studies**: Standalone deep-dive pages for flagships:
  - 🛡️ **AutoCTI** (Cyber Threat Intelligence System)
  - 🚦 **NavMind AI** (Traffic Prediction & Route Optimization)
  - 🗳️ **Electra** (Secure Educational E-Voting System)
  - 🎨 **InkLayer** (Streetwear Brand & Digital Experience Canvas)
- 🌙 **Dark & Light Mode**: Fluid theme toggle with persistent user preference using CSS custom properties.
- ⚡ **Zero-Framework Speed**: Blazing-fast static pages (HTML5, CSS3, Vanilla JS) backed by serverless API handlers for minimum overhead.
- 📱 **Fully Responsive Layout**: Seamless experience across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies & Tools |
| :--- | :--- |
| **Frontend** | HTML5, Vanilla CSS3 (Design Tokens, Flexbox, Grid), JavaScript (ES6+) |
| **Typography** | Google Fonts (*Caveat*, *Patrick Hand*, *Rubik Mono One*, *JetBrains Mono*, *DM Serif Display*) |
| **Backend / API** | Vercel Serverless Functions (`Node.js`), Gemini 2.5 Flash REST API |
| **AI / Machine Learning** | Gemini API (`generativelanguage.googleapis.com`), AutoML, Threat Intelligence Models |
| **Deployment & Hosting** | Vercel Serverless Platform |
| **Version Control** | Git, GitHub |

---

## 📂 Directory Structure

```text
portfolio/
├── api/
│   └── chat.js               # Vercel Serverless endpoint for Gemini AI Chatbot
├── photos/                   # Project assets, avatars, and visual media
├── index.html                # Main homepage & interactive landing view
├── projects.html             # Showcase directory of all featured builds
├── project-autocti.html      # Case study: AutoCTI (Automated Cyber Threat Intelligence)
├── project-navmind.html      # Case study: NavMind AI (Smart Route & Traffic Prediction)
├── project-electra.html      # Case study: Electra (Secure Educational E-Voting System)
├── project-inklayer.html     # Case study: InkLayer (Streetwear & Design Canvas)
├── shared.css                # Global design system, theme variables, & animations
├── shared.js                 # Global UI interactions, AI Chat UI, smooth scroll, theme logic
├── .env                      # Environment variables (Gemini API key - local testing)
├── .gitignore                # Git exclusions
└── README.md                 # Project documentation
```

---

## 🌟 Featured Projects

### 1. 🛡️ AutoCTI — Cyber Threat Detection System
- **Description**: Automated Cyber Threat Intelligence platform providing real-time threat detection and classification.
- **Tech Stack**: Python, FastAPI, React, AutoML, Machine Learning.
- **Highlights**: IEEE Research Published, automated anomaly detection pipeline.

### 2. 🚦 NavMind AI — Traffic Prediction & Route Recommendation
- **Description**: Smart traffic forecasting and intelligent route optimization system based on live spatial analytics.
- **Tech Stack**: Python, Machine Learning, Geospatial Data Pipelines, JavaScript.
- **Highlights**: KSCST Selected Project, real-time congestion heatmaps.

### 3. 🗳️ Electra — Secure E-Voting Platform
- **Description**: Encrypted, tamper-proof electronic voting system tailored for educational institution elections.
- **Tech Stack**: HTML/CSS, JavaScript, Node.js, Security & Encryption Protocols.
- **Highlights**: Verifiable audit trail and role-based ballot authorization.

### 4. 🎨 InkLayer — Streetwear Brand & Digital Platform
- **Description**: E-commerce and brand showcase combining modern streetwear design with digital customer experience.
- **Tech Stack**: HTML5, CSS3, JavaScript, Brand Architecture.

---

## 🏆 Key Achievements & Certifications

- 📄 **IEEE Research Publication**: Authored research in AI & automated threat intelligence.
- 🥇 **KSCST Project Selection**: Recognized by Karnataka State Council for Science and Technology.
- 🎓 **Google AI Essentials Certification**: Verified expertise in foundational & generative AI workflows.
- 🗄️ **PostgreSQL Certification**: Certified in relational database design & query optimization.

---

## ⚙️ Environment & Local Setup

### Prerequisites
- **Node.js**: v18.x or higher
- **Vercel CLI** *(optional, for testing serverless API locally)*: `npm i -g vercel`
- **Google Gemini API Key**: Obtain from [Google AI Studio](https://aistudio.google.com/)

### Step-by-Step Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/preethu2896/preetham-portfolio.git
   cd preetham-portfolio
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Run Locally using Vercel CLI**:
   ```bash
   vercel dev
   ```
   This will start both static file serving and the serverless `api/chat.js` endpoint at `http://localhost:3000`.

4. **Or preview static files directly**:
   You can open `index.html` directly in your browser or use any static file server (e.g. `npx serve .` or VS Code Live Server).

---

## 🚀 Deployment

This portfolio is configured for 1-click continuous deployment on **Vercel**.

1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Set the Environment Variable in Vercel Dashboard:
   - Key: `GEMINI_API_KEY`
   - Value: `Your Google Gemini API Key`
3. Deploy! Every `git push` to `main` will automatically trigger a production build.

---

## 📬 Contact & Connect

- **Portfolio**: [preetham-portfolio-five.vercel.app](https://preetham-portfolio-five.vercel.app/)
- **LinkedIn**: [Preetham Bhandary](https://linkedin.com/in/preethambhandary)
- **GitHub**: [@preethu2896](https://github.com/preethu2896)
- **Education**: Canara Engineering College — B.E. in Computer Science & Design (2022–2026)

---

<div align="center">

⭐ **Star this repository if you found it inspiring or helpful!** ⭐  
*Designed & Developed with ❤️ by Preetham Bhandary*

</div>
