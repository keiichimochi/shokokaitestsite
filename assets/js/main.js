document.addEventListener('DOMContentLoaded', () => {
  // Light interaction hooks if needed later
  const backLinks = document.querySelectorAll('[data-back]');
  backLinks.forEach((el) => el.addEventListener('click', (e) => {
    e.preventDefault();
    history.back();
  }));
});

