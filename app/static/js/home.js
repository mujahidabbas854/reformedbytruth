const articles = [
    {
        title: "What is Covenant of Grace?",
        image: "{% static 'images/Articals_Imges/Article1.jpeg' %}",
        link: "What is Covenant of Grace.html"
    },
    {
        title: "What is the Covenant of Works?",
        image: "{% static 'images/Articals_Imges/Article2.jpeg' %}",
        link: "What is the Covenant of Works.html"
    },
    {
        title: "What is the Church?",
        image: "{% static 'images/Articals_Imges/Article3.jpeg' %}",
        link:  "What is the Church.html"
    },
    {
        title: "How Can I be Saved?",
        image: "{% static 'images/Articals_Imges/Article4.jpeg' %}",
        link: "How Can I be Saved.html"
    },
    {
        title: "What is Gospel?",
        image: "{% static 'images/Articals_Imges/Article5.jpeg' %}",
        link: "What is Gospel.html"
    },
    {
        title: "Jesus: The Incarnation of the Eternal God",
        image: "{% static 'images/Articals_Imges/Article6.jpeg' %}",
        link: "Blogs Jesus.html"
    },
    {
        title: "What is the meaning of Adam’s fall?",
        image: "{% static 'images/Articals_Imges/Article7.jpeg' %}",
        link: "What is the meaning of Adam’s fall.html"
    },
    {
        title: "What is Trinity?",
        image: "{% static 'images/Articals_Imges/Article8.jpeg' %}",
        link: "What is Trinity.html"
    },
    {
        title: "Who is God?",
        image: "{% static 'images/Articals_Imges/Article9.jpeg' %}",
        link: "Who is God.html"
    },
];

let currentIndex = 0;
const articleImg = document.getElementById("articleImg");
const articleTitle = document.getElementById("articleTitle");
const articleLink = document.getElementById("articleLink");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");

function updateArticle(index) {
    const article = articles[index];
    articleImg.src = article.image;
    articleImg.alt = article.title;
    articleTitle.textContent = article.title;
    articleLink.href = article.link;

    // Visibility and interaction for arrows
    if (index === 0) {
        prevArrow.classList.add("disabled");
        prevArrow.style.visibility = "hidden";
    } else {
        prevArrow.classList.remove("disabled");
        prevArrow.style.visibility = "visible";
    }

    if (index === articles.length - 1) {
        nextArrow.classList.add("disabled");
        nextArrow.style.visibility = "hidden";
    } else {
        nextArrow.classList.remove("disabled");
        nextArrow.style.visibility = "visible";
    }
}

prevArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateArticle(currentIndex);
    }
});

nextArrow.addEventListener("click", () => {
    if (currentIndex < articles.length - 1) {
        currentIndex++;
        updateArticle(currentIndex);
    }
});

// Initialize view
updateArticle(currentIndex);

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


 