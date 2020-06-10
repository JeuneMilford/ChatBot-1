alert("T-BOT iS lOadInG");

const userInput =document.querySelector("#userInput");  

const submit =document.querySelector("#submit");  

const botchat=document.querySelector("#botchat");  

submit.addEventListener("click", response);
    
const greetings = ["HeLlo" , "WhAt's Up" , "WhAt'S pOpPiN"]

const botgreetings = Math.floor(Math.random() * 4);

function response() {
    while(botchat.textContent == "WhAt Is YoUr NaMe?") {
        botchat.textContent = greetings[botgreetings] + " " + userInput.value;
        setTimeout(() => {botchat.textContent = "HoW wAs YoUr DaY? GoOd or BaD"}, 2000)
    }

    while(botchat.textContent == "HoW wAs YoUr DaY? GoOd or BaD") {
        if (userInput.value == "Good" ) {
            botchat.textContent = "ThAtS fAnTaStIc";
            
        }
        else if (userInput.value == "Bad") {
            botchat.textContent = "Oh MaN, tOmOrRoW wIlL bE bEtTeR";
        }
        else {
            botchat.textContent = "Please type GoOd or BaD"
        }
    while(botchat.textContent= "Please type GoOd or BaD") {

    }


    }
    
    

    
