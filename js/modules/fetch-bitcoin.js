export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const dataResponse = await fetch(url);
      const dataJSON = await dataResponse.json();

      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (1000 / dataJSON.BRL.sell).toFixed(4);
    } catch (e) {
      console.log(e);
    }
  }

  fetchBitcoin('https://blockchain.info/ticker');
}
