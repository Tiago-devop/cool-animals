export default class AnimaNumeros {
  constructor(dataNumber, observableTarget, observerClass) {
    this.numeros = document.querySelectorAll(dataNumber);
    this.observableTarget = document.querySelector(observableTarget);
    this.observerClass = observerClass;

    // bind the object's this to the callback mutator
    this.handleMutation = this.handleMutation.bind(this);
  }

  // receive a dom element with numbers in its your text
  // increment from 0 until the final number
  static numberIncrementator(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // start the numberIncrementator fn for each
  // number selected in the dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.numberIncrementator(numero));
  }

  // function that occurs when the mutations happen
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observable.disconnect();
      this.animaNumeros();
    }
  }

  // add the matationObserver to verify whether or not
  //  the class ativo is added to the element target
  addMutationObserver() {
    this.observable = new MutationObserver(this.handleMutation);
    this.observable.observe(this.observableTarget, { attributes: true });
  }

  init() {
    if (this.numeros && this.observableTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
