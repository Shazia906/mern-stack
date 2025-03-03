const container = document.getElementById("container");
// const button= document.querySelectorAll("#button");
const button= document.getElementById("button");
const picker = document.getElementById("picker");
picker.style.display ="none";
 const HEX = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D" ,"E","F"];
function randomHEX() {
   return Math.floor(Math.random()*16);
};
let color ="";
button.addEventListener("click" , function(){
   // container.style.backgroundColor = "lightsalmon";
   let HEXColor = "#";
   for (let index = 0; index < 6; index++) {
      HEXColor += HEX[randomHEX()];
    picker.style.display ="block";
    container.style.backgroundColor = HEXColor;
    color = HEXColor;
    window.navigator.clipboard.writeText(HEXColor);
    picker.innerText = "backgroundColor ";
    picker.innerText = HEXColor; 
      // HEXColor += randomHEX; 
   }     
});

picker.addEventListener("click"  ,function (){
window.navigator.clipboard.writeText(color);
picker.style.display ="none";
// alert();  
// confirm();
// prompt();
});

// const arr =Array.from("Sakeel is a good student");
// const arr =Array.from({length:24});
const arr =new Array(24);
console.log(arr);

// const newButton = document.getElementById("newButton");
// console.log(newButton.getAttribute("id"));
// console.log(newButton.setAttribute("name" ,"newbutton"));
// console.log(newButton.removeAttribute("name"));

// console.log("math files" ,Math.random(13456789*10));
// console.log("math files" ,Math.floor(13456789*10));
// console.log("math files" ,Math.ceil(0.987654321*12));
// console.log("math files" ,Math.round(0.947654321*12)); 
//  const colorChange =Math.floor(0.12345678*20);

// for (let index = 0; index < button.length; index++) {
// button[index].addEventListener("click" , function (){
//    container.style.backgroundColor = "red";   
// });
   
// }
// 
// button.forEach((button) =>{
// button.addEventListener("click" , function (){
//    container.style.backgroundColor = "red";   
// });
// });

