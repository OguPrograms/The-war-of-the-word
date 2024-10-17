//FUNTIONALITY
const abecedary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const words = ["hello", "world"]

//INTERFICE

window.onload = function(){
    // Updathe the player tourn
    if (!window.location.href.includes('menu-page')){
        console.log(playerTourn);
        playerTourn = (playerTourn == 1) ? 2 : 1;
        console.log(playerTourn);
        document.getElementById("player-tourn__player").innerHTML = playerTourn.toString();
    }
}

// Go to word page
function WordPage(){
    location.href='/content/select-word/select-word.html';
}


// Check if player enter a word that is smaller than 15 characters
function CheckWord(){
    word = document.getElementById("word").value;
    if(15 > word.length && word.length > 0 ){
        Play(word);
    }else{
        alert("Enter a valid word");
    }
}

function RandomWord(){
    const word = words[Math.floor(Math.random() * words.length)];
    Play(word, 1);
}

//GAME

// Start the game
function Play(word){
    location.href ="/content/game/game.html";
    const container = document.querySelector('.game__background');
}