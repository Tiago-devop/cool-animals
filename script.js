const initTabNav = () => {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    const activeTab = (index) => {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => activeTab(index));
    });
  }
};
initTabNav();

const initAccordion = () => {
  const accordionList = document.querySelectorAll(".js-accordion dt");
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

const initScroll = () => {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
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
initScroll();
