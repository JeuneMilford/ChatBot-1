alert("testing");

const userInput =document.querySelector("userInput");  

const submit =document.querySelector("submit");  

const buddybot=document.querySelector("buddybot");  

submit.addEventListener("submit", response);

function response () {
    botchat.innerhtml = "Hello" + userInput.value;

}

  

