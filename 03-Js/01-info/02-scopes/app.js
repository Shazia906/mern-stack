
// globalscope var or let,const block scope
{
    var username = "Asam";
    const age = 20;
    let contact = 1234567890 ;
// console.log ("My name is:" , username)
console.log ("My age is:" , age)
console.log ("My contact is:" , contact)


}

console.log ("My name is:" , username)
// console.log ("My age is:" , age)
// console.log ("My contact is:" , contact)

// functionscope

var profession = "coding";

function displayinfo(){
 const profession = "teaching";
    console.log("your profession" ,profession)
    const city = "Burewala";
    var age = 20;
    let contact = 1234567890;
console.log("YOUR age is:" ,age)
console.log("YOUR city is:" , city )
console.log("YOUR contact is:" ,contact)
}
displayinfo()

// console.log("YOUR city is:" ,city )
// console.log("YOUR age is:" ,age)
// console.log("YOUR contact is:" ,contact)
console .log ("your profession is:" , profession)

// type conversion or type coreocion

const num1 = 30 ;
var num2 = "10B";

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1**num2);
console.log(num1 > num2);
console.log(typeof NaN)

// type conversion
const nuwnum ="2000.A4567B";
console.log(Number(nuwnum))
console.log(parseInt(nuwnum))
console.log(parseFloat(nuwnum))

console.log(String("100"))
console.log(String("GOOD"))
console.log(String("ALWAYS BE HAPPAY"))
console.log(String("0"))

console.log(Boolean(100))
console.log(Boolean("0"))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(101))

 var number1 = 20;
 var number2 = "10";
 
 console.log(number1 + + number2)
 console.log(number1 + - number2)
 console.log(number1 ** number2)
 console.log(number1 > number2)
 console.log(!!10)

// Boolean 
// truthy or falsey

// falsey values(0 ,"" ,null ,undefined , nan)

if (0) {
    console.log("Good work")  
}
else{
    console.log("keep going")
}
if ("") {
    console.log("Good work")  
}
else{
    console.log("keep going")
}
if (null) {
    console.log("Good work")  
}
else{
    console.log("keep going")
}
if (undefined) {
    console.log("Good work")  
}
else{
    console.log("keep going")
}
if (NaN) {
    console.log("Good work")  
}
else{
    console.log("keep going")
}
if ("0") {
    console.log("Good work")  
}
else{
    console.log("keep going")
}
if (1) {
    console.log("Good work")  
}
else{
    console.log("keep going")
}

var logger = function (a , b){
// console.log("return this")
    return a+b;
}
function loggerhere(){
// return ("result type");
console.log("result this")
}
console.log(logger(12,23))
console.log(logger);
console.log(loggerhere);

// Array and objects

const arr = ["Asam","Ramzan","Sakeel","Sajid","Adnan","Abdulrehman","Tufail"]; 
// console.log("Array=====" , arr)
// console.log("Array=====" , arr.length)
// console.log("Array=====" , arr[1])
// console.log("Array=====" , arr[0])
// console.log("Array=====" , arr[(arr.length-1)/2])
// console.log("Array=====" , arr[arr.length-2])
// console.log("Array=====" , arr[arr.length-arr.length])

// for(let counter=1; counter<=arr.length; counter++){
//     console.log("I am learning C++");
// }

// const arra = [1,"Sakeel",[1,2,3,4,5,6,7]]
//  {
//     console.log("Array with an array",arra)
//  }  

const array = [
    [1,2,3,4,5,6,7,8,9,10],
    [11,12,13,14,15,16,17,18,19,20],
    [21,22,23,24,25,26,27,28,29,30],
    [31,32,33,34,35,36,37,38,39,40],
    [41,42,43,44,45,46,47,48,49,50],
];
for(let outerIndex = 0 ;outerIndex<array.length;outerIndex++){
    const outerIndex = array;
//     // console.log(outerIndex);
    const innerArray = array[outerIndex];
    for (let innerIndex = 0; innerIndex <innerArray.length;innerIndex++)
        {
        // console.log("Array====",innerArray[innerIndex]);
        // console.log( `${outerIndex} * ${innerIndex} ===> ${innerArray[innerIndex]}`);
        console.log(array[outerIndex][innerIndex]);
        }
}

for(let counter = 1;counter<11; counter++){
    // console.log(counter*2);
    // if(counter===5) continue;
    // if(counter===5) break;
    console.log(` 2 * ${counter} = ${counter * 2} `);

}
for(let counter = 10; counter >=1; counter--){
    console.log(`2 * ${counter} = ${counter*2}`)
}

// const mainarray = [
//     [1,2,3,4,5,6,7,8,9,10],
//     [11,12,13,14,15,16,17,18,19,20],
//     [21,22,23,24,25,26,27,28,29,30],
//     [31,32,33,34,35,36,37,38,39,40],
//     [41,42,43,44,45,46,47,48,49,50],
// ];
// for (let i = 0; i < mainarray.length; i++) {
//     // const element = mainarray[i];
//     for (let j = 0; j < mainarray[i].length; j++) {
//         // const element = array[innerindex];
//         console.log(mainarray[i][j]);
//     }   
// }


const numbers=  [10,20,30,40,50,60,40];

var midAndAverageOfNumbers = function (arr){
const mid= arr.length % 2 ;
if(mid===0){
// const mid = arr.length / 2;
// const midValue = arr[mid];
// const beforeValue = arr[mid-1];
// console.log("Mid======",midValue,beforeValue)
// return (midValue+beforeValue)/2;

}   
else{
    return arr[(arr.length-1)/2];
}
}

