
    let wordList = ["madona", "journey", "queen", "survivor"];

    let choice = Math.floor(Math.random() *2);
    let answer = wordList[choice];
    let Mylength = answer.length;
    let display = [Mylength];
    let win = Mylength;
    let letters = answer.split('');
    let attemptsLeft = 10;
    let output = "";
    let userLetter = "";
    let game = document.querySelector("#game");

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

                win--

                console.log(output)
                console.log(win)
                console.log(letters)
                console.log(letters[c])
            }

            output = output + display[c] + "";
        };

        game.innerHTML = output;


        
        //checks to see that the letter is already used
        if(output.includes(userLetter)) {
            console.log("already here");
            output = ""
        } else {
            output = ""
            attemptsLeft--;
        }
       
        

    let guesses = document.querySelector("#guesses");
    let here = document.querySelector(".here");

    // needs fixing -  when you add the same letter again the win counter goes down again

    if(win < 1) {

        guesses.innerHTML = `
            Congratulation! the right word is <strong class="strong">${answer} </strong>
        `;
        input.classList.add("delete");
        // document.querySelector("#submit").classList.add("delete");
        game.classList.add('delete');
        here.classList.add('delete');

    } else if (attemptsLeft < 1 ) {

        guesses.innerHTML = `
            Sorry the right word was <strong class="strong">${answer} </strong>
        `;
        input.classList.add("delete");
        // document.querySelector("#submit").classList.add("delete");
        game.classList.add('delete');
        here.classList.add('delete');

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

        submit();
        
    });
}