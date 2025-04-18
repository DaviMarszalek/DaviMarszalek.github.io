// Toggle tema claro/escuro
const toggleBtn = document.querySelector('.toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

// Tema salvo
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }
});

// Animações suaves ao rolar (fade-in)
const fadeInElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeInElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 1s ease, transform 1s ease';
  observer.observe(el);
});

// Parallax suave no fundo
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const overlay = document.querySelector('.overlay');
  overlay.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

