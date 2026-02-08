# Nour Issam Ghazi - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my professional experience, projects, and technical skills.

## 🎨 Design Features

- **Modern Tech Minimalist** theme
- **Color Palette**:
  - Primary Background: `#0A192F` (Dark Navy)
  - Primary Accent: `#64FFDA` (Teal/Cyan)
  - Text Primary: `#CCD6F6`
  - Text Secondary: `#8892B0`
- **Interactive Neural Network Background** - Animated particles that respond to mouse movement
- **Typography**: Inter for general text, Fira Code for code-style elements
- **Smooth Animations** and transitions throughout

## 📋 Sections

1. **Hero Section** - Introduction with name, title, and call-to-action buttons
2. **About Me** - Professional background and education details
3. **Technical Arsenal** - Skills organized by category (Mobile, Web, Backend, Databases, Tools)
4. **Professional Projects** - Featured projects including:
   - Mdshw – Medicine Delivery App
   - Captain – Restaurant Management System
   - Financial Remittance Systems
   - Wiki Exporter & Car Maintenance Apps
5. **Experience & Education** - Professional experience, education, and volunteering
6. **Contact** - Social links and contact information

## 🚀 Technologies Used

- **React 18** - UI Framework
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Canvas API** - Neural network background animation

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── NeuralBackground.jsx/css  # Animated background
│   │   ├── Header.jsx/css            # Navigation header
│   │   ├── Hero.jsx/css              # Hero section
│   │   ├── About.jsx/css             # About section
│   │   ├── Skills.jsx/css            # Skills section
│   │   ├── Projects.jsx/css          # Projects showcase
│   │   ├── Experience.jsx/css        # Experience & Education
│   │   └── Contact.jsx/css           # Contact section
│   ├── App.jsx                       # Main app component
│   ├── App.css                       # Global styles
│   ├── index.css                     # Base styles
│   └── main.jsx                      # Entry point
├── public/                           # Static assets
├── package.json
└── vite.config.js
```

## 🎯 Customization

### Update Personal Information

1. **Hero Section** (`Hero.jsx`): Update name and title
2. **About Section** (`About.jsx`): Modify bio and background
3. **Projects** (`Projects.jsx`): Add/edit project details
4. **Skills** (`Skills.jsx`): Update technology stack
5. **Experience** (`Experience.jsx`): Add work experience and education
6. **Contact** (`Contact.jsx`): Update email and social links

### Customize Colors

Edit CSS variables in `App.css`:

```css
:root {
  --primary-bg: #0A192F;
  --primary-accent: #64FFDA;
  --text-primary: #CCD6F6;
  --text-secondary: #8892B0;
  --card-bg: #112240;
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🌐 Deployment

The portfolio can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
1. Update `vite.config.js` with base URL
2. Run `npm run build`
3. Deploy the `dist` folder

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Contact

**Nour Issam Ghazi**
- Email: e.nourghazi99@gmail.com
- LinkedIn: [nourghazi](https://linkedin.com/in/nourghazi)
- GitHub: [nourghazi88](https://github.com/nourghazi88)
- Location: Mezzah, Damascus, Syria

---

Built with ❤️ using React
