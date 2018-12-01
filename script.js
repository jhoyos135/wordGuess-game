
    let wordList = ["madona", "journey", "queen", "survivor"];

    let choice = Math.floor(Math.random() * 4);
    let answers = wordList[choice];
    let Mylength = answers.length;
    let display = [Mylength];
    let letters = answers.split('');
    let attemptsLeft = 10;
    let output = "";
    let userLetter = "";
    let game = document.querySelector("#game");

    //TODO: REFACTOR LOOPS

    //this creates the game container
    let setup = () => {

        [].forEach.call(answers, function(answers) {
            display[answers] = "_ ";
            output = output + display[answers]
            console.log(answers)
        })
        // for(let i = 0; i < answers.length; i++) {
        //     display[i] = "_ ";
        //     output = output + display[i];
        // }
        game.innerHTML = output;
        output = "";
    }

    let submit = () => {
        let input = document.querySelector("input");

        output = "";
        userLetter = input.value;
        input.value = "";

        for(let c = 0; c < answers.length; c++) {
            
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

            //TODO: SHOW THE LETTERS ALREADY USED 
            //TODO: SHOW A MESSAGE THAT SAYS "THE LETTER IS ALREADY ADDED"
            console.log("already here");
            output = ""
        } else {
            output = ""
            attemptsLeft--;
        }    

    let guesses = document.querySelector("#guesses");
    let here = document.querySelector(".here");
    let history = document.querySelector(".history");

    if(game.textContent.length === letters.length) {

        guesses.innerHTML = `
            Congratulation! the right word is <strong class="strong">${answers} </strong>
        `;
        input.classList.add("delete");
        game.classList.add('delete');
        here.classList.add('delete');
        history.classList.add('delete');


    } else if (attemptsLeft < 1 ) {

        guesses.innerHTML = `
            Sorry the right word was <strong class="strong">${answers} </strong>
        `;
        input.classList.add("delete");
        game.classList.add('delete');
        here.classList.add('delete');
        history.classList.add('delete');

    } else {

        guesses.innerHTML = `
            You have ${attemptsLeft} guesses left
        `;


    }

    }

window.onload = () => {
    setup();

    window.addEventListener('keyup', (e) => {   
          
        e.preventDefault();

        let input = document.querySelector("input").value;
        let history = document.querySelector(".history");

        if(!display.includes(input) ) {
            history.innerHTML += `
            <span> ${input} </span>
            `;
        }
        

        submit();
        
    });
};
