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

const sections = document.querySelectorAll("section, header");
const dockLinks = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (pageYOffset >= top) current = sec.getAttribute("id");
  });

  dockLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
