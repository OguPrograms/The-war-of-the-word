//FUNTIONALITY

// Updathe the player tourn
function PlayerTourn(player){
    document.getElementById("player-tourn").style.display = "flex";
    document.getElementById("player-tourn__player").innerHTML = player.toString();
}

//INTERFICE

// Go to word page
function WordPage(){
    document.getElementById("menu").style.display = "none";
    document.getElementById("select-word").style.display = "flex";
    PlayerTourn(1);
}

// Check if player enter a word that is smaller than 15 characters
function CheckWord(){
    word = document.getElementById("word").value;
    if(15 > word.length && word.length > 0 ){
        Play(word, 1);
    }else{
        alert("Enter a valid word");
    }
}

function RandomWord(){
    Play("Hello", 1);
}

//GAME

// Start the game
function Play(word, player){
    document.getElementById("player-tourn").style.display = "flex";
    document.getElementById("select-word").style.display = "none";
    document.getElementById("menu").style.display = "none";
}