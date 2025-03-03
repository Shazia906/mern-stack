// DOM

const Dom ={
    html:{
        head:{
            title :"document",
        }
        ,

         body:{
            div:{
           h4 :Headers,
        p: "thare is something there is nothing",
            }
            ,
            div1:{
                h4 :Headers,
             p: "thare is something there is nothing",
                 }
          }
       }
    }

var username = "raheel";

console.log("docoment" , Dom);

console.log(window.document);
console.log(window.document.body);
console.log(window.document.head);

// console.log(window.document.body.innerText);
// console.log(window.document.body.textContent);
// console.log(window.document.body.innerHTML);

// setting textContent
// getting elements

const element1 = document.getElementsByTagName("h1");
const element2 = document.getElementsByName("intro");
const element3 = document.getElementsByClassName("heading");
const element4 = document.getElementById("content");

console.log(element1[1].innerHTML);
const element5 = document.querySelector("#content");
const element6 = document.querySelectorAll("#content");
const element7 = document.querySelector('[name = "intro"]');

console.log({element1,element2,element3,element4 ,element5 ,element6 ,element7});

element1[1].innerHTML = "Hy everyone";
element4.innerHTML = "Something here";

const element = document.querySelectorAll(".text");
const elements = document.querySelectorAll("#paragraph");
const moreElements = document.querySelector("#paragraph");

console.log("setting elements" , element ,elements ,moreElements)

element[0].innerHTML = "Hello everyone..........";
element[1].innerHTML = "Hello everyone........";
element[2].innerHTML = "Hello everyone.......";
element[3].innerHTML = "Hello everyone.......";


// moreElements.innerHTML = "Asslamualaikum Everyone....";

elements.forEach(function(elements){
    elements.innerHTML = "Hi Coders...."; 
});

element4.style.color ="red";
element4.style.backgroundColor ="yellow";
element4.style.padding = "20px";
element4.style.border = "10px";
element4.style.borderStyle = "solid";
element4.style.borderColor ="green";

// Event lisners

function eventlisners(event){
    console.log("Hi everyone...........") ;
};

// use this method


const button = document.getElementById("button");

button.addEventListener("click", function (event){
        console.log( event ,"clicked..............");
    });

    // Attributes
    //  const alertValue = alert("Are you sure");
    //  const confimedValue = confirm("are you agree");
       
   const firstdiv = document.querySelector(".firstelement"); 
   const seconddiv = document.querySelector(".secondelement");
   
   firstdiv.appendChild(seconddiv);
    const firstelement = firstdiv.cloneNode(true);
    // const firstelement = firstdiv.cloneNode(false);
    const secondelement = seconddiv.cloneNode(true);
    // const secondelement = seconddiv.cloneNode(false);
    document.body.appendChild(firstelement);
    document.body.prepend(secondelement);

    
    console.log(document.body.append("Hello world"));
    document.body.append("hello world" , seconddiv);

    console.log(document.body.appendChild(seconddiv));
   console.log(document.body.append(firstdiv , seconddiv));

     console.log(firstelement.children);
     console.log(firstelement.nextSibling);
     console.log(firstelement.nextElementSibling);
     console.log(firstelement.childNodes);
     console.log(firstelement.previousSibling);
     console.log(firstelement.previousElementSibling);
     console.log(firstelement.parentNode);
     console.log(firstelement.parentElement);
     console.log(firstelement.parentElement.children);
     console.log(firstelement.parentElement.childNodes);
     console.log(document.body.childElementCount);
     console.log(document.body.firstChild);
     console.log(document.body.firstElementChild);
     console.log(document.body.lastChild);
     console.log(document.body.lastElementChild);
   
    //  console.log(firstdiv.classList); 
     console.log(firstdiv.classList.add("active-check-box")); 
     console.log(firstdiv.classList.remove("active-check-box")); 
     console.log(firstdiv.classList.contains("active-check-box"));
     console.log(firstdiv.classList.replace("active-check-box" , "active"));
    //  console.log(document.body.event.target.secondelement); 

     const checkelement = document.querySelector("#custom-check");
    //   checkelement.classList.contains("check-base-style");
    
     
    //  checkelement.addEventListener("click" ,function (event) {
    //     if(checkelement.classList.contains("active-check-style")){
    //      checkelement.classList.remove("active-check-style");
    //     }
    //     else{
    //     checkelement.classList.add("active-check-style");
    //     }
    //  });

     checkelement.addEventListener("click" , function (event) {
        event.target.classList.toggle("active-check-style");
     });
 
    //  timers  and Storage

    const clearTime = window.setTimeout(function(){
        console.log("set-time-out"); 
    } 
,5000);
  

   const intervaltime = window.setInterval(function(){
        console.log("set-time-interval"); 
    } 
,2000);
   
const clearbtn = document.getElementById("clear");
clearbtn.addEventListener("click" ,function (){
clearTimeout(clearTime);
});
const clearbtninterval = document.getElementById("Clear-Time-Interval");
clearbtninterval.addEventListener("click" ,function (){
clearInterval(intervaltime);
});

document.write("Hy Coders");

const h1 = document.getElementById("content");
// console.log(h1);
console.dir(h1);

