//FUNTIONALITY
const abecedary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const words = ["HELLO", "WORLD", "HAM", "AMAZING", "HORRIBLE", "CRUISE"];
let frame = 0;
let playerGlobal = 0;

let points1 = 0;
let points2 = 0;

let gamePoints1 = 0;
let gamePoints2 = 0;

let wins1 = 0;
let wins2 = 0;

let typeOfPlaying = "BOT"

//INTERFICE
// Updathe the player tourn
function PlayerTourn(player){
    document.getElementById("player-tourn").style.display = "flex";
    document.getElementById("player-not-tourn").style.display = "flex";

    if (typeOfPlaying != "BOT"){
        player = (player == 1) ? 2 : 1;
        playerGlobal = player
        document.getElementById("player-tourn__player").innerHTML = player.toString();
        not_paying = player = (player == 1) ? 2 : 1;
        document.getElementById("player-not-tourn__not-playing").innerHTML = "P" + not_paying.toString();
    }else{
        document.getElementById("player-tourn__player").innerHTML = "1";
        document.getElementById("player-not-tourn__not-playing").innerHTML = "BOT";
    }
}

// Viw password
function ViewPassword(){
    if (document.getElementById("word").type == "password"){
        document.getElementById("select-word__viw-password").innerHTML = "<img class='select-word__umbrella' src='img/umbrella/umbrellaOpen.png'></img>";
        document.getElementById("word").type = "text";
    }else{
        document.getElementById("select-word__viw-password").innerHTML = "<img class='select-word__umbrella' src='img/umbrella/umbrellaClose.png'></img>";
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
function WordPage(tourn){
    typeOfPlaying = "2players"
    document.getElementById("menu").style.display = "none";
    document.getElementById("select-word").style.display = "flex";
    PlayerTourn(tourn);
}

// Bot selecting a word
function RandomWord(){
    word = words[Math.floor(Math.random() * words.length)];
    Play(word, 2);
}

// Play again
function PlayAgain(){
    gamePoints1 = 0;
    gamePoints2 = 0;
    if(typeOfPlaying == "BOT"){
        RandomWord();
    }else{
        player = (playerGlobal == 1) ? 2 : 1;
        WordPage(player);
    }
}

//Show the results
function Results(word){
    document.getElementById("game").style.display = "none";
    document.getElementById("player-tourn").style.display = "none";
    document.getElementById("player-not-tourn").style.display = "none";
    document.getElementById("results").style.display = "flex";

    points1 += gamePoints1;
    points2 += gamePoints2;

    document.getElementById("results__word").innerHTML = word.toString();

    if(typeOfPlaying == "BOT"){
        document.getElementById("results__player-bot").innerHTML = "BOT";
    }else{
        document.getElementById("results__player-bot").innerHTML = "P2";
    }

    document.getElementById("results__round-1").innerHTML = points2.toString();
    document.getElementById("results__round-2").innerHTML = points1.toString();

    document.getElementById("results__total-1").innerHTML = gamePoints2.toString();
    document.getElementById("results__total-2").innerHTML = gamePoints1.toString();

    document.getElementById("results__wins-1").innerHTML = wins2.toString();
    document.getElementById("results__wins-2").innerHTML = wins1.toString();
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
    codifiedWord = "";
    letersNotFound = 0;
    for(i = 0; i < word.length; i++){
        if (abecedaryAccerted.includes(word[i])){
            codifiedWord += word[i]
        }else{
            codifiedWord += "_";
            letersNotFound += 1;
        }
    }

    if(letersNotFound == 0){
        if(playerGlobal == 1){
            wins1 += 1;
        }else{
            wins2 += 1;
        }
        Results(word);
        return;
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


    setTimeout(() => {
        document.getElementById("animation").style.transform = "scale(1.2)"
        setTimeout(() => {

            if (word.includes(character)){
                if(playerGlobal == "1"){
                    gamePoints1 += 10;
                    document.getElementById("pointsPlayer").innerHTML = gamePoints1
                }else{
                    gamePoints2 += 10
                    document.getElementById("pointsPlayer").innerHTML = gamePoints2
                }
                document.getElementById("pointsPlayerAdd").innerHTML = "<div class='pointsPlayerAdd'>+10</div>";

            }else{
                if(playerGlobal == "1"){
                    gamePoints2 += 10
                    document.getElementById("pointsNotPlaying").innerHTML = gamePoints2
                }else{
                    gamePoints1 += 10;
                    document.getElementById("pointsNotPlaying").innerHTML = gamePoints1
                }
                document.getElementById("pointsNotPlayingAdd").innerHTML = "<div class='pointsNotPlayingAdd'>+10</div>";
                frame ++;
            }

            document.getElementById("animation").style.transform = "scale(1.4)"
            document.getElementById("animation").innerHTML = "<img src='img/gameAnimation/penjat_"+frame+".jpg'>";
            setTimeout(() => {
                lets_try(word, abecedaryAccerted, abecedaryFailed);
            }, 1000);
        }, 1000);
    }, 1000);
}