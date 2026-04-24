// for animation
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }else {
      entry.target.classList.remove('in-view'); // Remove when out of view
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.animate-on-scroll,.animate-card-on-scroll,.animate-image').forEach(el => {
  observer.observe(el);
});




document.querySelectorAll(
  '.animate-on-scroll, .animate-card-on-scroll, .animate-image, .reveal-left, .reveal-right'
).forEach(el => {
  observer.observe(el);
});

