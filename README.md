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
- Basic knowledge of Markdown (much easier than HTML!)
- GitHub account (for hosting)
- Ruby (for local Jekyll development, optional)

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

## ✨ Why Markdown?

The website has been refactored to use **Markdown** instead of HTML, making it:

- **Easier to write**: Simple syntax like `# Headers` and `**bold text**`
- **Faster to update**: No need to deal with HTML tags
- **Better for content**: Focus on what you write, not how it looks
- **Version control friendly**: Easy to track changes in Git
- **Portable**: Markdown works everywhere
- **Professional**: Perfect for academic and technical content

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

#### Add New Learning Posts (`_learnings/your-post.md`)
```markdown
---
layout: learning
title: "Your Learning Title"
date: 2024-12-15
category: tech
tags: [tag1, tag2, tag3]
excerpt: "Brief description of what you learned"
---

# Your Learning Title

*Posted on December 15, 2024*

Your content here in **Markdown** format. Much easier than HTML!

## What I Learned

- Point 1
- Point 2
- Point 3

## Key Takeaways

1. **Important lesson**
2. **Another insight**
3. **Final thought**
```
#### Add New Publications (`_publications/your-paper.md`)
```markdown
---
layout: publication
title: "Your Publication Title"
date: 2024-12-15
type: journal
journal: "Journal Name"
volume: 15
issue: 3
pages: "245-267"
doi: "10.1000/example.doi"
authors: ["Your Name", "Co-author Name"]
abstract: "Your abstract here"
tags: [tag1, tag2, tag3]
pdf_url: "/papers/your-paper.pdf"
code_url: "https://github.com/yourusername/your-repo"
citation_count: 0
view_count: 0
---

# Your Publication Title

## Abstract

Your abstract content...

## Introduction

Your introduction...

## Methodology

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
├── _config.yml             # Jekyll configuration
├── _layouts/               # Jekyll layouts
│   ├── default.html        # Main layout template
│   ├── learning.html       # Learning post layout
│   ├── publication.html    # Publication layout
│   └── recipe.html         # Recipe layout
├── _learnings/             # Learning posts (Markdown)
│   └── machine-learning-basics.md
├── _publications/          # Publication posts (Markdown)
│   └── machine-learning-data-analysis.md
├── index.md                # Homepage (Markdown)
├── stuff-i-learned.md      # Learning page (Markdown)
├── publications.md         # Publications page (Markdown)
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── Gemfile                 # Ruby dependencies
├── LICENSE                 # License file
└── README.md               # This file
```
### Technologies Used
- **Jekyll**: Static site generator for easy content management
- **Markdown**: Simple content authoring and editing
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Typography system
- **Ruby**: Backend for Jekyll processing

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
