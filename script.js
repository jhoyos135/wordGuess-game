
    let wordList = ["madona", "journey", "queen", "survivor"];

    let choice = Math.floor(Math.random() * 4);
    let answer = wordList[choice];
    let Mylength = answer.length;
    let display = [Mylength];
    let letters = answer.split('');
    let attemptsLeft = 10;
    let output = "";
    let userLetter = "";
    let game = document.querySelector("#game");

    //TODO: REFACTOR LOOPS
    //TODO: ADD RELOAD BUTTON

    //this creates the game container
    let setup = () => {
        for(let i = 0; i < answer.length; i++) {
            display[i] = "_ ";
            output = output + display[i];
        }
        game.innerHTML = output;
        output = "";
    }

    let submit = () => {
        let input = document.querySelector("input");

        output = "";
        userLetter = input.value;
        input.value = "";

        for(let c = 0; c < answer.length; c++) {
            
            if( userLetter.toLowerCase() === letters[c] ) {
                
                display[c] = userLetter.toLowerCase();

                // console.log(output)
                // console.log(letters)
                // console.log(letters[c])
                
            }

            output = output + display[c] + "";
            
        };
        
        game.innerHTML = output;
        
        //checks to see that the letter is already used
        if(output.includes(userLetter.toLowerCase())) {

            //TODO: SHOW A MESSAGE THAT SAYS "THE LETTER IS ALREADY ADDED"
            
            output = "";
        } else {
            output = "";
            attemptsLeft--;
        }    

    let guesses = document.querySelector("#guesses");
    let here = document.querySelector(".here");
    let history = document.querySelector(".history");

    if(game.textContent.length === letters.length) {

        guesses.innerHTML = `
            Congratulation! the right word is <strong class="strong">${answer} </strong>
        `;
        input.classList.add("delete");
        game.classList.add('delete');
        here.classList.add('delete');
        history.classList.add('delete');


    } else if (attemptsLeft < 1 ) {

        guesses.innerHTML = `
            Sorry the right word was <strong class="strong">${answer} </strong>
        `;
        input.classList.add("delete");
        game.classList.add('delete');
        here.classList.add('delete');
        history.classList.add('delete');

        
            let game_over = document.querySelector('#game-over');
    
            game_over.style.display = "block";
            game_over.src = ("https://www.youtube.com/embed/6S21ZSsC21U?rel=0&autoplay=1&showinfo=0&iv_load_policy=3&controls=0");
    
        

    } else {

        guesses.innerHTML = `
            You have ${attemptsLeft} guesses left
        `;

    }
    };

window.addEventListener('DOMContentLoaded', () => {
    
    setup();
   
    document.addEventListener('keyup', (e) => {   
          
        e.preventDefault();

        let input = document.querySelector("input").value;
        let history = document.querySelector(".history");

        

        if(!display.includes(input) ) {
            history.innerHTML += `
            <span> ${input} </span>
            `;
        }

        submit();
        

        if(game.textContent === "queen") {
        
            let queen = document.querySelector('#queen');
    
            queen.style.display = "block";
            queen.src = ( "https://www.youtube.com/embed/FFqvEE4ujtQ?t=27?rel=0&autoplay=1&showinfo=0&controls=0");
    
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
        
    });

});

document.addEventListener('keydown', () => {
    let input = document.querySelector('input');
    let x = event.charCode || event.keyCode;
    let y = String.fromCharCode(x).toLowerCase();
    input.value = y  
}); //get the key value into the input when the document is selected
