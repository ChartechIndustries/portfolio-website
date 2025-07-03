# Portfolio Website

A clean, modern portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, responsive design, and an intuitive navigation structure.

## 🚀 Features

- **Landing Page**: Animated graphic with floating shapes and smooth transitions
- **Home Page**: Grid layout showcasing 4 different project categories
- **Project Detail Pages**: Comprehensive project information with technologies, features, and links
- **About/Contact Page**: Personal information, skills, and contact details
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Page transitions, hover effects, and scroll-triggered animations
- **Modern UI**: Clean design with gradient backgrounds and glass-morphism effects

## 📁 File Structure

```
Portfolio Website/
├── index.html          # Landing page
├── home.html           # Home page with project grid
├── about.html          # About/Contact page
├── project1.html       # Web Development project detail
├── project2.html       # UI/UX Design project detail
├── project3.html       # Mobile Apps project detail
├── project4.html       # Creative Coding project detail
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Personal Information
Edit the following files to update your personal information:

- **`about.html`**: Update bio, skills, and contact information
- **`home.html`**: Modify project titles and descriptions
- **`index.html`**: Change landing page text

### 2. Project Content
Each project detail page (`project1.html` through `project4.html`) contains:

- Project overview and description
- Technologies used (with interactive tags)
- Key features list
- Project links (Live Demo, Code, etc.)

### 3. Styling
The `styles.css` file uses CSS custom properties for easy theming:

- Primary color: `#667eea` (blue)
- Secondary color: `#764ba2` (purple)
- Font: Inter (Google Fonts)

### 4. Images
Replace the placeholder divs with actual images:

```html
<!-- Replace this: -->
<div class="image-placeholder">Project 1</div>

<!-- With this: -->
<img src="path/to/your/image.jpg" alt="Project 1">
```

## 🚀 Getting Started

1. **Open the website**: Double-click `index.html` to open in your browser
2. **Local server** (recommended): Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Navigate**: Start from the landing page and explore the different sections

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small mobile (< 480px)

## 🎯 Key Sections

### Landing Page (`index.html`)
- Animated floating shapes
- Typing effect for title
- Smooth transition to home page

### Home Page (`home.html`)
- 4 project categories in a responsive grid
- Hover animations
- Category tags

### Project Detail Pages
- Back navigation
- Large hero image
- Detailed project information
- Technology tags
- Feature lists
- Project links

### About Page (`about.html`)
- Personal bio and tagline
- Skills organized by category
- Contact information
- Professional links

## 🔧 Technical Features

- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Animations**: Smooth transitions and hover effects
- **Intersection Observer**: Scroll-triggered animations
- **Responsive Images**: Optimized for all screen sizes
- **Keyboard Navigation**: Escape key to go back
- **Touch Support**: Mobile-friendly interactions

## 🎨 Animation Features

- **Page Transitions**: Fade in/out effects
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive feedback on project cards
- **Parallax Effects**: Mouse-responsive floating shapes
- **Typing Effect**: Animated text on landing page

## 📝 Customization Tips

1. **Colors**: Update the gradient colors in `styles.css`
2. **Fonts**: Change the Google Fonts import in HTML files
3. **Content**: Replace placeholder text with your actual projects
4. **Images**: Add your project screenshots and profile photo
5. **Links**: Update project links and social media URLs

## 🌟 Future Enhancements

- Add a blog section
- Implement a contact form
- Add dark mode toggle
- Include a resume download
- Add more interactive animations
- Implement a project filter system

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back!

---

**Happy coding! 🚀** 