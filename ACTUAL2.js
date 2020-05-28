alert("testing");

const userInput =document.querySelector("userInput");  

const submit =document.querySelector("submit");  

const buddybot=document.querySelector("botchat");  

submit.addEventListener("click", response);

function response () {
    botchat.innerhtml = "Hello" + userInput.value;

}

  

