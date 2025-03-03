// alert("are you sure.");
// const alertValue = alert("are you sure");
// confirm("are you sure.");
// const confirmValue = confirm("are you sure");
// prompt("are you sure.");
// const promptValue = prompt("are you sure");

const count =document.querySelector("#count");
const plus = document.querySelector("#plus");
const minas = document.querySelector("#minas");
const reset = document.querySelector("#reset");
const setvalue = document.querySelector("#setvalue");

plus.addEventListener("click" ,function () {
    let countValue = parseInt(count.innerText);
    let setvaluethorough = parseInt(setvalue.value);
    count.innerText =  countValue+setvaluethorough; 
});

minas.addEventListener("click" , function(){
    const minasvalue = parseInt(count.innerText);
    let setminasvalue = parseInt(setvalue.value);
    count.innerText = minasvalue-setminasvalue;
    
});

reset.addEventListener("click" ,function () {
    count.innerText = "0";    
})


