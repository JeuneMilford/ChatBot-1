alert("T-BOT iS loading");

const userInput =document.querySelector("userInput");  

const submit =document.querySelector("submit");  

const Botchat=document.querySelector("botchat");  

submit.addEventListener("click", response);

function response () {
    Botchat.innerhtml = "Hello" + userInput.value;
}

  

