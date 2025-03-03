// let functionButton = document.getElementById("button");

// functionButton.addEventListener("click" , function () {
//     console.log("Hello world");
// });

// function sum(x,y) {
//     const a = 20 ; 
//     const b = 47;
//     return a+b;    
// };
// console.log(sum());

 const Array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,3,4,5,6,7,8,9,0,3,2,1,4,6,9,10];

//  function arraySearch(){
//     console.log(Array[Array.length-1]);
//  };
//  arraySearch();

//  const objectButton =  document.getElementById("object-button");

 const obj = {
    username :"Ramzan",
    age : 23,
    email : "Ramzan@gmail.com",
    adress : "Pakpatan",
    province:"panjab",
    age :23,
    arrya1 : [1,2,3,4,5,6,7,8,9],
 };
//  objectButton.addEventListener("click" , function (event){
//     console.log(obj);
//  });
//  console.log(obj.arrya1);

//  const loop = document.getElementById("loop");
// //  console.log(loop);
// function loopElement(params) {
//     loop.addEventListener("click" , function (event){
//         for (let index = 0; index < 100; index++) {
//           if (index%3===0){
//               console.log("Fizz");
//           }
//           else
//           if (index%5===0){
//               console.log("UUp");
//           }
//           if (index%3===0 && index%5) {
//               console.log("fizzUUP");
//           }
//           else{
//               console.log("fizzzzzzz.......");
//           }
//         };
//        });
//        for (let index = 0; index < 100; index++) {
//         setTimeout (()=>{
//             if (index%3===0){
//                 console.log("Fizz");
//             }
//             else
//             if (index%5===0){
//                 console.log("UUp");
//             }
//             if (index%3===0 && index%5) {
//                 console.log("fizzUUP");
//             }
//             else{
//                 console.log("fizzzzzzz.......");
//             } 
//           }
//         ,(10000)); }       
// }
// loopElement();


// console.log("constructor methods" , Object.keys(obj));
// console.log("constructor methods" , Object.values(obj));
// console.log("constructor methods" , Object.entries(obj));
// console.log("hasownproperty" , obj.hasOwnProperty("Age"));

// Array main sa 3 kay muliples laina 

const multipleOfThree = Array.filter(num=>num % 3  === 0);
console.log(multipleOfThree);
const mulipleOfFive = Array.filter((num)=> num % 5 === 0);
console.log(mulipleOfFive);

// object ki keys nikalna 

const objectKeys = Object.keys(obj);
console.log(objectKeys);

// object ki values nikalna 

const objectValues = Object.values(obj);
console.log(objectValues);

// R sa start honay wali keys 

const keysStartwithA = Object.keys(obj).filter((keys) =>  keys.startsWith("a"));
console.log(keysStartwithA);

// A sa start honi wali keys 

const valuesStartWithA = Object.values(obj).filter((value)=> String(value).startsWith("R"));
console.log(valuesStartWithA);
// Array main sa duplicate values ko remove karna 

const removeDuplicateValues = [...new Set(Array)];
console.log(removeDuplicateValues)
// Array ko reverse karna 

const reverseArray = Array.reverse();
console.log(reverseArray);

// array main sa max or min value 

const maxValue = Math.max(...Array);
console.log(maxValue);

console.log(Math.min(...Array));

// object main xsa duplicate values remove karna

 const {username,age,email,adress,province,arrya1} = obj
console.log(username,age,email,adress,province,arrya1);

// console.log({...new Map (Object.entries(obj))});

const [a,b,,,c,,d,e,r,t,,i,g,,x, ...restop] = Array;
console.log(a,b,c,d,e,r,t,i,g,x ,restop);

// localstorage main data store karna 

const localStorageButton = document.querySelector("#local");

localStorageButton.addEventListener("click" , ()=>{
    localStorage.setItem("Array" , JSON.stringify(Array));
     const arr =JSON.parse(localStorage.getItem("Array"));
     console.log(arr);
});
localStorage.setItem("name" ,"ALi");
 console.log(localStorage.getItem("name"));
 localStorage.removeItem("name");

//  section storage main aik object store karna 

const sectionButton = document.querySelector("#section");
sectionButton.addEventListener("click" , ()=> {
    sessionStorage.setItem("obj" , JSON.stringify(obj));
    const object =JSON.parse(sessionStorage.getItem("obj"));
    console.log(object);
});
// object main value add karna 

// obj["street"] = "gubarak-street";
obj.street = "gulbarak";
console.log(obj);

// object main sa value remova karna
// delete obj["street"];
delete obj.street;
console.log(obj);

// object ko array main convert karna 

