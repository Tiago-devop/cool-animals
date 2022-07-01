export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // add the events to the accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => item.addEventListener('click', () => this.toggleAccordion(item)));
  }

  // initialize function
  init() {
    if (this.accordionList.length) {
      // ative the first item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
