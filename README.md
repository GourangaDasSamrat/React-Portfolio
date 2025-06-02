# Modern React Portfolio 🚀

<div align="center">

[![Vercel Status](https://img.shields.io/badge/vercel-deployed-brightgreen?logo=vercel)](https://vercel.com/project/prj_cOKIoKkwCgxQDrxizXOuHKBjaJeO)
[![Website Status](https://img.shields.io/website?url=https://react-portfolio-indol-eight.vercel.app/)](https://react-portfolio-indol-eight.vercel.app/)
[![Last Updated](https://img.shields.io/github/last-commit/GourangaDasSamrat/React-Portfolio?label=Last%20Updated&color=success)](https://github.com/GourangaDasSamrat/React-Portfolio/commits/main)

</div>

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

</div>

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gouranga-das-samrat)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://gourangadas.netlify.app/)
[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@gouranga.das.khulna)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/gouranga_khulna)

</div>

## 🌟 Overview

A modern, responsive portfolio website showcasing my professional journey and technical expertise. Built with React and Vite, featuring an elegant dark/light theme, smooth animations, and a user-friendly interface. This portfolio demonstrates my commitment to clean code, modern design principles, and optimal user experience. ✨

[View Live Demo](https://react-portfolio-indol-eight.vercel.app/) • [Report Bug](https://github.com/GourangaDasSamrat/React-Portfolio/issues) • [Request Feature](https://github.com/GourangaDasSamrat/React-Portfolio/issues)

## ✨ Key Features

- ⚡️ **Lightning Fast**: Built with React 18 + Vite for optimal performance
- 🎨 **Modern Design**: Clean, professional, and user-friendly interface
- 🌓 **Theme Toggle**: Seamless dark/light mode switching with context persistence
- 📱 **Responsive**: Fully responsive design across all devices and screen sizes
- 🎯 **Dynamic Projects**: Interactive project showcase with live demos
- 💪 **Skills Matrix**: Comprehensive display of technical expertise
- 📬 **Contact Integration**: Professional contact form with validation
- 🔍 **SEO Optimized**: Implemented meta tags and semantic HTML
- 🚀 **Performance**: Optimized assets and lazy loading for fast load times

## 🛠️ Tech Stack

### Frontend

- ⚛️ **React 18**: For building a scalable and modern UI
- 📦 **Vite**: Next-generation frontend tooling
- 🎨 **CSS Modules**: For scoped and maintainable styling
- 💾 **Context API**: For efficient state management
- 🔄 **React Router**: For seamless navigation
- 📱 **Media Queries**: For responsive design

### Development Tools

- 🔧 **ESLint**: For code quality and consistency
- 🎯 **Prettier**: For automated code formatting
- 📦 **npm**: For package management
- 🐙 **Git**: For version control
- 📝 **VSCode**: Development environment

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/GourangaDasSamrat/React-Portfolio.git
   ```

2. Navigate to the project directory

   ```bash
   cd React-Portfolio
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory

   ```bash
   cp .env.example .env
   ```

5. Set up your EmailJS credentials

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an Email Service (Gmail, Outlook, etc.)
   - Create an Email Template
   - Get your credentials and add them to the `.env` file:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

6. Start the development server
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```bash
React-Portfolio/
├── index.html                 # Entry point HTML
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── public/                  # Static assets
│   └── favicon.ico          # Site favicon
└── src/                     # Source code
    ├── App.jsx             # Root component
    ├── main.jsx           # Application entry point
    ├── App.css            # Global styles
    ├── index.css         # Root styles
    ├── assets/           # Media assets
    │   ├── svg/          # SVG icons and images
    │   ├── images/       # Project images
    │   └── cv.pdf       # Resume/CV file
    ├── common/           # Shared components
    │   ├── ProjectCard.jsx    # Project card component
    │   ├── SkillList.jsx     # Skills list component
    │   └── ThemeContext.jsx  # Theme context provider
    └── sections/         # Page sections
        ├── Hero/        # Hero section
        ├── Projects/    # Projects showcase
        ├── Skills/     # Skills display
        ├── Contact/    # Contact form
        └── Footer/     # Footer section
```

## 🚀 Deployment

### Deploying to Vercel

1. Install Vercel CLI

   ```bash
   npm install -g vercel
   ```

2. Login to Vercel

   ```bash
   vercel login
   ```

3. Configure build settings in `vercel.json`:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist" }
       }
     ]
   }
   ```

4. Deploy your site:
   ```bash
   vercel # for development
   vercel --prod # for production
   ```

Current deployment: [https://react-portfolio-indol-eight.vercel.app/](https://react-portfolio-indol-eight.vercel.app/)

### Performance Optimization

- Images are optimized and served in WebP format
- Lazy loading implemented for images and components
- Code splitting for better chunk management
- Asset preloading for critical resources

## 📱 Preview & Screenshots

<div align="center">
  <img src="src/assets/Design%20uten%20navn.png" alt="Portfolio Preview" width="600"/>
  <br/>
  <i>Home Page</i>
  <br/><br/>
  <img src="src/assets/Design%20uten%20navn%20(1).png" alt="Projects Section" width="600"/>
  <br/>
  <i>Projects Section</i>
  <br/><br/>
  <img src="src/assets/Design%20uten%20navn%20(2).png" alt="Contact Section" width="600"/>
  <br/>
  <i>Contact Section</i>
</div>

## 📊 Performance & Best Practices

- **Lighthouse Score**:

  - Performance: 98/100
  - Accessibility: 100/100
  - Best Practices: 100/100
  - SEO: 100/100

- **Core Web Vitals**:
  - First Contentful Paint: < 1s
  - Largest Contentful Paint: < 2s
  - Cumulative Layout Shift: 0
  - First Input Delay: < 100ms

## 🤝 Connect with Me

<div align="center">

[![LinkedIn Profile](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/gouranga-das-samrat)
[![Portfolio Website](https://img.shields.io/badge/Portfolio-Visit-000000?style=for-the-badge&logo=About.me)](https://gourangadas.netlify.app/)
[![Medium Blog](https://img.shields.io/badge/Medium-Follow-12100E?style=for-the-badge&logo=medium)](https://medium.com/@gouranga.das.khulna)
[![Twitter Follow](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=twitter)](https://x.com/gouranga_khulna)
[![Facebook Profile](https://img.shields.io/badge/Facebook-Connect-1877F2?style=for-the-badge&logo=facebook)](https://www.facebook.com/gourangadassamrat)
[![Send Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](mailto:gouranga.das.khulna@gmail.com)

</div>

## 👥 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - For the amazing UI library
- [Vite](https://vitejs.dev/) - For the blazing fast build tool
- [EmailJS](https://www.emailjs.com/) - For the contact form functionality
- [Vercel](https://vercel.com/) - For hosting and continuous deployment

---

### 💖 Support My Work

If you find this project helpful or learn something from it, please consider:

- ⭐ Starring this repository
- 🎯 Sharing it with others
- 📝 Following me on [Medium](https://medium.com/@gouranga.das.khulna) for more content
- 💼 Connecting with me on [LinkedIn](https://linkedin.com/in/gouranga-das-samrat)

Your support motivates me to create more open source projects! Feel free to reach out for collaborations or questions.
