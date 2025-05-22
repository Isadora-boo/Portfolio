document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-response').textContent = "Thanks for reaching out!";
  this.reset();
});

// Section reveal on scroll
const faders = document.querySelectorAll('.fade-in');

const reveal = () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
