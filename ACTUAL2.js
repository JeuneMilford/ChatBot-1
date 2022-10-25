alert("T-BOT iS lOadInG");

const userInput =document.querySelector("#userInput");  

const submit =document.querySelector("#submit");  

const botchat=document.querySelector("#botchat");  

submit.addEventListener("click", response);
    
const greetings = ["Hello" , "Whats Up" , "Kia Ora"]


const botgreetings = Math.floor(Math.random() * 2);

function response () {
    botchat.textContent = greetings[botgreetings] + " " + userInput.value + " " + "why do you enjoy Blockchain?";
    submit.addEventListener("click" , nextQuestion);
   

} 

    
function nextQuestion () {
    botchat.textContent = "Try to use Yes or No";
    if ( userInput.value == "Yes" ) {
        botchat.textContent = "Why do you enjoy blockchain?";
        submit.addEventListener("click" , nextResponse);
    }
    if (userInput.value == "No") {
        botchat.textContent = "That's ok Blockchain isnt made for everyone";
        submit.addEventListener("click" , nextResponse);
    }
    

}

function nextResponse () {
    botchat.textContent = "Correct! click to see the next question";
  if ( userInput.value == "Public Blockchain", "Private Blockchain", "Consortium Blockchain") 
  {
      
      botchat.textContent = "You have reached the end, hope you leanrt something new about Blockchain";
      submit.addEventListener("click" , anotherQuestion);
  }  

  else {
      botchat.textContent = "Name one of the 3 types of Blockchains";
      if (userInput.value == "Nft Blockchain", "Cardano Blockchain" , "cnft Blockchain" ) {
          
        
      }
  }

}

