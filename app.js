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

  // FUNCION ICONO RANDOM
  function getRandomIcon() {
    const icons = ['heart', 'cube', 'diamond', 'crown']
    return icons[getRandomNumber(0, icons.length - 1)];
  }

  //ACTUALIZAR EL CONTENIDO
  function update() {

    const randomIcon = getRandomIcon();

  // ITERAR QUERYSELECTOR
  document.querySelectorAll('.icon').forEach(element => {

    // remover antiguo icono y obtener nuevo
    element.classList.remove('fa-heart', 'fa-diamond', 'fa-cube', 'fa-crown', 'red');
    element.classList.add(`fa-${randomIcon}`);

    // Add 'red' class if the icon is 'heart'
    if (randomIcon === 'heart' || randomIcon === 'cube' ) {
        element.classList.add('red');
    }
  });
  document.querySelector('#numero').innerText = getRandomCardValue();
};

  document.getElementById('generateButton').addEventListener('click', update);