console.log("mid===========" ,  midAndAverageOfNumbers(numbers));
const numbers1=  [10,20,30,40,50,60];

var midAndAverageOfNumbers = function (arr){
const mid= arr.length % 2 ;
if(mid===0){
const mid = arr.length / 2;
const midValue = arr[mid];
const beforeValue = arr[mid-1];
console.log("Mid======", mid,midValue,beforeValue)
return (midValue+beforeValue)/2;

}   
else{
    // return arr[(arr.length-1)/2];
}
}

console.log(  "average========" ,   midAndAverageOfNumbers(numbers1));

// const username1 = prompt('My name is Asam')
// const userage = prompt('My name is 100')
// const usercontact = prompt('My name is 134567890')
// console.log(`MY name ${username1} and my age is ${userage} and my contact is ${usercontact}`)

var number = [12 ,45  ,7 ,23 ,56 , 89 , 34 ];
//  const minNumber = Math.min(...number);
const minNumber = number[number.length-5];
console.log(minNumber);
// const maxNumber = number[number.length-2];
const maxNumber = Math.max(...number);
console.log(maxNumber);

var realfruits = ["mango" , "orange" , "watermillion", "bannana" , "grapes" ];
const center = realfruits[realfruits.length-3];
console.log(center);

// ternery operator

const condition = false;
const truecase = "this is true statement";
const falsecase = "this is false statement";
condition?console.log(truecase):console.log(falsecase);
console.log(condition?truecase:falsecase);

// loops


// callback and expresion and HoF

function hof(callforme){
    callforme();
}
function loggerforcallback(){
    console.log("HY EVERONE")
}

hof(loggerforcallback)

function something(callback){
    callback(something)
}
something(
    function showSomething(something){
        console.log("Here messege");
    }
)

function something(callback){
    callback(something)
}
    function showSomething(something){
        console.log("Here Any is the best");
    }
  something(showSomething);


  function average( n1,n2,n3 ,callback){
    const avg = (n1+n2+n3) / 3;
    callback(avg); 
  }
  
  average(10,20,50 , 
    function showeveryone(avg){
        console.log("average of numbers" , avg)    
    }
  )

//   loops

let i = 5;
// postincrement

// console.log(i++);
// console.log(i)
// console.log(i--);
// console.log(i); 

// preincrement
// console.log(++i)
// console.log(--i)

for(let counter=1; counter<=6 ;counter++){
    console.log("Hy everyone i'am");
}
let whileCounter = 1;
    while(whileCounter<=7){
    console.log("Hello while...");
    whileCounter++;
}
// let whileCounter = 0;
//     while(false){
//     console.log("Hello while...");
//     whileCounter++;
// }

let dowhileloop = 0;
do {
    console.log("Hy dowhile");
    dowhileloop++;

} 
while (dowhileloop<=9);

// let dowhileloop = 0;
// do {
//     console.log("Hy dowhile");
//     dowhile++;

// } 
// while (false);
 
const somenumbers = [1,2,3,4,5,6,7,8,9];
// console.log("Array",somenumbers)
delete somenumbers[4];   
somenumbers[1] = 15;
console.log("Array",somenumbers[1],somenumbers);
// console.log("Array",somenumbers);
for(let index = 0; index <somenumbers.length ; index++){
    console.log("some num" , somenumbers[index]);
}

// objects

const person = {
    // properties
    username:"Asam",
    age:20,
    height: 6,
    weight : 100,
    true:"male",
    false:"female",
    // methods
      heWalks:function (personname){
        this.username = personname;
console.log(`${this.username} Walsks...`)
console.log(`${person.username} Walsks...`)
console.log(`${person["username"]} Walsks...`)
// console.log(personname);     
    }  
}
var age = 20;

// person["username"] = "Sahbaz";
// person.username = "Sakeel";

delete person["username"]; 

person.profession = "development";
person.age = ["20"];

console.log("person",person);
console.log("Details",person["username"]);
console.log("Details",person.true);
person.heWalks("Zubair");
console.log(`${this.username}`);
console.log("person",person);

delete person.age;
person.weight = 200;
console.log("person",person);

console.log(typeof person);
console.log(typeof somenumbers);

// insert a new value at the and of array
somenumbers[somenumbers.length] = 12000;
delete somenumbers[somenumbers.length-1];
console.log("Array====>" , somenumbers);
somenumbers[somenumbers.length] = 300;  
console.log("Num" , somenumbers);
  
// method
// 1-push , 2-pop , 3-shift , 4-unshift
somenumbers.push(100);
console.log("Array",somenumbers);
somenumbers.push(1234567);
console.log("Array",somenumbers);
 
//  var midValue = 20;
//  console.log(midValue);

//  let midValue = 20;
//  console.log(midValue);
 const midValue = 20;
 console.log(midValue);

function fact(num1){
//    var fact = 1;
//    let fact = 1;
   const fact = 1;
    for (let index = num1; index > 0; index--) {
    //  fact *=num1;
     var midValue = 20;
     console.log(midValue);
    }
    return fact;
}
console.log("factorial=====>" , fact(5));

somenumbers.pop()
console.log("Array",somenumbers);
somenumbers.pop(1234567);
console.log("Array",somenumbers);
