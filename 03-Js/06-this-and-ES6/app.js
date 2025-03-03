
// This keyword 

console.log("globaly this" , this);

function anyThing(){
    console.log("Function this" ,this);
    
}
;
anyThing();

const detailobj = {
    userneme : "Sakeel",
    age : 28 ,
anyThing(){
        console.log("Function this" ,this);   
    },
};
detailobj.anyThing();

// ES6 start here
// simple arrow function in es6

const somethinge = ()=>{
   return  10+48;
};
console.log("Arrow function" , somethinge());

const something1 = ()=> 10 +89;
console.log("Arrow function" , something1());

const something2 = () => ({
    userneme : "sakeel" , 
    age : 23 , 
});
console.log(something2());

const something = () => {
    return{
    userneme : "sakeel" , 
     age : 23 ,} 
};
console.log(something());
 
const something3 = ()=>{
    console.log("This keyword in arrow function" , this);
};
something3();


// default parameters

function sum2(num1  = 45, num2  = 78) {
  const  sum = num1+num2 ;
  return sum;
};

console.log("sum ===" , sum2());
 
// exponent of number with arrow function

const num1 = num => num**5;
console.log("function for single value" , num1(45));

const num2 = ( number  , exponent) => number**exponent;
console.log("multiple numbers" , num2(3,6));

// arguments in es6

 function something6(num) {   
    console.log(arguments);
    console.log(arguments.length);
    console.log(typeof arguments);
    console.log(Array.isArray(arguments));
    console.log(Array.isArray({number:1}));
    console.log([]); 
    return num ** 8;
 };
console.log( something6(2, 56 , 79 , 89 , 67,78,89,46));

//  Array destrucring

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 

const value1 = numbers[0];
const value2 =  numbers[1];
console.log(value1 , value2); 

// const newSpread = [a,b ,...numbers];
// console.log( a, b ,numbers);

// const [e,f,g , ...restArray] = numbers;
// console.log(e,f,g , restArray);
 
const [a,b,c,, , ,  , d ] = numbers;
console.log(a,b,c,d);
 
const [first , second , fifth , , , fourth] = numbers;
console.log([first , second , fifth , , , fourth] );

//  object destrucring 

const details = {
     username : "Ramzan" ,
     gender : "male" ,
     age : 23,
    //  user :()=>{
    //     return ` ${this.username} is ${this.age}  years old and gender ${this.gender} . `
    //  },
  user : function(){
    return `${this.username} is ${this.age} years old .`
    },   
};
// const username = details.username;
// const age = details.age;
// const gender = details.gender;
console.log(details.username); 
console.log(details.user());

const {userName } = details;
console.log(userName);

// rest and spread operators 

const{ username , age , ...restObject} = details;
console.log(username , age,restObject);

const boys = ["Ali" , "Ramzan" , "Asam"];
const girls = ["Pretty" , "assss"];
const Childerns = girls.concat(boys);
 
// restArray
console.log(Childerns);
console.log( a , b ,...boys);

// spread
const newArray = [...girls];
const newArrays = [...girls , ...boys];
console.log(newArrays);

// rest 
 function rest(First , Second ,...rest) {
    console.log(arguments);
    console.log(First , Second , rest);
 };

 rest(10,22);
 rest(10,22 ,45);
 rest(10,22, 45);
 rest(10,22 , 45);
 rest(10,22 , 45, 67 , 78);
 rest(10,22, 33, 45, 67);
 
//  const obj = {
//     user:{
//          username : "Shakeel",
//          age : 34,
//       address :{
//             country : "pakistan",
//        city :{
//                   name : "burewala" ,
//                     zipCode1 :61010,
//                     district : "vahari" ,
//             },
//         } ,
//     },
//  };

//  const  {
//       user:{
//     username : herName ,
//     age : herAge,
//     address:{ 
//         city:{zipCode1} ,   
//        } ,},
//        } = obj;

//  console.log(herName , herAge , zipCode1);

// Aliasing

const userDetails = {
    username: "user",
    age: 30,
    email: "user@gmail.com",
    address: {
      country: "Pakistan",
      province: {
        name: "Punjab",
        city: {
          name: "Burewala",
          zipCode: 61010,
          district: "Vehari",
        },
      },
    },
  };
  
  const {
    username: hisName,
    age: hisAge,
    email,
    // address:myaddress 
    address:
    {
      province: {
        city: { zipCode},
      },
    },
  } = userDetails;
  
  // const { province } = myaddress;
  // const { city } = province;
  // const { zipCode } = city;
  
  console.log(hisName, hisAge, zipCode);
  
  const course = {
    mern_stack: {
      html: {
        modules: ["basics", "forms", "tables"],
      },
      css: {
        modules: ["basics", "flexbox", "grid"],
      },
      js: {
        modules: ["basics", "functions", "objects", "arrays", "events", "dom"],
      },
      react: {
        modules: ["basics", "components", "props", "state", "hooks"],
      },
    },
  };
  const {
    mern_stack: {
      css: { modules: cssModules },
      js,
      // react: { modules: reactModules },
    },
  } = course;
  console.log(cssModules, js);
  
  // Optional chaining
  
  const currentModule  = course.mern_stack.react?.modules
  console.log(currentModule);
    
const arrbitraryArray = undefined;
console.log(arrbitraryArray?.[2]);

// es6 modules
  import  { userdata , username as user , age as userAge , gmail as usergmail } from "./post.js";
console.log( userdata , user , userAge ,usergmail);
import defaultuser  from "./post.js";
console.log(defaultuser);
import * as everything from "./post.js";
console.log(everything); 

import * as somethinghere from "./post.js";
console.log(somethinghere);

console.log(somethinghere.userdata);
console.log(somethinghere.username);
console.log(somethinghere.default);

// default import
// debugger;

//  import defaultUser  from "./post.js";
// console.log(defaultUser);

const anotherUser = {
  username: "app user",
  email: "appuser@gmail.com",
  age: 30,
};
// debugger;

userdata.forEach((userdata) => {
  console.log(userdata);
});
console.log(userdata);

const his = "Zain";
console.log(his)
