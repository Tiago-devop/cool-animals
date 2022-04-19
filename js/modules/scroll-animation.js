const initAnimationScroll = () => {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    };
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
};

export default initAnimationScroll;
