// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(30, 58, 138, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, var(--deep-blue) 0%, var(--dark-brown) 100%)';
            navbar.style.backdropFilter = 'none';
        }
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Learning page category filtering
const filterCheckboxes = document.querySelectorAll('.filter-checkbox input');
const learningItems = document.querySelectorAll('.learning-item');

if (filterCheckboxes.length > 0 && learningItems.length > 0) {
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterLearningItems);
    });
}

function filterLearningItems() {
    const selectedCategories = Array.from(filterCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    learningItems.forEach(item => {
        const category = item.dataset.category;
        if (selectedCategories.includes('all') || selectedCategories.includes(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Publication page filtering
const publicationItems = document.querySelectorAll('.publication-item');

// Add year filtering if needed
function filterPublicationsByYear(year) {
    publicationItems.forEach(item => {
        const itemYear = item.dataset.year;
        if (year === 'all' || itemYear === year) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Add category filtering if needed
function filterPublicationsByCategory(category) {
    publicationItems.forEach(item => {
        const itemCategory = item.dataset.category;
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialize page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add any page-specific initialization here
    
    // Check if we're on the learning page
    if (document.querySelector('.learning-content')) {
        // Learning page specific code
        console.log('Learning page loaded');
    }
    
    // Check if we're on the publications page
    if (document.querySelector('.publications-content')) {
        // Publications page specific code
        console.log('Publications page loaded');
    }
});