const converobj = Object.entries(obj);
console.log(converobj);

function hy(params) {
    var a = 1;
    let y = 2;
    const z = 3;
    console.log(a);
}
hy();

const div = document.getElementById("hided");
const button = document.getElementById("hide")
.addEventListener("click" , function (event) {
    div.style.display = "none";
});

// arrow function 

  const hello = (a,b)=>{
  return a + b;
};
console.log(hello(4,6));

const usernam = "Ramzan";
const oge = 23;
console.log(` my name ${usernam}  ${oge} years old`);

const greet = function () {
    console.log("qwerty");
};
greet();

function forEach(value , index , array){
    console.log(value, index ,array);
    const multiple = value*2;
    return multiple;
};
console.log(Array.forEach(forEach));

function mapped(value , index, array) {
    console.log(value , index , array);
    const multiple =  value*4;
    return multiple;
}
console.log(Array.map(mapped));

function filter(value ,index,array ) {
    console.log(value, index, array);
    return even = value % 2 === 0;
}
console.log(Array.filter(filter));

function filter(value ,index,array ) {
    console.log(value, index, array);
    return odd = value % 2 !== 0;
}
console.log( "odd" , Array.filter(filter));

function hof() {
          console.log("Ramzan");  
        }
function callback(callback){
    callback();
}
hof(callback);
// callback(hof);
// callback(
//     function hof() {
//       console.log("Ramzan");  
//     });

function add(a ,b , callme){
    const sum = a*b;
    callme(sum);
}
add(10,20,
    function add(sum){
        console.log(sum)
    }
)

function loger(a,b,c , callback){
    console.log("sum====>" , a+b+c);
    callback();
};
loger(
    12,8,10,
    function log(){
        console.log("asdfghjkl");
    }
)
const something = ()=>{
    console.log("wertyuiop[");
}
const sum = (a, b)=> a+b;
console.log(sum(12,8));

(()=>{
console.log("qwertyuiopqwertyu");
})();

(()=>{
    console.log("Hy Evreryone");
})();

function call(name){ 
    console.log("asdfghjkl");
};
function hy(name){  
     console.log(name);
};
hy( "Ramzan ",call);

function fact1(num){
    let fact = 1;
    for (let i = num; i > 0; i--) {     
     fact = fact*i;   
    }
    return fact ;
};
console.log(fact1(5));

const fact2 = (array , func)=>{
    let fact1 = 1;
    array.forEach((value)=>{
      fact1 *= value;
    func(fact1);
    }) ;
};
const resultfact = (fact1)=>{
    console.log(fact1);
};
const array = [1,2,3,4,5,6,7,8,9];
fact2(array , resultfact);

function fact3(array){
    let fact2 = 1;
    array.forEach((value)=>{
     fact2 *=value;
    })
    console.log(fact2);

    return fact2;
};
fact3(array);

console.log([...new Set(Array)]);
console.log(array.reverse());
console.log(Math.max(...array));
console.log(Math.min(...array));
for (let i = 0; i <= 10; i++) {
   if(i%2!==0){
    console.log(i);
   }   
};

const arr = [1,2,3,4,5];
const arrnum = arr[arr.length-4];
console.log(arrnum);
delete arr[2];
arr[2] = "Ramzan";
console.log(arr);

 const [w,y,z ,...rest] = arr;
 console.log(w,y,z , rest);
 const arra = [...arr]; 
 console.log(arra);
const newArray = [...arr,...Array];
// const newArray = arr.concat(arra);

const newObject = {...obj};

const newPromise = new Promise((resolve,reject)=>{
    reject("I am sorry");
    resolve("It's okay");
}).then((messege)=>{
    console.log(messege);
})
.catch((error)=>{
    console.log(error);
});

// window.fetch("link").then((response=>{
//     response.json();
// })).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// });

//  const settime = window.setTimeout(()=>{
//     console.log("set time out");
// }, (2000));
// clearTimeout(settime);

//  async function anything() {
//   try { const response = await fetch ("");
//   const data =  await response.json();
//   console.log(data) 
// }
// catch{
// console.log("qwertyuiop");
// }
// };
// anything();

// try {
//     console.log(y);
// }
// catch{
//     console.log("errror....");

// }
// finally{
//     console.log("finally .....")
// }
 
//  Array methods reduce splice or slice
 const Array1 = [1,2,3,4,5];
 
 const Array1slice1 = Array1.slice(1,3);
 const Arrayslice2 = Array1.slice(2,5);

  Array1.splice(1,0,"Ramzan");
  console.log(Array1);  
  Array1.splice(4,1,"Ali");
  console.log(Array1);

  
  Array1.reduce((acc , current , index)=>{
   console.log(acc,current,index);

  } , 1);

 const sumacc =  Array1.reduce((acc , current , index)=>{
//    debugger;
   return acc+current;
  });

  const  date = new Date();
