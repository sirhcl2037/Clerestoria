const preview = document.querySelector('.product-window');
const replay = document.querySelector('.preview-replay');

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    preview.classList.add('is-tracing');
    observer.disconnect();
  }
}, { threshold: 0.5 });

observer.observe(preview);
replay.hidden = false;
replay.addEventListener('click', () => {
  observer.disconnect();
  preview.classList.add('is-tracing');

  for (const animation of preview.getAnimations({ subtree: true })) {
    animation.currentTime = 0;
    animation.play();
  }
});
