export default class Modal {
  constructor(buttonOpen, buttonClose, modalContainer) {
    this.buttonOpen = document.querySelector(buttonOpen);
    this.buttonClose = document.querySelector(buttonClose);
    this.modalContainer = document.querySelector(modalContainer);

    // bind the this to the callback
    // to doing reference to the class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  // open and close the modal
  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  // add the event toggle to the modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // close the modal on click outside of the modal container
  clickOutsideModal(event) {
    if (event.target === this.modalContainer) this.toggleModal();
  }

  // add the events to the modal's elements
  addModalEvents() {
    this.buttonOpen.addEventListener('click', this.eventToggleModal);
    this.buttonClose.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.clickOutsideModal);
  }

  init() {
    if (this.buttonOpen && this.buttonClose && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