//   date.setDate(date.getDate()+1);

const side1 = 5;
const side2 = 6;
const side3 = 7;

const s = (side1+side2+side3)/2;
const area =Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area); 

function leapYear(year){
    return (year % 100 ===0)? (year % 400 ===0) : (year % 4===0);
}
console.log(leapYear(2018));


// yaha per year (year ko) 0 (bc ko )or 1 ad ko represent karta hai jo kay js kay ander aik function hain in main sa kisi aik ka use compalsory hai 
   
 for (let year = 2014; year <= 2050; year++) {
    const date = new Date(year , 0 ,1);
    if (date.getDay()===0){
        console.log(`its day sunday a 1st january ${year}`);
    }
    console.log("its day is not a 1st janury sunday")
 }

 var num = Math.ceil(Math.random() * 10);
//  var gnum = prompt("guess the number btween 1 to 10");
//  if (gnum===num){
//     console.log("num is matched");
//  }
//  else{
//     console.log("g num is not matched the num");
//  };
const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");
const multipleButton = document.querySelector(".multipleButton");
const devidedButton = document.querySelector(".dividedButton");
const result = document.querySelector(".result");

multipleButton.addEventListener("click" , function (event){
    const num1 = firstInput.value;
    const num2 = secondInput.value;
    const muliples = num1*num2;
    console.log(muliples);
     result.innerHTML = muliples;   
});

devidedButton.addEventListener("click" , function (event){
    const num1 = firstInput.value;
    const num2 = secondInput.value;
    const devided = num1/num2;
    console.log(devided);
     result.innerHTML = devided;   
});

    const cTem = 60;
    const CtoF = cTem *9/5+32;
    const messege =`${cTem}C is ${CtoF}F`;
    console.log(messege);

function ftoC(celsuis){
    const fTem = celsuis;
    const ftoC = (fTem-32)*5/9;
    const messege =fTem+'f is'+ ftoC +'C';
    console.log(messege);
};
ftoC(45);
// alert(document.URL);
console.log(document.URL);

var UserName = "qwerty";

function difference(a){
    if (a<=13){
        return 13-a;
    }
    else{
        return (a-13)*2;
    }
}
console.log(difference(45));
console.log(difference(8));

function Sum(x,y){
    if (x==y){
        return (x+y)*3;
    }
    else{
        return x+y;
    }
}
console.log(Sum(3,3));
console.log(Sum(3,2));
function divide(A){
    if (A>19){
        return (A-19)*3;
    }
    else{
        return 19-A;
    }
};
console.log(divide(19));
console.log(divide(49));

function test50(x,y){
    return (x==50 || y==50) || (x+y ==50);
}
console.log(test50(30 , 20));

function check20(x){
    if ((100-x)<=20 || (400-x)<=20){
        return true;
    }
    else{
        return false;
    }
}
console.log(check20(110));
console.log(check20(40));
console.log(check20(310));

function positiveNegative(x,y){
    if ((x<0 && y>0) || (x>0 && y<0)) {
        console.log("so one num is negative and other is positive");
    } 
    else{
        console.log("so one num is not negative and other is not positive");

    }
}
positiveNegative(2,3);
positiveNegative(2,-3);
positiveNegative(-2,3);
 
function check(string){
    if (string==null || string==undefined ){
        return string;
    }
    else{
        return "Py"+string;
    }
}
console.log(check("Python"));
console.log(check("thon"));

function addCharacters(str){
    // if (str.length ==1) {
    if (str.length >=3) {
    let character = str.slice(0,6);
    return character+str+character;
}
else{
return false;
} 
};
console.log(addCharacters("phython"));

function multipkle(x,y) {
 if (x%3==0 || y%7==0){
    return true;
 }    
 else{
    return false;
 }
}
console.log(multipkle(3,7));

function string(str){
    let string = str.slice(0,4);
    if (string.length <4 || string == "java"){
      return true;   
    }
    else{
    return false;
}}; 
console.log(string("javascript"));
console.log(string("script"));

function range(x,y){
    if (x >=50 && x<=99 || y >= 50 && y <= 99 || z>=50 && z<=99){
        return true;
    }
    else{
        return false;
    }
}
console.log(range(5,67,99));

function gratest(x,y,z){
     let maxValue = 0;
    if (x>y){
      maxValue = x;
    }
    else{
     maxValue = y;
    }
    if (z>maxValue) {
        maxValue = z;
    }
    return maxValue;
   
}
console.log(gratest(34,67,90)); 
  
