console.log("intro to js")

console.log(50);

console.log(true);
console.log(false);

// data types

console.log("Js is very interessting")

console.log(100)

console.log(true)
console.log(false)

console.log(null)

console.log(undefined)

// variabels

 var age = 88;
console.log(typeof age);
// age = "100"

console.log(typeof age);

console.log(100)
console.log(100)
console.log(100)
console.log(100)
console.log(100)
console.log(100)

// keywors

// 1-var
// 2-let
// 3-const

var number =20;
 var number = 40 ;
// var number = 30;
console.log("print the num" , number)

let gender= "male";
gender = "female";
// let gender = female;
console.log("print the gender" , gender)

const cgender = "male";
// const gender = "femeale";
console.log("print the gender" , cgender)

console.log(90==90)
console.log(49== "49")
console.log(20===20);
console.log(50=== "21")
console.log(20>="20")
console.log(20>=24)
console.log(45>=35)
console.log(45>67)
console.log(56<35)
console.log(56<=67)
console.log(12<=19)

const artithmetic = 10;
const erithmetic = 20;
console.log(artithmetic+erithmetic)
console.log(artithmetic-erithmetic)
console.log(artithmetic/erithmetic)
console.log(erithmetic*artithmetic)
console.log(erithmetic%artithmetic)
console.log(10**10)

console.log(true&&true)
console.log(true&&false)
console.log(true||true)
console.log(true||false)
console.log(false||false)

const number1 = 30;

  if (number1>45)
    {
    console.log("true case")
}
else
{
    console.log("false case")
}
// SWITCH STATEMENT

   const city = "lahore";

   switch(city){
    case "lahore":
        console.log("My city is :" +city)
        console.log("my city is ", city)
        break;
        default:
            console.log("another city name")
   }

   const username = "Asam";
   const Age = "28";

console.log ("My name \n     is"  +  username +  "and  my age is" +   Age);
console.log(`My 
name   is  ${username} and my age       is ${Age}`);
 
// function show(){
//     console.log("my name is asam")
// }
// show()

// function addition(a , b) {
//     return a + b;  
// }

// const result = addition(100 , 200);
// console.log(result);

// function addition(a , b) {
//     return a + b;  
// }
// console.log(addition(100 ,200 ));

// function caculateBMIs(mass , height) {
//     return mass / 1.75 **2;
// }
function caculateBMIs(mass , height) {
    return mass / height **2;   
}
  function compareTwoBMIs(BMIs1 , BMIs2) {
    BMIs1 > BMIs2    
  }

  if ( compareTwoBMIs(caculateBMIs(68 , 1.75) , caculateBMIs(80 , 1.80)) ) {
   
    console.log("person A is higher then B")}
else{
    console.log("person A is lower then person B")
  }

  function logger(messsege = "Hi Everyone"){
    console.log(messsege);
  }  

  logger(messege="Messege here", messege); 

console.log(" Hello , \n       Sakeel is going to college.");