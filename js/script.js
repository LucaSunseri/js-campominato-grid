const bntPlayGame = document.querySelector('.btn-grad');
const gameContainer = document.querySelector('.game-container');
let leavelDifficulty = document.getElementById('form-select');
console.log(leavelDifficulty);


bntPlayGame.addEventListener('click',function() {

  console.log('clicco sul bottone');

  const title = document.querySelector('main > span');
  title.classList.add('d-none');

  gameContainer.classList.remove('d-none');

  if (leavelDifficulty.value === '1') {
    console.log('easy');
  } else if (leavelDifficulty.value === '2') {
    console.log('hard');
  } else if (leavelDifficulty.value === '3') {
    console.log('crazy');
  } else {
    title.classList.remove('d-none');
    gameContainer.classList.add('d-none');
  }

});


/**
 * Funziona che genera quadrati all'interno del div selezionato
 * @param {div} where 
 */
function createSquare(elementInHtml) {
  const square = document.createElement('div');
  square.className = 'square';
  elementInHtml.append(square);
}

/**
 * Funzione che genera un max numero di quadrati
 * @param {Number} max 
 */
function howManySquare (elementInHtml, max) {
  for (let i = 0; i < max; i++) {
    createSquare(elementInHtml);
  }
}