function ranges(x,y){
    if ((x>=40 && x<=60 && y>=40 && y<=60) ||( y>=70 && y<=100 && x>=60 && x<=100  ) ) {
        return true;
    }
    else{
    return false
}};
console.log(ranges(34,78));

function range40OR60(x,y){
    if (((x>=40) && (x<=60)) && ((y>=40) && (y<=60))){
        return true;
    }
    else{
        return false;
    }
}
console.log(range40OR60(34,60));

function check(string){
    if (string.length>=2 && string.length <=4) {
        return string;
    }
    else{
        return false;
    }
}
console.log(check("wert"));

function sameNumber(x,y,z){
  if ((x>0 && y>0 && z>0)&& (x%10 == y%10)&& (x%10 == z%10)&& (y%10 == z%10)) {
    return true;
  }  
  else{
    return false;
  }
}
console.log(sameNumber(20,30,40));
console.log(sameNumber(22,32,42));

function length(str){
    
    if (str.length<= 3){
        return str.toUpperCase();
    }
    else{
        const front = str.slice(0,3).toUpperCase();
        const back = str.slice(3,str.length).toLowerCase();
        return front+back;
    }
}
console.log(length("javascript"));
console.log(length("phy"));

function student(marks){
    if (marks>=90){
        return "gradeA";
    }else
    if(marks>=80){
      return "gradeB";
    }
    else{
         return "fail";
    }
}
console.log(student(80));
console.log(student(98));
console.log(student(60));

function integer(x,y){
    const sum = x+y;
    if (sum >=50 && sum <=80) {
        return 65;
    }
    else{
        return 80;
    }
}
console.log(integer(56,89));
console.log(integer(16,50));

function same(x,y){
    if (x==8 || y==8) {
        return true;
    }
    else if (x+y ==8 || x-y ==8){
        return true;
    }
    else{
        return false;
    }
}
console.log(same(4,4));
console.log(same(12,4));
console.log(same(8,8));
console.log(same(16,16));


function numbersCheck(x,y,z){
    if (x==y && y==z && x==z){
        return 30;
    }
    else
    if (x==y || y==z || x==z) {
        return 40;
    }
    else{
        return 20; 
    }
}
console.log(numbersCheck(20,20,20));
console.log(numbersCheck(20,0));
console.log(numbersCheck(30,30 , 40));

function strictMode(x,y,z){
    if (y>x && z>y){
        return "strictMode" ;
    }
    else if (z>y){
        return "softMode" ;
    }
    else{
        return "noMode";
    }
}
console.log(strictMode(10,20,30));
console.log(strictMode(20,20,30));
console.log(strictMode(0,10,8));

function checked(x,y,z){
    return (
        ((x>=20) && (y < x && z <x))||
         ((y>=20) && (x < y && z < y))||
         ((z>=20) && (x < z && y < z))
)
}
console.log(checked(24,4,5));

function myprogram(str){
    const first = str.slice(0,1).toUpperCase();
    const other = str.slice(1,str.length).toLowerCase();
    return first + other;
}
console.log(myprogram("poiuytrewq"));
console.log(myprogram("zxcvbnm,./"));

const uniqe = arr=>(arr.filter(i=>(arr.indexOf(i)===arr.lastIndexOf(i))));
console.log(uniqe([1,2,3,3,6,7,9,8,6,4,3,2,2,]));

function captilizefirst(str){
 const first = str.slice(0,1).toUpperCase();
 const others = str.slice(1,str.length).toLowerCase();
 return first+others;    
}
console.log(captilizefirst("ramzan"));

const girls = ["shazia" , "saba" , "salia"];
const boys = ["ramzan" , "saba" , "salia"];
console.log(girls.concat(boys));

const Arrayremovevalues = [1,2,3,4,5,6,7,8,9,0,0,9,8,7,6,5,4,3,2,1];
let rray = [];
Arrayremovevalues.forEach((Arrayremovevalues)=>{
    if(!rray.includes(Arrayremovevalues)){
     rray.push(Arrayremovevalues);
    }
})
console.log(rray);

const randomNumbers = [5, 12, 23, 1, 30, 7, 18, 0, 15, 29, 2, 20, 23, 7, 7, 7, 18, 12, 12, 5];
let array1 = [];
   randomNumbers.forEach ((randomNumbers)=> {
      if (!array1.includes(randomNumbers)){
        array1.push(randomNumbers);
      }    
});
   console.log(array1);

const sum1= [1,1,1].reduce((a,b)=>{
  return  a+b;
});

 
 
 











