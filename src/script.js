const parent = document.querySelector('.the-about');
const child = document.querySelector('.about-child');


parent.addEventListener('mouseenter', () => {
  child.style.display = 'block';
});

child.addEventListener('mouseenter', () => {
  child.style.display = 'block';
});


parent.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!parent.matches(':hover') && !child.matches(':hover')) {
      child.style.display = 'none';
    }
  }, 200);
});

child.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!parent.matches(':hover') && !child.matches(':hover')) {
      child.style.display = 'none';
    }
  }, 200);
});
