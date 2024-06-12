document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  alert('Thank you for subscribing!');
});

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function() {
 
  var headerContent = document.querySelector('.header-content');
  headerContent.classList.add('show'); 
});
