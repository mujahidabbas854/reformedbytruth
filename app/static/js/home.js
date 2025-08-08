// For playing video 
function playVideo() {
    document.querySelector('.video-overlay').style.display = 'none';
    document.querySelector('.hero-logo').style.display = 'none';
    const videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block';

    // Set iframe only when play is clicked
    videoContainer.innerHTML = `
      <iframe width="100%" height="100%" 
        src="https://www.youtube.com/embed/KHmstX0KTOI?autoplay=1" 
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </iframe>
    `;
  }



 document.addEventListener('DOMContentLoaded', function() {
      // Slideshow functionality
      const slides = document.querySelectorAll('.slide');
      let currentSlide = 0;
      const slideInterval = 8000; // 8 seconds
      
      function showSlide(n) {
          slides.forEach(slide => slide.classList.remove('active'));
          currentSlide = (n + slides.length) % slides.length;
          slides[currentSlide].classList.add('active');
      }
      
      function nextSlide() {
          showSlide(currentSlide + 1);
      }
      
      // Set up automatic slideshow
      let slideTimer = setInterval(nextSlide, slideInterval);
      
      // Manual navigation
      document.querySelector('.prev').addEventListener('click', function() {
          clearInterval(slideTimer);
          showSlide(currentSlide - 1);
          slideTimer = setInterval(nextSlide, slideInterval);
      });
      
      document.querySelector('.next').addEventListener('click', function() {
          clearInterval(slideTimer);
          showSlide(currentSlide + 1);
          slideTimer = setInterval(nextSlide, slideInterval);
      });
      
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
      
      // Back to top button
      const scrollTopBtn = document.querySelector('.scroll-top');
      window.addEventListener('scroll', function() {
          if (window.pageYOffset > 300) {
              scrollTopBtn.style.opacity = '1';
              scrollTopBtn.style.visibility = 'visible';
          } else {
              scrollTopBtn.style.opacity = '0';
              scrollTopBtn.style.visibility = 'hidden';
          }
      });
      
      // Mobile menu toggle (would need additional HTML)
      // const menuToggle = document.querySelector('.menu-toggle');
      // const mainNav = document.querySelector('.main-nav');
      // menuToggle.addEventListener('click', function() {
      //     mainNav.classList.toggle('active');
      // });
  });
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove 'active' from all
      navLinks.forEach(l => l.classList.remove("active"));
      // Add 'active' to clicked one
      this.classList.add("active");
    });
  });

  // Set 'Home' as default active on page load
  const homeLink = document.querySelector(".main-nav a.home-link");
  if (homeLink) homeLink.classList.add("active");
});



    // podcast page showTab script
    
  function showTab(tabId) {
    // Hide all tab contents
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => tab.classList.remove("active"));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Show selected tab
    document.getElementById(tabId).classList.add("active");

    // Add active class to clicked button
    const clickedBtn = Array.from(buttons).find(btn =>
      btn.getAttribute("onclick").includes(tabId)
    );
    if (clickedBtn) clickedBtn.classList.add("active");
  }


 