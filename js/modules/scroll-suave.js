const initScrollSmooth = () => {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]',
  );
  if (linksInternos.length) {
    const scrollToSection = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    linksInternos.forEach((link) => link.addEventListener('click', scrollToSection));
  }
};

export default initScrollSmooth;
