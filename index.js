


document.addEventListener("DOMContentLoaded", () => {
    const scrollArrow = document.querySelector(".scroll-arrow");
    scrollArrow?.addEventListener("click", () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
      });
    });

    function animateOnScroll() {
      const elements = document.querySelectorAll('[data-animate]');
      const triggerBottom = window.innerHeight * 0.85;
    
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
          el.classList.add('animated');
        }
      });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
  
    
    document.getElementById('footerForm').addEventListener('submit', function (e) {
      e.preventDefault();
    
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const formMessage = document.getElementById('formMessage');
    
      if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all fields.';
        return;
      }
    
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        formMessage.textContent = 'Please enter a valid email address.';
        return;
      }
    
      formMessage.textContent = 'Message sent successfully!';
      this.reset();
    });
  });
  