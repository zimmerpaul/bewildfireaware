// Mobile navigation: hamburger toggle + tap-to-open dropdowns
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('header nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
  document.querySelectorAll('.dropdown-toggle').forEach(function (dt) {
    dt.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dt.parentElement.classList.toggle('open');
      }
    });
  });
});
