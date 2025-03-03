  
//   promises es6
 
 const giftPromise1 = new Promise((resolve , reject)=>{
//   resolve("this is your gift");
reject(" I am sorry");
}) ;
console.log(giftPromise1);

console.log("sdfghjkl");

const reason = false;

const giftPromise2 = new Promise((resolve , reject) =>{
    if (reason=="true"){
        reject("i am sorry.");
    }
    resolve("yes this is your gift.");
});
 
// Then or Ctach in promisses

giftPromise2.then((messege)=>{
    console.log(messege);
});
giftPromise2.catch((error)=>{
    console.log(error);
})
console.log(giftPromise2);
const excuse = true;
const giftPromise3 = new Promise((resolve , reject) =>{
    if (excuse){
        reject("i am sorry.");
    }
        resolve("yes this is your gift.");
}).then((messege)=>{
    console.log(messege);
})
.catch((error)=>{
    console.log(error);
});

const resolvedButton = document.getElementById("resolved");
const rejectedButton =  document.getElementById("rejected");


const giftPromise4 = new Promise((rejected , resolved)=>{
    rejectedButton.addEventListener("click" , function (event) {
        rejected("promise rejected");
    })
    resolvedButton.addEventListener("click" , function (event) {
        resolved("promise resolved");
    });

    setTimeout(()=>{
        rejected("promise reject");
    } , (4000));
});
giftPromise4.then((messege)=>{
    console.log(messege);
}).catch((error)=>{
    console.log(error);
});

 const showEverthing = ()=>{
    console.log("show something");  
 };

 console.log("log1.......");
 console.log("log2..........");
 showEverthing();

//   window.fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
//     return result.json();
//   })
//   .then((data)=> console.log(data))
//  .catch((error)=>  console.log(error));

let apidata;
 const getButton = document.getElementById("get-data");
 getButton.addEventListener("click" , ()=>{
  window.fetch("https://jsonplaceholder.typicode.com/users").then((result)=>result.json()).then((data) => console.log(data)).catch((error) =>console.log(error));
 });

 console.log( "Fetch Data", apidata);



