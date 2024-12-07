// // Smooth scrolling for navigation links
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({ behavior: 'smooth' });
//     });
// });

// // Example: Add a sticky navigation bar
// window.addEventListener('scroll', function() {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('sticky');
//     } else {
//         navbar.classList.remove('sticky');
//     }
// });


// nav bar
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});
 
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  });
});
 
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  }
});

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,       // Number of visible slides
  spaceBetween: 20,       // Space between slides
  loop: true,             // Loop through the slides
  autoplay: {
    delay: 3000,          // Auto-slide delay in milliseconds
  },
  pagination: {
    el: '.swiper-pagination', // This targets the pagination element
    clickable: true,          // Make the dots clickable
    type: 'bullets',          // 'bullets' creates dot-style pagination
  },
  breakpoints: {          // Adjust slides for different screen sizes
    1024: {
      slidesPerView: 5,   // Larger screens
    },
    768: {
      slidesPerView: 3,   // Tablets
    },
    480: {
      slidesPerView: 2,   // Mobile
    },
  },
});
