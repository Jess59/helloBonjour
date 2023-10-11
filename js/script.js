const langues = ["HELLO","BONJOUR"];
let noir = "black";
let blanc = "white";
    
    //Cette fonction mets dans mon h1 la salutation en anglais (Hello)
    function displayEnglish () {
        document.getElementById("greetings").innerHTML=langues[0];
        document.getElementById("para").innerHTML="How are you today?";
       
       }
    
    //Cette fonction mets dans mon h1 la salutation en français (Bonjour)
    function displayFrench () {
        document.getElementById("greetings").innerHTML=langues[1];
        document.getElementById("para").innerHTML="Comment ça va aujourd'hui";
    }
    
    //on récupère le contenu de notre balise h1 id du btnEnglish et on écoute (addEventListener) s'il a été cliqué, alors on l'asigne la fonction setEnglish
    document.getElementById("btnEnglish").addEventListener("click", displayEnglish);

      //on récupère le id du btnFrench et on écoute (addEventListener) s'il a été cliqué, alors on l'asigne la fonction setFrench
    document.getElementById("btnFrench").addEventListener("click", displayFrench);
    document.getElementById("dark").addEventListener("click",setDark);
    document.getElementById("light").addEventListener("click",setLight);


    function setDark () {
       document.getElementById("bgcolor").style.backgroundColor = noir;
       document.getElementById("greetings").style.color = blanc;
       document.getElementById("para").style.color = blanc;
    }

    function setLight () {
       document.getElementById("bgcolor").style.backgroundColor = blanc;
       document.getElementById("greetings").style.color = noir;
       document.getElementById("para").style.color = noir;
    }
    
    
    
    


    /*Deuxième façon de resoudre le problème
    const langues = ["Hello", "Bonjour"];
const greetingElement = document.getElementById("greetings");

function toggleLanguage() {
    if (greetingElement.textContent === langues[0]) {
        greetingElement.textContent = langues[1];
    } else {
        greetingElement.textContent = langues[0];
    }
}

document.getElementById("btnEnglish").addEventListener("click", toggleLanguage);
document.getElementById("btnFrench").addEventListener("click", toggleLanguage);

*/