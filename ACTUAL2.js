alert("T-BOT iS lOadInG");

const userInput =document.querySelector("#userInput");  

const submit =document.querySelector("#submit");  

const botchat=document.querySelector("#botchat");  

submit.addEventListener("click", response);
    
const greetings = ["Hello" , "Whats Up" , "Kia Ora"]


const botgreetings = Math.floor(Math.random() * 2);

function response () {
    botchat.textContent = greetings[botgreetings] + " " + userInput.value + " " + "Do you enjoy Blockchain?";
    submit.addEventListener("click" , nextQuestion);
   

} 

    
function nextQuestion () {
    botchat.textContent = "er try use Bad or Good?";
    if ( userInput.value == "Good" ) {
        botchat.textContent = "YaY, tHaT's GoOd To HeAr,ClIcK tO sEe NeXt QuEsTiOn";
        submit.addEventListener("click" , nextResponse);
    }
    if (userInput.value == "Bad") {
        botchat.textContent = "PiTy, ClIcK tO SeE iF tHe NeXt QuEsTiOn WiLl ChEeR yOu Up";
        submit.addEventListener("click" , nextResponse);
    }
    

}

function nextResponse () {
    botchat.textContent = "CoRrEcT, YaY!, ClIcK tO SeE tHe NeXt QuEsTiOn";
  if ( userInput.value == "Purple") 
  {
      
      botchat.textContent = "YaY, GoOd JoB, nOw Go OuTsIdE & HaVe A GrEat DaY";
      submit.addEventListener("click" , anotherQuestion);
  }  

  else {
      botchat.textContent = "WhAt CoLoUr DoEs BlUe & ReD mAkE, hInT bEgInS wItH P";
      if (userInput.value == "Red", "Blue" , "Ivy" , "Pink" , "Gold") {
          
        
      }
  }

}

