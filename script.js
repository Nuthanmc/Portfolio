document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelector('.contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert("Thanks for your message! I'll get back to you soon 😊");
  e.target.reset();
});
