let wordsList = ["blue", "green", "red", "orange", "violet", "indigo", "yellow", 'pink', 'brown'];
let chosenWord = "";
let lettersInWord = [];
let numBlanks = 0;
let lettersArray = [];
let wrongGuesses = [];
let letterGuessed = "";
let winScore = 0;
let lossScore = 0;
let attemptsLeft = 10;
let message = document.querySelector('#message');
let wrong_guess = document.querySelector("#wrong");
let game = document.querySelector('#game');
let guessesLeft = document.querySelector("#guesses");
let body = document.querySelector('#game-over');



const setup = () => {

  attemptsLeft = 10;
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

  lettersInWord = chosenWord.split("");

  numBlanks = lettersInWord.length;

  console.log(chosenWord);

  lettersArray = [];

  wrongGuesses = [];
  final_join = '';

  for(let i = 0; i < numBlanks; i++) {
    lettersArray.push("_");
  }

  guessesLeft.innerHTML = `
    You have <strong> ${attemptsLeft} </strong> guesses left
    `;

  game.innerHTML = lettersArray.join(" ");

  wrong_guess.innerHTML = wrongGuesses.join(" ");
}

const checkLetters = (letter) => {

  let containsLetter = false;

  for(let i = 0; i < numBlanks; i++) {

    if(chosenWord[i] === letter) {

      containsLetter = true;

    }
  }

  if(containsLetter) {

    for(let j = 0; j < numBlanks; j++) {

      if(chosenWord[j] === letter) {

        lettersArray[j] = letter;

      }
    }

  }else if(!wrongGuesses.includes(letter)) {

    wrongGuesses.push(letter);
    let final_word = [...new Set(wrongGuesses)];
    final_join = final_word.join("");
    // console.log(final_join);

    attemptsLeft--;

    // set background back to main color after new word is typed
    body.style.background = '#333';
    body.style.display = 'block';

  }

};

const color = () => {    

  if(chosenWord == game.textContent.replace(/\s/g,'') ) { 
      body.style.background = `${chosenWord}`;
      body.style.display = 'block';
  } else {
    body.style.background = '#333';
    body.style.display = 'none';
  }
  
};

const playGame = () => {

    guessesLeft.innerHTML = `
        You have <strong> ${attemptsLeft} </strong> guesses left
    `;

  //
  if(attemptsLeft < 10) {
    let count_box = `
    color: blue;
    border: 1px solid white;
    display: inline-block;
    text-shadow: 0px 0px 5px #999;
    padding: 0 10px;
    background: #666;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px blue;
    `

    guessesLeft.innerHTML = `
        You have <strong style="${count_box}""> ${attemptsLeft} </strong> guesses left
    `;
}
if(attemptsLeft < 5) {
    let count_box = `
    color: red;
    border: 1px solid white;
    display: inline-block;
    text-shadow: 0px 0px 5px #999;
    padding: 0 10px;
    background: #666;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px red;
    `
    guessesLeft.innerHTML = `
        You have <strong style="${count_box}""> ${attemptsLeft} </strong> guesses left
    `;
}
  //

  game.innerHTML = lettersArray.join(" ");

  wrong_guess.innerHTML = final_join;

    // console.log(lettersArray)

  if(lettersInWord.toString() === lettersArray.toString()) {

    winScore++;

    message.innerHTML = `<div class="strong"> Congratulations The right color is <span> ${chosenWord} </span> </div> `

    document.querySelector("#wins").innerHTML = winScore;

    color();

    setup();


  } else if (attemptsLeft === 0) {

    lossScore++;

    message.innerHTML = ` <div class="strong"> Sorry The right color was <span> ${chosenWord} </span> </div> `

    document.querySelector("#losses").innerHTML = lossScore;

    setup();

  }
}

setup();

document.addEventListener('keyup', (e) => {

  letterGuessed = e.key.toLowerCase();

  checkLetters(letterGuessed);

  playGame();

});

