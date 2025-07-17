


document.addEventListener("DOMContentLoaded", () => {
    // Enhanced scroll arrow with smooth animation
    const scrollArrow = document.querySelector(".scroll-arrow");
    scrollArrow?.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    });

    // Navbar scroll effect with enhanced animations
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Parallax effect for navbar
      if (currentScrollY > lastScrollY) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    });

    // Mobile menu toggle with enhanced animations
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger?.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.style.transform = navLinks.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    // Enhanced scroll-triggered animations with intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          
          // Add staggered animation for service cards
          if (entry.target.classList.contains('service-card')) {
            const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1;
            entry.target.style.animationDelay = `${delay}s`;
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
      }
    });

    // Mouse move effect for service cards
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
      });
    });

    // Typing effect for hero heading
    const heroHeading = document.querySelector('.hero-heading');
    if (heroHeading) {
      const text = heroHeading.textContent;
      heroHeading.textContent = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroHeading.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 1000);
    }

    // Floating animation for images
    document.querySelectorAll('.about-image img, .project-card img').forEach(img => {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    });

    // Enhanced form validation with animations
    const form = document.getElementById('footerForm');
    const inputs = form?.querySelectorAll('input, textarea');
    
    inputs?.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
      });
      
      input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
      });
    });

    // Form submission with enhanced feedback
    form?.addEventListener('submit', function (e) {
      e.preventDefault();
    
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const formMessage = document.getElementById('formMessage');
    
      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = '#e74c3c';
        formMessage.style.animation = 'shake 0.5s ease-in-out';
        return;
      }
    
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.style.color = '#e74c3c';
        formMessage.style.animation = 'shake 0.5s ease-in-out';
        return;
      }
    
      // Success animation
      formMessage.textContent = 'Message sent successfully!';
      formMessage.style.color = '#27ae60';
      formMessage.style.animation = 'bounce 0.5s ease-in-out';
      
      // Reset form with fade effect
      setTimeout(() => {
        this.style.opacity = '0.5';
        setTimeout(() => {
          this.reset();
          this.style.opacity = '1';
        }, 300);
      }, 1000);
    });

    // Back to top button with enhanced behavior
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
        backToTop.style.animation = 'fadeIn 0.3s ease';
      } else {
        backToTop.style.display = 'none';
      }
    });
    
    backToTop?.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Particle effect for hero section
    createParticles();
    
    function createParticles() {
      const hero = document.querySelector('.hero');
      if (!hero) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;
        hero.appendChild(particle);
      }
    }

    // Add CSS for new animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      
      @keyframes float-particle {
        0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
      }
      
      .service-card {
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .particle {
        z-index: 1;
      }
    `;
    document.head.appendChild(style);

    // Smooth reveal animations for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    // Enhanced hover effects for social icons
    document.querySelectorAll('.social-icons a').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'translateY(-5px) scale(1.2) rotate(10deg)';
      });
      
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) scale(1) rotate(0deg)';
      });
    });

    // Logo hover effect
    const logo = document.querySelector('.logo');
    logo?.addEventListener('mouseenter', () => {
      logo.style.transform = 'scale(1.1)';
    });
    
    logo?.addEventListener('mouseleave', () => {
      logo.style.transform = 'scale(1)';
    });

    // Initialize all animations on page load
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);
});
  