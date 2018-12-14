//TODO: refactor with constructors and classes
//TODO: Wins: (# of times user guessed the word correctly).
//TODO: After the user wins/loses the game should automatically choose another word and make the user play it.

const wordList = ["madona", "journey", "queen", "survivor"];
let choice = Math.floor(Math.random() * 4);
let answer = wordList[choice];
let Mylength = answer.length;
let display = [Mylength];
let letters = answer.split('');
let attemptsLeft = 10;
let output = "";
let userLetter = "";
let game = document.querySelector("#game");
const btn_reload = document.querySelector('button');
let input = document.querySelector("input");
let h4 = document.querySelector('h4');
var scores = 0;

//this creates the game container
let setup = () => {

    output = '';
    input.value= '';
        for(choice in answer) {
            display[choice] = "_ ";
            output = output + display[choice];
        }
        game.innerHTML = output;
        output = "";
};
    
let submit = () => {

    let input = document.querySelector("input");

        output = "";
        userLetter = input.value;
        input.value = "";
        h4.style.display = "none";

        for(choice in answer) {

            if( userLetter.toLowerCase() === letters[choice] ) {

                display[choice] = userLetter.toLowerCase();

            }

            output = output + display[choice] + "";

        };
        
        game.innerHTML = output;
        
        //checks to see that the letter is already used
        if(output.includes(userLetter.toLowerCase())) {
            //TODO: SHOW A MESSAGE THAT SAYS "THE LETTER IS ALREADY ADDED"
       } else {
            output = '';
            attemptsLeft--;
        }    

    let guesses = document.querySelector("#guesses");
    let history = document.querySelector(".history");

    if(game.textContent.length === letters.length) {

        guesses.innerHTML = `
            Congratulation! the right word is <strong class="strong">${answer} </strong>
        `;
        game.classList.add('delete');
        history.classList.add('delete');
        btn_reload.style.display = 'block';

        // saves and prints the score of evey game played
        // plays the audio
        if(game.textContent === output) {
            audio();
            scores++
            localStorage.player_score = JSON.stringify(scores);
            
            let win = document.querySelector('.wins');
            win.textContent = ` Your score is: ${scores} `

        };

    } else if (attemptsLeft < 1 ) {

        guesses.innerHTML = `
            Sorry the right word was <strong class="strong">${answer} </strong>
        `;
        game.classList.add('delete');
        history.classList.add('delete');

        
            let game_over = document.querySelector('#game-over');
    
            game_over.style.display = "block";
            game_over.src = ("https://www.youtube.com/embed/6S21ZSsC21U?rel=0&autoplay=1&showinfo=0&iv_load_policy=3&controls=0");
            btn_reload.style.display = 'block';

            
            localStorage.clear();
            
            
    } else {
        let count_box = `
        color: red;
        border: 1px solid white;
        display: inline-block;
        text-shadow: 0px 0px 5px #999;
        padding: 0 10px;
        background: #444;
        box-sizing: border-box;
        box-shadow: 1px 1px 5px red;
        `

        guesses.innerHTML = `
            You have <strong style="${count_box}""> ${attemptsLeft} </strong> guesses left
        `;
    }
};

let audio = () => {
    
    if(game.textContent === "queen") {
        
        let queen = document.querySelector('#queen');

        queen.style.display = "block";
        queen.src = ( "https://www.youtube.com/embed/1P2tT61hLLM?rel=0&autoplay=1&showinfo=0&controls=0");

    }
    if(game.textContent === "journey") {
    
        let journey = document.querySelector('#journey');

        journey.style.display = "block";
        journey.src = ("https://www.youtube.com/embed/VXi1sc8kFuU?rel=0&autoplay=1&showinfo=0&controls=0");

    }
    if(game.textContent === "madona") {
    
        let madona = document.querySelector('#madona');

        madona.style.display = "block";
        madona.src = ("https://www.youtube.com/embed/6m9i3sYtONU?rel=0&autoplay=1&showinfo=0&controls=0");

    }
    if(game.textContent === "survivor") {
    
        let survivor = document.querySelector('#survivor');

        survivor.style.display = "block";
        survivor.src = ("https://www.youtube.com/embed/t3oh7ktTABM?rel=0&autoplay=1&showinfo=0&controls=0");

    }
}

window.addEventListener('DOMContentLoaded', () => {
    
    setup();
   
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        

        let input = document.querySelector('input');
        let x = e.charCode || e.keyCode;
        let y = String.fromCharCode(x).toLowerCase();
        input.value = y  
    

        let history = document.querySelector(".history");
    
        if(!display.includes(y) && e.which !== 8 && e.which !== 13  ) {
            history.innerHTML += `
            <span> ${y} </span>
            `;
            submit();

        }
    
    }); 

//saves the score to the local storage
if( localStorage["player_score"] !== undefined ){ 

    scores = JSON.parse(localStorage["player_score"]);

}

});

let reload = () => {
    location.reload();
    
}



