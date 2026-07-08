# 🎓 Lenovo LEAP NextGen Scholar Program — Internship Repository

This repository collects milestone submissions and frontend assignments completed during the **Lenovo LEAP NextGen Scholar Program** internship.

Last updated: 2026-07-08

---

## 👤 Intern

| Parameter | Details |
| :--- | :--- |
| **Intern Name** | Vaibhav Gupta |
| **Internship Track** | AI-Driven Web Application & Product Development |
| **Duration** | 6 Weeks (15.06.2026 to 30.07.2026) |

---

## 🗂 Repository Overview

This workspace contains the final capstone project and multiple independent frontend assignments completed during the internship.

- **Final Project - VidyaLink** — Capstone project for the AI-Driven Web Application & Product Development track. A community-driven peer learning platform and study resource vault for **SDG 4 (Quality Education)**. Features live search, subject/tech filters, consensus upvoting, and a doubt clearance board. Folder: [Final Project- VidyaLink](Final%20Project-%20VidyaLink) | Project Proposal: [SDG_VidyaLink_VaibhavGupta.pdf](file:///d:/vaibhav%20gupta/Coding/Projects----Internship/Lenovo%20leap%20internship/Final%20Project-%20VidyaLink/SDG_VidyaLink_VaibhavGupta.pdf)
- **Assignment 1** — Basic landing page prototype demonstrating component-driven UI and client routing. Folder: [Assignment 1](Assignment%201)
- **Assignment 1 - Draft 2** — Refined/polished version with premium UI styling (glassmorphism). Folder: [Assignment 1-draft 2](Assignment%201-draft%202)
- **MILESTONE 7 - Assignment** — A separate assignment that implements a simple student management UI (components: `StudentCard`, `StudentForm`, `StudentList`). Folder: [MILESTONE 7- Assignment](MILESTONE%207-%20Assignment)

Note: Each project is intended to run independently; you can open and run any of the projects separately.

---

## 🛠 Technology & Tooling

- React (v18 / v19 depending on project)
- Vite (dev server and bundler)
- React Router (where applicable)
- Plain HTML5 / CSS3 / JavaScript (ES6) (for VidyaLink)
- Browser storage (`localStorage` & `sessionStorage` for persistence)
- Premium styling & responsive design (glassmorphism, custom CSS)

---

## 🚀 Quick Start — How to run the projects

### Option A: Running the Capstone Project (Final Project - VidyaLink)
Since the final project is built as a pure client-side application (HTML/CSS/JS only), there are **no dependencies or build steps** required.

1. **Directly in Browser**: Open the [index.html](file:///d:/vaibhav%20gupta/Coding/Projects----Internship/Lenovo%20leap%20internship/Final%20Project-%20VidyaLink/index.html) file directly in any web browser.
2. **Local HTTP Server** (Recommended to avoid CORS/strict file origin restrictions on some features):
   ```powershell
   cd "d:/vaibhav gupta/Coding/Projects----Internship/Lenovo leap internship/Final Project- VidyaLink"
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

### Option B: Running the React + Vite Assignments (Assignment 1, Draft 2, Milestone 7)
Prerequisites: Node.js 18+ and npm.

1. Open a terminal and navigate to the assignment directory. Examples:
   ```powershell
   cd "d:/vaibhav gupta/Coding/Projects----Internship/Lenovo leap internship/Assignment 1-draft 2"
   ```
   or
   ```powershell
   cd "d:/vaibhav gupta/Coding/Projects----Internship/Lenovo leap internship/MILESTONE 7- Assignment"
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Start the Vite dev server:
   ```powershell
   npm run dev
   ```

4. Open the local address shown in your terminal (usually `http://localhost:5173`).

---

## Notable Changes (recent)

- Added **Final Project - VidyaLink** capstone project featuring a fully interactive study resource vault and peer doubt clearance Q&A system mapping to SDG 4.
- Added `MILESTONE 7- Assignment` implementing `StudentCard`, `StudentForm`, and `StudentList` components for a small CRUD-style UI.
- Standardized run instructions and added explicit PowerShell examples for Windows users.
