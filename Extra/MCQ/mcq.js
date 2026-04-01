// mcq.js — MCQ Practice Hub

document.addEventListener('DOMContentLoaded', () => {
  // Animate stat numbers in when they enter the viewport
  const statNums = document.querySelectorAll('.stat-num');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statNums.forEach(el => observer.observe(el));
});
