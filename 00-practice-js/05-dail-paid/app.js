const main = document.getElementById("container");
// const div = document.createElement("div");
// container.appendChild(div);
const section = document.createElement("section");
main.appendChild(section);
const container = document.createElement("container");
section.appendChild(container); 

const padbuttons =[
    {
        text:1,
    },
    {
        text:2 ,
    },
    {
        text:3 ,
    },
    {
        text:4 ,
    },
    {
        text:5 ,
    },
    {
        text:6 ,
    },
    {
        text:7 ,
    },
    {
        text:8 ,
    },
    {
        text:9 ,
    },
    {
        text:"*",
    },
    {
        text: 0 ,
    },
    {
        text:"#",
    },    
];
let number ="";
for (let index = 0; index < padbuttons.length; index++) {
    const button = document.createElement("button");
    button.appendChild(document.createTextNode(padbuttons[index].text));
    section.appendChild(button);

    button.addEventListener("click" , function(event){
        number += button.innerText;
        container.innerText = number;
    });
};

container.style.textAlign ="center";
container.style.fontSize = "24px";
container.style.padding = "10px";  
container.style.backgroundColor = "white";
// container.style.border = "1px solid ";
container.style.position = "relative";
// container.style.top ="57px";
// container.style.left ="403px";
container.style.width ="420px";
container.style.height ="70px";
container.style.borderTopLeftRadius= "0.3rem";
container.style.borderTopRightRadius= "0.3rem";
// container.style.color = "";
container.style.fontSize = "30px";


const button1 = document.createElement("button");
const button2 = document.createElement("button");
section.appendChild(button1);
section.appendChild(button2);

button1.innerText = "Clear";
button2.innerText = "Cancel";
// button1.style.width = "150px";
// button1.style.height = "70px";
// button.style.borderRadius = "0.5rem";
// button.style.position ="absolute";
// button.style.right = "10px";
// button.style.top = "10px";
//  button1.style.fontSize = "x-large";
//  button1.style.cursor = "pointer";
//  button1.style.outline = "none";
//  button1.style.backgroundColor = "crimson";


 button1.addEventListener("click" , function(){
    // number ="";
     container.innerText= "";
    //  div.innerText = div.innerText.slice(0,-1);
 });
 button2.addEventListener("click" , function(){
    // number ="";
    //  container.innerText= "";
     container.innerText = container.innerText.slice(0,-1);
 });