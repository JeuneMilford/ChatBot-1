alert("T-BOT is loading");

const userInput =document.querySelector("userInput");  

const submit =document.querySelector("submit");  

const Botchat=document.querySelector("botchat");  

submit.addEventListener("click", response);

function response () {
    Botchat.textContent = "Hello, i'm T-BOT" + userInput.value;
    seTimeout(function(){ nextQuestion(); }, 30000;
 
}

function nextQuestion() {
    Botchat.textContent = "What is your name";
    submit.addeventlistner("click" , AnotherResponse);
    
}
  
function AnotherResponse() {
    botchat.textcontent= "This time you said" + userInput.value;
}

