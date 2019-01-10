let wordList = ["madonna", "journey", "queen", "survivor"];
let choice = Math.floor(Math.random() * 4);
let answer = wordList[choice];
let Mylength = answer.length;
let display = [Mylength];
let letters = answer.split('');
let attemptsLeft = 10;
let output = "";
let userLetter = "";
let game = document.querySelector("#game");
let btn_reload = document.querySelector('.reload');
let btn_restart = document.querySelector('.restart');
let input = document.querySelector("input");
let h4 = document.querySelector('h4');
let win_score = 0;
let loss_score = 0;
let usedLetters = [];

//this creates the game container
const setup = () => {

    output = '';
    input.value= '';
        for(let choice in answer) {
            display[choice] = "_ ";
            output = output + display[choice];
        }
        game.innerHTML = output;
        output = "";
};
    
const submit = () => {

    let win = document.querySelector('.wins');
    let loss = document.querySelector('.losses');
    let input = document.querySelector("input");
    let used = document.querySelector('.used').textContent;
    used = Array.from(new Set(used.split(""))).toString();

        output = "";
        userLetter = input.value;
        input.value = "";
        h4.style.display = "none";

        for(let choice in answer) {

            if( userLetter.toLowerCase() === letters[choice] ) {

                display[choice] = userLetter.toLowerCase();

            }

            output = output + display[choice] + "";

        };

        game.innerHTML = output;
        
        //checks to see that the letter is already used
        if(output.includes(userLetter.toLowerCase()) ) {
    
            //TODO: SHOW A MESSAGE THAT SAYS "THE LETTER IS ALREADY ADDED"
           
       } else {
            
            output = '';
            attemptsLeft--;

        }    

    let guesses = document.querySelector("#guesses");
    let history = document.querySelector(".history");

    //wins the game
    if(game.textContent.length === letters.length) {

        guesses.innerHTML = `
            Congratulation! the right word is <strong class="strong">${answer} </strong>
        `;
        game.classList.add('delete');
        history.classList.add('delete');
        btn_reload.style.display = 'block';
        btn_restart.style.display = 'block';

        // saves and prints the score of evey game played
        // plays the audio
        if(game.textContent === output) {

            audio();
            win_score++;
            localStorage.win_player_score = JSON.stringify(win_score);            

            win.textContent = ` Winning Score: ${win_score} `
            loss.textContent = ` Lossing Score: ${loss_score} `

        };

    // looses the game
    } else if (attemptsLeft < 1 ) {


        guesses.innerHTML = `
            Sorry the right word was <strong class="strong">${answer}</strong>
        `;
        game.classList.add('delete');
        history.classList.add('delete');
        
            // let game_over = document.querySelector('#game-over');
    
            // game_over.style.display = "block";
            // game_over.src = ("https://www.youtube.com/embed/6S21ZSsC21U?rel=0&autoplay=1&showinfo=0&iv_load_policy=3&controls=0");
            
            btn_reload.style.display = 'block';
            btn_restart.style.display = 'block';
            
    } else {
        
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
    
            guesses.innerHTML = `
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

            guesses.innerHTML = `
                You have <strong style="${count_box}""> ${attemptsLeft} </strong> guesses left
            `;
        }
    }

    if(attemptsLeft === 0) {
        loss_score++;
        localStorage.lose_player_score = JSON.stringify(loss_score);
        win.textContent = ` Winning Score: ${win_score} `
        loss.textContent = ` Lossing Score: ${loss_score} `
    }
};

const audio = () => {
    
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
    if(game.textContent === "madonna") {
    
        let madona = document.querySelector('#madona');

        madona.style.display = "block";
        madona.src = ("https://www.youtube.com/embed/6m9i3sYtONU?rel=0&autoplay=1&showinfo=0&controls=0");

    }
    if(game.textContent === "survivor") {
    
        let survivor = document.querySelector('#survivor');

        survivor.style.display = "block";
        survivor.src = ("https://www.youtube.com/embed/t3oh7ktTABM?rel=0&autoplay=1&showinfo=0&controls=0");

    }
};

window.addEventListener('DOMContentLoaded', () => {
    
    setup();
   
    document.addEventListener('keydown', (e) => {
        
        let input = document.querySelector('input');
        let x = e.key.toLowerCase();
        input.value = x;
        usedLetters.push(x);
    
        let history = document.querySelector(".history");
    
        if(!display.includes(x) && e.which !== 8 && e.which !== 13  ) {

            history.innerHTML = `
            <span class="used"> ${usedLetters.join("")} </span>
            `;
            submit();

        }
    
    }); 

//saves the score to the local storage
if( localStorage["win_player_score"] !== undefined ){

    win_score = JSON.parse(localStorage["win_player_score"]);

}
if( localStorage["lose_player_score"] !== undefined ){

    loss_score = JSON.parse(localStorage["lose_player_score"]);

}

});

const reload = () => {
    location.reload();
}
const restart = () => {
     localStorage.clear();
     location.reload();
}



