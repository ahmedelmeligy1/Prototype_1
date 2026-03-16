// ── NAV SCROLL ──
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER ──
const hbtn = document.getElementById('hbtn');
const mobileNav = document.getElementById('mobileNav');
if (hbtn && mobileNav) {
  hbtn.addEventListener('click', () => {
    hbtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!hbtn.contains(e.target) && !mobileNav.contains(e.target)) {
      hbtn.classList.remove('open');
      mobileNav.classList.remove('open');
    }
  });
}

// ── ACTIVE NAV LINK ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.classList.add('active');
});

// ── REVEAL ON SCROLL ──
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('vis'), i * 90);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
