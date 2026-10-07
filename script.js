/* UI Design Toolkit — tương tác: dark mode, nav mobile, scroll reveal */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---------- Dark mode toggle ---------- */
  var themeToggle = document.getElementById('theme-toggle');
  var root = document.documentElement;

  function syncThemeToggle() {
    var isDark = root.getAttribute('data-theme') === 'dark';
    themeToggle.setAttribute('aria-pressed', String(isDark));
  }

  themeToggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('uidt-theme', next);
    } catch (e) { /* localStorage không khả dụng — bỏ qua */ }
    syncThemeToggle();
  });

  syncThemeToggle();

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var siteNav = document.getElementById('site-nav');

  function setNavOpen(open) {
    siteNav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  }

  navToggle.addEventListener('click', function () {
    setNavOpen(!siteNav.classList.contains('is-open'));
  });

  siteNav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setNavOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
      setNavOpen(false);
      navToggle.focus();
    }
  });

  document.addEventListener('click', function (event) {
    if (siteNav.classList.contains('is-open') &&
        !siteNav.contains(event.target) &&
        !navToggle.contains(event.target)) {
      setNavOpen(false);
    }
  });

  /* ---------- Scroll reveal ---------- */
  var revealTargets = document.querySelectorAll('[data-reveal]');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -32px 0px' });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Footer year ---------- */
  document.getElementById('footer-year').textContent = String(new Date().getFullYear());
})();
