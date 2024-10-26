//FUNTIONALITY
const abecedary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const words = ["HELLO", "WORLD", "HAM", "AMAZING", "HORRIBLE", "CRUISE"];
let frame = 0;

let points1 = 0;
let points2 = 0;

let gamePoints1 = 0;
let gamePoints2 = 0;

// Updathe the player tourn
function PlayerTourn(player){
    player = (player == 1) ? 2 : 1;
    document.getElementById("player-tourn").style.display = "flex";
    document.getElementById("player-not-tourn").style.display = "flex";
    document.getElementById("player-tourn__player").innerHTML = player.toString();
    not_paying = player = (player == 1) ? 2 : 1;
    document.getElementById("player-not-tourn__not-playing").innerHTML = not_paying.toString();
}

//INTERFICE

// Viw password
function ViewPassword(){
    if (document.getElementById("word").type == "password"){
        document.getElementById("select-word__viw-password").innerHTML = "Ocultar";
        document.getElementById("word").type = "text";
    }else{
        document.getElementById("select-word__viw-password").innerHTML = "Mostrar";
        document.getElementById("word").type = "password";
    }
}

// Check if player enter a word that is smaller than 15 characters
function CheckWord(){
    word = document.getElementById("word").value;
    if(15 > word.length && word.length > 0 ){
        for (i=0; i < word.length; i++) {
            if(!abecedary.includes(word[i].toUpperCase())){
                alert("There are invalid character/s");
                return;
            }
        }
        Play(word.toUpperCase(), 1);
    }else{
        alert("The word must be between 1 and 15 letters");
    }
}

// Go to word page
function WordPage(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("select-word").style.display = "flex";
    PlayerTourn(2);
}

function RandomWord(){
    word = words[Math.floor(Math.random() * words.length)];
    Play(word, 2);
}

//GAME

// Start the game
function Play(word, player){
    frame = 0;
    PlayerTourn(player);
    document.getElementById("player-tourn").style.display = "flex";
    document.getElementById("select-word").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("animation").style.display = "none";

    lets_try(word, "", "");
}

// Introduce a letter
function lets_try(word, abecedaryAccerted, abecedaryFailed){
    document.getElementById("game").style.display = "flex";
    document.getElementById("animation").style.display = "none";

    //word codified
    console.log(word)
    codifiedWord = "";
    for(i = 0; i < word.length; i++){
        if (abecedaryAccerted.includes(word[i])){
            codifiedWord += word[i]
        }else{
            codifiedWord += "_";
        }
    }
    document.getElementById("game__word").innerHTML = codifiedWord;

    //butons
    document.getElementById("game__buttons").innerHTML = ""
    for(let i = 0; i < abecedary.length; i++){
        if (abecedaryAccerted.includes(abecedary[i])){
            document.getElementById("game__buttons").innerHTML += "<button class='game__button_accerted'>"+abecedary[i]+"</button>";
        }else if (abecedaryFailed.includes(abecedary[i])) {
            document.getElementById("game__buttons").innerHTML += "<button class='game__button_failed' id='game__button'>"+abecedary[i]+"</button>";
        }else {
            document.getElementById("game__buttons").innerHTML += "<button class='game__button' id='game__button'>"+abecedary[i]+"</button>";
        }
    }

    GameButtonListener(word, abecedaryAccerted, abecedaryFailed);
}

// A button was clicked
function GameButtonListener(word, abecedaryAccerted, abecedaryFailed) {
    const buttons = document.querySelectorAll(".game__button");
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {

            charButton = event.target.textContent;

            if (word.includes(charButton)){
                abecedaryAccerted += charButton;
            } else {
                abecedaryFailed += charButton;
            }

            Animation(word, abecedaryAccerted, abecedaryFailed, charButton);

        });
    });
}

// Animation win/lose
function Animation(word, abecedaryAccerted, abecedaryFailed, character) {
    document.getElementById("animation").style.transform = "scale(1)"
    document.getElementById("game").style.display = "none";
    document.getElementById("animation").style.display = "flex";
    document.getElementById("animation").innerHTML = "<img src='img/gameAnimation/penjat_"+frame+".jpg'>";

    if (!word.includes(character)){
        frame ++;
    }
    setTimeout(() => {
        document.getElementById("animation").style.transform = "scale(1.2)"
        setTimeout(() => {
            document.getElementById("animation").style.transform = "scale(1.4)"
            document.getElementById("animation").innerHTML = "<img src='img/gameAnimation/penjat_"+frame+".jpg'>";
            setTimeout(() => {
                lets_try(word, abecedaryAccerted, abecedaryFailed);
            }, 1000);
        }, 1000);
    }, 1000);
}