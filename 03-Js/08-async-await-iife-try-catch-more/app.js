//  aysychoronous behavior
 setTimeout(function () {
    console.log("time out with out any");
});
console.log("log2......");
const promise = new Promise((resolve, reject) => {
resolve("Yes sure");
// console.log("promise");
}).then((data)=>{
    console.log(" then part data");
});
function promise1(){
    new Promise((resolve, reject) => {
    //   console.log("promise sucessfull");
      resolve("data");
      setTimeout(()=>{
        console.log("time is outed");
      },(2000));
    });  
};
promise1()
console.log("Log3......");

// fetch

// const fetchData = window.fetch("https://jsonplaceholder.typicode.com/users/2")
// .then((data)=> {  return data.json()})
// .then((result)=>{console.log(result)})
// .catch((error)=> {console.log(error.messege)});

// callback hell
setTimeout(() => {
    console.log("5 second baad");
    setTimeout(() => {
      console.log("4 second baad");
      setTimeout(() => {
        console.log("3 second baad");
        setTimeout(()=>{
            console.log("2 second bad");
            setTimeout(()=>{
                console.log("1 second bad");
            }, 1000);
        }, 2000);
      } , 3000);
    } , 4000);
  } , 5000);

// iife (imegiatory invoked function expretion)

(()=>{
    console.log("Iife  simple  arrow function")
})();

(function(){
    console.log("Iife  simple closure  function")
})();
// named iife
(function namedIfee(){
    console.log("Simple closure named  function iife")
})();



// async await

//  async function makeRequest(){
//     // return "hello";
//     // throw new Error ("error in the program");
//     // const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // const data = await response.json()
//     // console.log(data);
// }
// // console.log(makeRequest());

function hi(){
    console.log("hello eveyone");
    // throw "error in the program"
    // throw new Error ("error");
    // console.log("hy");
};



// try cath finally 

try {
    console.log(a);
}
catch(error) {
    console.log(error.message);
    console.dir(error);
}finally{
    console.log("hellow world")
}

console.log(3+7);
console.log("Asslamualaikum");
// try catch async 

async function makeRequest1(){
   try{
    // const response = await fetch("https://jsonplaceholder.typicode.com/users"); // this link take of placeholder.json
    const data = await response.json()
    console.log(data);
} catch{
    console.log("something wrong");
}
}
console.log(makeRequest1());
 
function first(){
    second()
}
function second(){
    third()
}
function third(){
    fourth()
}
function fourth(){
    fifth()
}
function fifth(){
   six() 
}
function six(){
    seven()
}
function seven(){
    eight()
}
function eight(){
  nine()  
}
function nine(){
  ten()  
}
function ten(){   
}
first()






