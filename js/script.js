const bntPlayGame = document.querySelector('.btn-grad');
const gameContainer = document.querySelector('.game-container');
let leavelDifficulty = document.getElementById('form-select');
console.log(leavelDifficulty);


bntPlayGame.addEventListener('click',function() {

  console.log('clicco sul bottone');

  const title = document.querySelector('main > span');
  title.classList.add('d-none');

  gameContainer.classList.remove('d-none');
  gameContainer.innerHTML = '';


  if (leavelDifficulty.value === '1') {
    console.log('easy');
    howManySquare(gameContainer,'square easy', 49);
  } else if (leavelDifficulty.value === '2') {
    console.log('hard');
    howManySquare(gameContainer,'square hard', 81);
  } else if (leavelDifficulty.value === '3') {
    console.log('crazy');
    howManySquare(gameContainer,'square crazy', 100);
  } else {
    title.classList.remove('d-none');
    gameContainer.classList.add('d-none');
  }

});


/**
 * Funzione che crea un quadrato con una classe e lo inserisce nell'elemento HTML scelto
 * @param {div} elementInHtml 
 * @param {string} className 
 * @returns Elemento creato
 */
 function createSquare(elementInHtml, className) {
  const square = document.createElement('div');
  square.className = className;
  elementInHtml.append(square);
  return square;
};

/**
 * Funzione che genera un numero max di quadrati 
 * @param {div} elementInHtml 
 * @param {string} className 
 * @param {number} max 
 */
function howManySquare (elementInHtml, className, max) {
  for (let i = 0; i < max; i++) {
    square = createSquare(elementInHtml, className);
    square.innerHTML += [i+1];

    square.addEventListener('click',function() {
      this.classList.toggle('clicked');
    });
  };
};




