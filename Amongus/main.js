//Variables global
var etat = true;
console.log(etat);
var img = document.getElementById("img");
img.style.visibility = "hidden";
var player = document.createElement('audio');
player.src = "amongus.mp3";
player.preload = 'auto';
//Abonnements

//Fonctions
function demarrer() {
    document.getElementById("button").addEventListener("click", exploser);
};

function exploser() {
    if(etat === true) {
        document.getElementById("texte").innerHTML = "Eplosion...";
        etat = false;
        var body = document.body.style;
        body.background = "linear-gradient(to right, red, 50%, orange)";
        img.style.visibility = "unset";
        player.play();
    }else {
        img.style.visibility = "hidden"
        var body = document.body.style;
        document.getElementById("texte").innerHTML = "Annulation...";
        etat = true;
        body.background = "linear-gradient(to right, black, 50%, white)";
        setTimeout(() => {
            document.getElementById("texte").innerHTML = "En attente...";
            body.background = "linear-gradient(to right, blue, 50%, white)";
            }, "1000");
    }
    
};

//Corps
window.addEventListener("load", demarrer); //Attend le chargement de la page pour demarrer la fonction demarrer