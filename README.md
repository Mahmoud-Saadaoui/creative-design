# Creative Design - Modern Portfolio Website

![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A modern, animated portfolio website showcasing creative design work with smooth animations, interactive elements, and a responsive design.

---

## 🌐 Live Demo

[**View Live Site**](https://saadaoui-forkan.github.io/creative-design/)

---

## ✨ Features

### 🎨 Design & Animations
- **Hero Section with Particles**
  - Interactive canvas-based particle system
  - Mouse interaction effect (particles connect to cursor)
  - Animated letter-by-letter title reveal
  - Gradient background with floating shapes

- **Sticky Navigation Bar**
  - Fixed position with scroll-based style change
  - Glassmorphism effect (backdrop blur)
  - Active link highlighting based on scroll position
  - Hamburger menu for mobile/tablet devices

- **Scroll Reveal Animations**
  - Elements appear with smooth transitions when scrolling
  - Multiple animation types: fade-up, slide-left, slide-right, scale
  - Staggered delays for sequential reveals

- **Customer Testimonials Carousel**
  - Auto-scrolling carousel (4-second interval)
  - Navigation arrows and dot indicators
  - Touch/swipe support for mobile
  - Pause on hover functionality

- **Team Cards with Interactive Effects**
  - Flip-style reveal on click
  - Smooth background transition animation
  - Glassmorphism overlay effect

- **Contact Form**
  - Animated form reveal
  - Floating label inputs
  - Modern button styling

### 📱 Responsive Design
- **Desktop** (>1024px): Full multi-column layout
- **Laptop** (769-1024px): Adapted grid with reduced spacing
- **Tablet** (481-768px): Two-column layout with hamburger menu
- **Mobile** (320-480px): Single column with optimized touch interactions

### 🎯 UX Features
- Smooth scroll navigation
- Scroll-to-top button
- Active section highlighting in navbar
- Hover effects on all interactive elements
- Optimized performance with Intersection Observer API

---

## 🛠️ Technologies Used

| Technology | Version | Usage |
|------------|---------|-------|
| HTML5 | - | Semantic markup, structure |
| CSS3 | - | Styling, animations, responsive design |
| JavaScript (ES6+) | - | Interactivity, DOM manipulation |
| Font Awesome | 6.1.1 | Icons |
| Google Fonts | - | Monoton, Bellota Text |

---

## 📦 Project Structure

```
creative-design/
├── index.html          # Main HTML file
├── main.css            # All styles and animations
├── script.js           # JavaScript functionality
├── img/                # Images directory
│   ├── team-member-1.jpg
│   ├── team-member-2.jpg
│   ├── team-member-3.jpg
│   ├── customer-img-1.jpg
│   ├── customer-img-2.jpg
│   ├── customer-img-3.jpg
│   └── form-img.png
├── .git/
├── .vscode/
└── README.md           # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional) or GitHub Pages for hosting

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/saadaoui-forkan/creative-design.git
   cd creative-design
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (with npx)
     npx serve

     # Using VS Code Live Server extension
     Right-click on index.html → Open with Live Server
     ```

3. **Visit the site**
   ```
   http://localhost:8000
   ```

### Deployment to GitHub Pages

1. Push to your GitHub repository
2. Go to **Settings** → **Pages**
3. Select **Source**: Deploy from a branch
4. Select **Branch**: master / main
5. Click **Save**

---

## 📖 Usage Guide

### Navigation
- Click any navbar link to smooth-scroll to that section
- The navbar changes style when scrolling down
- Active link is highlighted based on current section

### Hero Section
- Move your mouse over the hero area to see particle connections
- Particles randomly float and connect when close to each other

### Customers Carousel
- **Auto-scroll**: Cards rotate every 4 seconds
- **Manual navigation**: Click left/right arrows
- **Direct access**: Click dots to jump to a specific card
- **Pause**: Hover over the carousel to pause auto-scroll
- **Mobile**: Swipe left/right to navigate

### Team Cards
- Click the **+** icon to reveal team member details
- Click the **−** icon to hide details
- Background animates with a scale effect

### Contact Form
- Click "Send me a letter" to reveal the form
- Fill in your details and message
- Form validation ready for backend integration

---

## 🎨 Customization

### Colors
Edit the CSS variables in `main.css`:
```css
:root {
    --color1: rgba(50, 231, 255, 0.8);  /* Primary cyan */
    --color2: rgba(50, 231, 255, 0.1);  /* Light cyan */
    --color3: #f08e0f;                   /* Orange accent */
}
```

### Fonts
Change Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

### Particle Settings
Edit in `script.js`:
```javascript
const particleCount = 80;  // Number of particles
const autoScrollDelay = 4000;  // Carousel interval (ms)
```

### Adding New Team Members
Add a new card in `index.html`:
```html
<div class="team-card reveal-scale reveal-delay-X">
    <img src="./img/your-image.jpg" alt="Name">
    <h4>Name</h4>
    <span>Role</span>
    <!-- ... -->
</div>
```

---

## 🔧 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Edge | ✅ 90+ |
| Mobile Safari | ✅ iOS 14+ |
| Chrome Mobile | ✅ Android 10+ |

---

## 📊 Performance

- **Lighthouse Score**: 90+ (Performance)
- **First Contentful Paint**: < 1s
- **Optimizations**:
  - Lazy loading ready for images
  - CSS animations using transform/opacity (GPU accelerated)
  - Intersection Observer for efficient scroll detection
  - Minimal JavaScript dependencies

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Forkan Saadaoui**

- GitHub: [@saadaoui-forkan](https://github.com/saadaoui-forkan)
- Live Site: [creative-design](https://saadaoui-forkan.github.io/creative-design/)

---

## 🙏 Acknowledgments

- Design inspiration from modern web design trends
- Font Awesome for the icon set
- Google Fonts for typography
- The web development community

---

## 📞 Contact

For questions or suggestions, please open an issue on GitHub or contact via the form on the website.

---

**Made with ❤️ and lots of ☕**
