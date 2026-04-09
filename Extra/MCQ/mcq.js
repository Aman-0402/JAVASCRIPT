// mcq.js — MCQ Practice Hub

// ── Theme Toggle ──
function initTheme() {
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('js-mcq-theme') || 'dark';

  if (savedTheme === 'light') {
    html.classList.add('light-theme');
  }

  themeToggle?.addEventListener('click', () => {
    html.classList.toggle('light-theme');
    const isDark = !html.classList.contains('light-theme');
    localStorage.setItem('js-mcq-theme', isDark ? 'dark' : 'light');
  });
}

initTheme();

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll reveal for sections ──
  const revealEls = document.querySelectorAll('.mcq-section');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealEls.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ── Animate stat numbers on scroll ──
  const statNums = document.querySelectorAll('.stat-num');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => statObserver.observe(el));

  function animateCount(el) {
    const target = parseInt(el.textContent, 10);
    if (isNaN(target)) return;
    let start = 0;
    const duration = 800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  // ── Card tilt effect on mouse move ──
  document.querySelectorAll('.mcq-card:not(.placeholder)').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -4;
      const rotY = ((x - cx) / cx) *  4;
      card.style.transform = `translateY(-4px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ── Button ripple effect ──
  document.querySelectorAll('.card-btn:not(:disabled)').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top:  ${e.clientY - rect.top  - size / 2}px;
        border-radius: 50%;
        background: rgba(247,223,30,0.15);
        transform: scale(0);
        animation: ripple-out 0.5s ease forwards;
        pointer-events: none;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });

  // Inject ripple keyframe once
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes ripple-out {
        to { transform: scale(2.5); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

});
