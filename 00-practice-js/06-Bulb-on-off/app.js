const turnon = document.querySelector("#turnon");
const turnoff = document.querySelector("#turnoff");

turnon.addEventListener("click" ,function (){
    let turnonobg = document.querySelector(".turnoff");
    turnonobg.setAttribute("src" ,"image.on.bulb.jpeg") ;
});

turnoff.addEventListener("click" ,function (){
    let turnonobg = document.querySelector(".turnoff");
    turnonobg.setAttribute("src" ,"image.off.bulb.png"); 
});

// window.onload = function (){
//     console.log("window onload");  
// };
window.addEventListener("load" , function () 
{
    console.log("window load"); 
});