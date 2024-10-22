//FUNTIONALITY
const abecedary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const words = ["hello", "world"]

// Updathe the player tourn
function PlayerTourn(player){
    player = (player == 1) ? 2 : 1;
    document.getElementById("player-tourn").style.display = "flex";
    document.getElementById("player-tourn__player").innerHTML = player.toString();
}

//INTERFICE

// Viw password
function ViewPassword(){
    if (document.getElementById("word").type == "password"){
        document.getElementById("menu__viw-password").innerHTML = "Ocultar";
        document.getElementById("word").type = "text";
    }else{
        document.getElementById("menu__viw-password").innerHTML = "Mostrar";
        document.getElementById("word").type = "password";
    }
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
    PlayerTourn(player);
    document.getElementById("player-tourn").style.display = "flex";
    document.getElementById("game").style.display = "flex";
    document.getElementById("select-word").style.display = "none";
    document.getElementById("menu").style.display = "none";
    lets_try(word, abecedary);
}

// Introduce a letter
function lets_try(word, abecedaryButtons){
    //word codified
    abecedaryButtons="";
    codifiedWord = "";
    for(let i = 0; i < word.length; i++){
        codifiedWord += "_"
    }
    document.getElementById("game__word").innerHTML = codifiedWord;

    //butons
    for(let i = 0; i < abecedary.length; i++){
        if (abecedaryButtons.includes(abecedary[i])){
            document.getElementById("game__buttons").innerHTML += "<button class='game__button_disabled'>"+abecedary[i]+"</button>";
        }else{
            document.getElementById("game__buttons").innerHTML += "<button class='game__button' id='game__button'>"+abecedary[i]+"</button>";
        }
    }
}

// A button was clicked
document.getElementById("game__button").addEventListener('click', (event) => {
    if (event.target.id === 'game__buttons'){
        alert('¡Botón clicado!');
    }
});

// Animation win/lose