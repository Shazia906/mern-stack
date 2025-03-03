"use strict";

// username = "Sakeel";
// console.log("Name======" , username);


// function contact(cont){
//     var contact = "0987654321234567";
//     console.log("contact us" , contact);
// }
// contact();

const logger = function(){
    let log = "Ali";
console.log("Name===" , log);    
}
logger();

const arr = [10,20,30,40,50,60,70,80,90];

// menually shift or unshift
   
// const shiftarray = function(array){
//     delete arr[0];
//     const newarray=[];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]===undefined) continue;
//     console.log( "shiftedarray", i ,arr[i]);
//      newarray[i-1] = arr[i];
//     // console.log(arr[i]);
//     }
//     return newarray;
//     // console.log( "shiftedarray",arr);
// }
// console.log(shiftarray(arr));

// mathod-2

// const shiftarray1 = function(){
// const newarray1 = [];
//     for (let i = 1; i < arr.length; i++) {
//     newarray1[i-1] = arr[i];
//     // console.log(arr[i]);
//     }
//     return newarray1;
// }
// console.log(shiftarray1());

// undefined array 

// function unshift(){
//      arr[0] = 10000;
//      console.log(arr); 
// }
// unshift();

// Array methods

// const array = [10,20,30,40,50,60,70,80,90];
// console.log("Array1",array);

// arr.pop();
// console.log("pop",arr);

// arr.push(1000);
// console.log("push",arr);

// arr.shift();
// console.log("shift",arr);

arr.unshift(200000);
console.log("unshift",arr);

// foreach

function forEach(value,index,arr){
    console.log(value , index , arr)
    // console.log("foreach=====",value,index,arr);
};

function unshifted(value ,index,arr){
    console.log("foreach=====",value,index,arr);
}
arr.forEach(unshifted);

// hof and Callback

function loger(callme){
callme()    
}

function log(log){
    console.log("call for me==" , "iam learning js");      
}

loger(log);

// function unshift(callback){
//  callback();   
// }
// function unshifted(){
//     console.log("callback===");
//      }
// unshift(unshifted);


// Element shifted in hof
function shifted(Allah){
    Allah();
    return Allah();
}
const shiftarray2 = function(){
    const newarray2 = [];
        for (let i = 1; i < arr.length; i++) {
        newarray2[i-1] = arr[i];
        // console.log(arr[i]);
        }
        return newarray2;
    }
    // const shiftedelement = ;

    console.log("shifted",shifted(shiftarray2));

    const username = "Sakeel";
    const detail = {
        username : "Asam",
        age :28,

      info : function hello(){
        return `${this.username} is ${this.age} years old `;
        },
      toString: function hello(){
        return `${this.username} is ${this.age} years old `;
        },
    }
     console.log(detail); 
     console.log(detail.toString()); 
     console.log( typeof detail.toString());
     
     console.log("Objects" , []);
     console.log("Objects" , {});
     console.log("Objects" , [].contructor, Object());
     console.log({}.constructor());
     console.log({}.constructor());
    

    // const unshiftarray = function(element){
    //     const newarray = [];
    //         for (let i = 0; i < arr.length+1; i++) {
    //         if (i===0){
    //             console.log("unshifted" , i , element );
    //             newarray[i] = element;
    //             continue;
    //         }
    //         newarray[i] = arr[i-1];
    //         }
    //         return newarray;
    //     }
      
    //     console.log("unshifted",unshiftarray("new value"));

function fact(num1){
    let fact = 1;
    for (let index = num1; index > 0; index--) {
     fact *=index;
    // fact = fact*index;
    //  console.log(index ,fact)
    }
    return fact;
}
console.log("factorial=====>" , fact(5));
// // fact(5);

// object methods

let student = {
    studentname :"Sakeel",
    fathername : "ahmad",
    age :17,
    gender : "male",
// user defined mehod
    getstudentdatail: function HY(){
        return `${this.studentname} , ${this.age} , ${this.fathername} , ${this.gender}`
        
    }
}
console.log("datails" ,  student,student.getstudentdatail());

// built in methods

console.log( "hasownproperty" ,student.hasOwnProperty(`age`));
console.log( "hasownproperty" ,student.hasOwnProperty());

console.log("value of" ,student.valueOf());

console.log("Enumberableproperty", student.propertyIsEnumerable());
console.log("Enumberableproperty", student.propertyIsEnumerable("studentname"));

// constructor methods

console.log("constructor methods" , Object.keys(student));

console.log("constructor methods" , Object.values("age"));

console.log("constructor methods" , Object.entries(student));

// for each

 let Array = [1,2,3,4,5,6,7,8,9,10] 
Array.forEach(function(value , index ,Array){
    console.log(value,index,Array)
});

// hof for each

Array.forEach(function(value){
    let fact1 = 1;
    fact1 *=Array;
    // console.log(value,index ,Array);
});

function hof(Array){
  console.log("fact=======>" ,fact());

return;  
}
Array.forEach(hof);

function factorial(array ,func){
    let fact1 = 1;
    array.forEach(function (value){
        fact1 *=value;
   func(fact1);
       // console.log("foreach=====",value,index,array);
});
};

function resultfact(fact1){
    console.log("Factorial:" , fact1);
}

let array =[1,2,3,4,5,6,7,8,9];
factorial(array , resultfact);


// function factorial( array,callforme){
//     let result = 1;
//     array.forEach(function(value){
//      result *=value;
        
//     });
//     callforme(result);
// }

// function hof(result){
//     console.log("result" , result);
// }
// factorial(array ,hof);

const arry1 =[1,2,3,4,5,6,7,8,9,10,11];

function hasan(value , index ,arry1 , multiple){
console.log("Array" , value , index , arry1);
// var multiple = value*3;
// return multiple;

}
 const foreacharray = arry1.forEach(hasan);
// console.log("mapped array" ,mappedarray);

const arry =[1,2,3,4,5,6,7,8,9,10,11];

function hasan(value , index ,arry , multiple){
console.log("Array" , value , index , arry);
var multiple = value*3;
return multiple;

}
 const mappedarray = arry.map(hasan);
console.log("mapped array" ,mappedarray);
//  hasan();
// console.log("mapped array" , arry.map(hasan));

 
 const rry =[1,2,3,4,5,6,7,8,9,10,11];

 function hasan(value , index ,rry , multiple){
 console.log("Array" , value , index , rry);
 var even =  value%2===0;
 return even;
 }

  const filteredarray = rry.filter(hasan);
 console.log("filtered array" ,filteredarray);

