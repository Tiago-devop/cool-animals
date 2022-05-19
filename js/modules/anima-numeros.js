export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
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
    });
  }
  let observable;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observable.disconnect();
      animaNumeros();
    }
  }

  const observableTarget = document.querySelector('.numeros');
  observable = new MutationObserver(handleMutation);

  observable.observe(observableTarget, { attributes: true });
}
