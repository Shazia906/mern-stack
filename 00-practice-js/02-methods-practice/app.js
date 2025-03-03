"use strict";

// Methods

const arr = ["Asam","Ramzan","Sakeel","Sajid","Adnan","Abdulrehman","Tufail"]; 
console.log("array==>",arr);

// menuallly methods

// pop with easy method

// function popelement1(arr){
//     arr.length = arr.length-1;
//     console.log("popelment",arr);
// }
// popelement(arr);
// console.log("popelement" ,arr);

// console.log("popelment")
// 01-push
// arr[arr.length-1] = 10000; 
// console.log("pushelement" , arr);

// 02-pop

// function popelement(){
//     const Array = [];
//     for (let i = 0; i < arr.length-1; i++) {
//      console.log("popelement" , i ,arr[i]); 
//      Array[i] = arr[i+1]; 
//      }
//      return Array;
// }

// console.log("your pop element",popelement());

// 03-shift

// function shiftelement(){
//     delete arr[0];
//     const Array = []; 
//     for (let i = 1; i < arr.length; i++) {
//        // if(arr[i]===undefined) continue;
//     console.log("shiftelement" , i ,arr[i]);
//     Array[i-1] = arr[i]; 
//     // console.log("pop====" , Array);   
//     }
//     return Array;
//     }   
//     console.log("shift====", shiftelement())

// 04-unshift
// arr[0] = 200000;
// console.log("unshiftedelement" , arr);

// tasks with easy methods

// 01-push

// arr[arr.length]="janab";
// console.log("pushelement",arr);

// pop Element

// arr.length =arr.length-1;
// console.log("popelement" ,arr);

// shifted Element
//  const shiftarray = function(element){
//   delete arr[0];
//   let Array = [];
//       for (let i = 0; i < arr.length-1; i++){
//         // console.log(arr) ;
//       Array[i] = arr[i+1];
//       } 
//       return Array;
//   }

//   console.log("shifted",shiftarray());

 
// unshifted Element

// const unshiftarray = function(element){
//   const newarray = [];
//       for (let i = 0; i < arr.length+1; i++) {
//       if (i===0){
//           console.log("unshifted" , i , element );
//           newarray[i] = element;
//           continue;
//       }
//       newarray[i] = arr[i-1];
//       }
//       return newarray;
//   }


//   console.log("unshifted",unshiftarray("new value"));

// function popelement(callback){
//     callback();
// }

// array.length = array.length-1;
// console.log("pop" ,array);

// // array.length = array.length+1;
// array[array.length] = "janab";
// console.log("push",array)

// function shifted(){
//     delete array[0];
//      let newarray = []; 
//     for (let i = 0; i < array.length-1; i++) {
//         newarray[i] = array[i+1];
//     } 
//     console.log(newarray)
// }
// shifted();

// function unshifted(element){
//     let newarray = [];
//     for (let i = 0; i < array.length+1; i++) {
//       if (i===0){
//        newarray[i] = element;
//        continue; 
//       } 
//        newarray[i] = array[i-1];
   
//     }
//     return newarray;
    
// }
// console.log(unshifted("sakeel"));

// function shifted menually=====>
    function popelement(callback){
        callback();
    }
    
function hof1(){
    arr.length =arr.length-1;
console.log("popelement" ,arr);
}

// hof1(popelement);
popelement(hof1);


function pushelement(callback){
    callback();
}

function hof2(){
arr[arr.length]="janab";
console.log("pushelement",arr);
}

hof2(pushelement);

function shiftedelement(callback){
    callback();
}

 const hof3 = function(element){
  delete arr[0];
  let Array = [];
      for (let i = 0; i < arr.length-1; i++){
      Array[i] = arr[i+1];
      } 
      return Array;   
  }

console.log("shiftedelement" ,hof3(shiftedelement));

function unshifted(callback){
    callback();
}

const hof4 = function(element){
  const newarray = [];
      for (let i = 0; i < arr.length+1; i++) {
      if (i===0){
          newarray[i] = element;
          continue;
      }
      newarray[i] = arr[i-1];
      }
      return newarray;
  }

   console.log("unshiftedelement" ,hof4( "newvalue" ,unshifted));
 
const array = [1,2,3,4,5,6];