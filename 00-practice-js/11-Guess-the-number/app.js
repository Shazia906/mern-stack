 (() => {const submitbtn = document.querySelector(".submit");
const form =  document.querySelector("form");
const inputElement = document.querySelector("input");
const result = document.querySelector(".result");
const restartGame = document.querySelector(".game");
const geussNumberFiled = document.querySelector(".guess-number");
const geussNumber = [];

let roundedNumber = Math.round(Math.random() * 100);

form.addEventListener("submit", function (event){
    event.preventDefault();
    const inputValue = parseInt(inputElement.value);
    if (inputValue > roundedNumber){
       result.innerText = "Too high!";
    }
    else
    if (inputValue < roundedNumber){
       result.innerText = "Too Low!";
    }
    else{
       result.innerText = "Congrats you win the game!!!!";
       restartGame.disabled = false ;
       submitbtn.disabled = true ;
    }
    // geussNumberFiled.innerText = "Guess Number :" + inputValue;
     geussNumber.push(inputValue);
     geussNumberFiled.innerText = "Guess Number :" + geussNumber.join(" ,");
    form.reset();  
    restartGame.addEventListener("click" , function (){
      result.innerText = "";
      geussNumberFiled.innerText = "" ;
      restartGame.disabled = true;
      submitbtn.disabled = false;
      roundedNumber = Math.round(Math.random() * 100); 
    });
})})();
const mainElement = document.querySelector(".main");
const crsr = document.querySelector(".crsr");
mainElement.addEventListener("mousemove" , function (event){
  crsr.style.left = event.x + "px" ; 
  crsr.style.top = event.y + "px" ; 
})

