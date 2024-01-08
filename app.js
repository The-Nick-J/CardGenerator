   // NUMERO RANDOM ENTRE 2 VALORES
     function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // FUNCION DE VALOR RANDOM
  function getRandomCardValue() {
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const randomIndex = getRandomNumber(0, values.length - 1);
      return values[randomIndex];
  }

  //ACTUALIZAR EL CONTENIDO
  function update() {
  document.querySelector('#numero').innerText = getRandomCardValue();

  };

  document.addEventListener('DOMContentLoaded', update);