//FUNTIONALITY

// Updathe the player tourn
function PlayerTourn(player){
    document.getElementById("player-tourn__player").innerHTML = player.toString();
}

//INTERFICE

// Go to word page
function WordPage(){
    PlayerTourn(1);
    window.location.href='/content/select-word/select-word.html';
}

// Check if player enter a word that is smaller than 15 characters
function CheckWord(){
    word = document.getElementById("word").value;
    if(15 > word.length && word.length > 0 ){
        window.location.href='/content/game/game.html';
        Play(word, 1);
    }else{
        alert("Enter a valid word");
    }
}

function RandomWord(){
    window.location.href='/content/game/game.html';
    Play("Hello", 1);
}

//GAME

// Start the game
function Play(word, player){

}