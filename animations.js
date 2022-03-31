const initTabNav = () => {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direction);
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => activeTab(index));
    });
  }
};
initTabNav();

const initAccordion = () => {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    const activeAccordion = (event) => {
      event.currentTarget.classList.toggle(activeClass);
      event.currentTarget.nextElementSibling.classList.toggle(activeClass);
    };
    accordionList.forEach((item) =>
      item.addEventListener("click", activeAccordion)
    );
  }
};
initAccordion();

const initScrollSmooth = () => {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  if (linksInternos.length) {
    const scrollToSection = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // alternative way
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // });
    };

    linksInternos.forEach((link) =>
      link.addEventListener("click", scrollToSection)
    );
  }
};
initScrollSmooth();

const initAnimationScroll = () => {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) section.classList.add("ativo");
      });
    };
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
};
initAnimationScroll();
