// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle the bars to form an X
            const bars = mobileMenu.querySelectorAll('.bar');
            if (mobileMenu.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                mobileMenu.click();
            }
        });
    });
    
    // Sticky Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'var(--secondary)';
        }
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
    }
    
    
    // Animate stats counter
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    function animateStats() {
        if (animated) return;
        
        const statsSection = document.querySelector('.stats-container');
        const statsSectionTop = statsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (statsSectionTop < windowHeight - 100) {
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                let count = 0;
                const duration = 2000; // 2 seconds
                const interval = duration / target;
                
                const counter = setInterval(() => {
                    count++;
                    stat.textContent = count;
                    
                    if (count >= target) {
                        clearInterval(counter);
                    }
                }, interval);
            });
            
            animated = true;
        }
    }
    
    // Run on scroll
    window.addEventListener('scroll', animateStats);
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});