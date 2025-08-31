# Carole's Personal Website

A beautiful, responsive personal website with an Egyptian-inspired design theme. Built with HTML, CSS, and JavaScript, featuring modern design principles and smooth animations.

## 🌟 Features

### Homepage
- **Hero Section**: Eye-catching introduction with animated Egyptian ornaments
- **Bio Section**: Personal information and statistics
- **Current Work**: Showcase of ongoing projects and research
- **CV Section**: Professional experience and skills
- **Contact Section**: Contact form and social media links

### Stuff I Learned Page
- **Blog-style Layout**: Share knowledge and insights
- **Category Filtering**: Organize content by topic
- **Search Functionality**: Find specific learnings quickly
- **Interactive Cards**: Beautiful presentation of content

### Publications Page
- **Academic Portfolio**: Display research papers and articles
- **Advanced Filtering**: Filter by type, year, and category
- **Publication Stats**: Track your academic output
- **Professional Layout**: Suitable for academic profiles

### Recipes Page
- **Culinary Collection**: Share your favorite recipes
- **Cuisine Categories**: Organize by regional styles
- **Difficulty & Time Filters**: Help users find suitable recipes
- **Detailed Recipe Modal**: Complete cooking instructions

## 🎨 Design Features

- **Egyptian Theme**: Inspired by ancient Egyptian aesthetics
- **Color Palette**: Rich golds, deep blues, and warm sands
- **Typography**: Elegant Cinzel for headings, readable Open Sans for body text
- **Animations**: Smooth hover effects, scroll animations, and transitions
- **Responsive Design**: Works perfectly on all device sizes
- **Modern UI**: Clean, professional appearance with excellent UX

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS (for customization)
- GitHub account (for hosting)

### Installation

1. **Clone or Download** the repository to your local machine
2. **Customize Content**: Update the HTML files with your personal information
3. **Modify Styling**: Adjust colors and fonts in `styles.css` if desired
4. **Test Locally**: Open `index.html` in your browser to preview
5. **Deploy**: Push to GitHub Pages or your preferred hosting service

### GitHub Pages Setup

1. **Create Repository**: Name it `yourusername.github.io`
2. **Upload Files**: Add all website files to the repository
3. **Enable Pages**: Go to Settings > Pages, select source branch
4. **Access**: Your site will be available at `https://yourusername.github.io`

## 📝 Customization Guide

### Personal Information

#### Update Bio Section (`index.html`)
```html
<div class="bio-text">
    <p>Hello! I'm [Your Name], a [your description]...</p>
    <p>[Your personal story and interests]...</p>
</div>
```

#### Update CV Section
```html
<div class="cv-item">
    <div class="cv-year">[Year Range]</div>
    <div class="cv-details">
        <h4>[Your Degree/Job Title]</h4>
        <p>[Institution/Company Name]</p>
        <p>[Description of achievements]</p>
    </div>
</div>
```

#### Update Contact Information
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h3>Email</h3>
        <p>your.actual.email@example.com</p>
    </div>
</div>
```

### Content Updates

#### Add New Learning Posts (`stuff-i-learned.html`)
```html
<article class="learning-card" data-category="[category]">
    <div class="learning-header">
        <span class="learning-category [category]">[Category Name]</span>
        <span class="learning-date">[Date]</span>
    </div>
    <h3>[Your Title]</h3>
    <p>[Your content description]</p>
    <!-- Add tags and other content -->
</article>
```

#### Add New Publications (`publications.html`)
```html
<article class="publication-item" data-category="[type]" data-year="[year]">
    <div class="publication-header">
        <span class="publication-type [type]">[Publication Type]</span>
        <span class="publication-year">[Year]</span>
    </div>
    <h3>[Publication Title]</h3>
    <p class="publication-authors">[Author Names]</p>
    <!-- Add journal info, abstract, etc. -->
</article>
```

#### Add New Recipes (`recipes.html`)
```html
<article class="recipe-card" data-cuisine="[cuisine]" data-difficulty="[level]" data-time="[time]">
    <div class="recipe-image">
        <div class="recipe-placeholder">
            <i class="fas fa-utensils"></i>
        </div>
        <span class="recipe-cuisine [cuisine]">[Cuisine Name]</span>
    </div>
    <div class="recipe-content">
        <h3>[Recipe Title]</h3>
        <p class="recipe-description">[Recipe description]</p>
        <!-- Add cooking time, difficulty, etc. -->
    </div>
</article>
```

### Styling Customization

#### Color Scheme (`styles.css`)
```css
:root {
    --primary-gold: #D4AF37;      /* Main gold color */
    --secondary-gold: #B8860B;    /* Secondary gold */
    --deep-blue: #1E3A8A;         /* Primary blue */
    --sand: #F5DEB3;              /* Sand color */
    --cream: #FDF5E6;             /* Cream background */
    --dark-brown: #8B4513;        /* Dark brown */
    --accent-red: #CD5C5C;        /* Accent red */
}
```

#### Fonts
The website uses Google Fonts:
- **Headings**: Cinzel (elegant serif)
- **Body Text**: Open Sans (clean sans-serif)

To change fonts, update the Google Fonts link in the HTML head section.

## 🔧 Technical Details

### File Structure
```
carole.github.io/
├── index.html              # Homepage
├── stuff-i-learned.html    # Learning blog
├── publications.html       # Academic publications
├── recipes.html            # Recipe collection
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── LICENSE                 # License file
└── README.md               # This file
```

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Typography system

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The website is fully responsive and includes:
- **Mobile-first approach** with progressive enhancement
- **Flexible grid layouts** that adapt to screen size
- **Touch-friendly navigation** with hamburger menu
- **Optimized typography** for all device sizes
- **Efficient image handling** with CSS-based placeholders

## 🎯 Performance Features

- **CSS animations** instead of JavaScript for smooth performance
- **Efficient selectors** and minimal DOM manipulation
- **Optimized media queries** for responsive design
- **Lightweight dependencies** (only Font Awesome and Google Fonts)
- **Fast loading** with minimal external resources

## 🚀 Future Enhancements

Potential improvements you could add:
- **Blog functionality** with a CMS or static site generator
- **Image optimization** and lazy loading
- **Dark mode toggle**
- **Search functionality** across all pages
- **Contact form backend** integration
- **Analytics tracking**
- **SEO optimization**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

While this is a personal website, suggestions and improvements are welcome! Feel free to:
- Report bugs or issues
- Suggest new features
- Share your customizations
- Fork and modify for your own use

## 📞 Support

If you need help customizing or deploying your website:
1. Check this README for common customization tasks
2. Review the HTML structure and CSS classes
3. Test changes locally before deploying
4. Use browser developer tools to debug issues

---

**Happy coding! 🎉**

*Built with ❤️ and inspired by the timeless beauty of ancient Egypt.*
