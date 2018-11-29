
    let wordList = ["chrome", "firefox", "codepen", "javascript", "jquery", "twitter", "github", "wordpress", "opera", "sass", "layout", "standards", "semantic", "designer", "developer", "module", "component", "website", "creative", "banner", "browser", "screen", "mobile", "footer", "header", "typography", "responsive", "programmer", "css", "border", "compass", "grunt", "pixel", "document", "object", "ruby", "modernizr", "bootstrap", "python", "php", "pattern", "ajax", "node", "element", "android", "application", "adobe", "apple", "google", "microsoft", "bookmark", "internet", "icon", "svg", "background", "property", "syntax", "flash", "html", "font", "blog", "network", "server", "content", "database", "socket", "function", "variable", "link", "apache", "query", "proxy", "backbone", "angular", "email", "underscore", "cloud"];

    let choice = Math.floor(Math.random());
    let answer = wordList[choice];
    let Mylength = answer.length;
    let display = [Mylength];
    let win = Mylength;
    let letters = answer.split('');
    let attemptsLeft = 10;
    let output = "";
    let userLetter = "";

    let setup = () => {
        for(let i = 0; i < answer.length; i++) {
            display[i] = "_ ";
            output = output + display[i];
        }
        document.querySelector("#game").innerHTML = output;
        output = "";
    }

    let submit = () => {
        let input = document.querySelector("input");

        output = "";
        userLetter = input.value;
        input.value = "";

        for(let c = 0; c < answer.length; c++) {
            if(userLetter.toLowerCase() == letters[c]) {
                display[c] = userLetter.toLowerCase();
                win--;
            };
            output = output + display[c] + " ";
        };

        document.querySelector("#game").innerHTML = output;
        output="";
        attemptsLeft--;

    }

let guesses = document.querySelector("#guesses");

    if(win < 1) {
        guesses.innerHTML = 'you win';
    } else if (attemptsLeft < 1 ) {
        guesses.innerHTML = "you lose";
    } else {
        guesses.innerHTML = `
            You have ${attemptsLeft} guesses left
        `
    }

window.onload = () => {
    setup();
    document.querySelector("#submit").addEventListener('click', (e) => {
        e.preventDefault();
        submit();
    });
}
