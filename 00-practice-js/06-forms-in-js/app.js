
// // FormData
// const form = document.createElement('form');
//     // (css)
// form.id = 'registrationForm';
// form.style.maxWidth = '400px';
// form.style.margin = 'auto';
// form.style.padding = '20px';
// form.style.border = '1px solid #ddd';
// form.style.borderRadius = '8px';
// form.style.backgroundColor = "skyblue"; 

// // Function to create input fields (css)
// function createInput(text, id, type = 'text', required = true) {
//   const label = document.createElement('label');
//   label.textContent = text;

//   const input = document.createElement('input');
//   input.type = type;
//   input.id = id;
//   input.name = id;
//   input.required = required;
//   input.style.width = '100%';
//   input.style.marginBottom = '10px';

//   form.appendChild(label);
//   form.appendChild(input);
// }


// // First Name
// createInput('First Name:', 'firstName');

// // Last Name
// createInput('Last Name:', 'lastName');

// // Email
// createInput('Email:', 'email');

// // Contact (with validation for 10-digit numbers)
// createInput('Contact:', 'contact');

// // Date of Birth
// createInput('Date of Birth:', 'dob', 'date');

// // Gender (Radio Buttons)
// const genderLabel = document.createElement('label');
// genderLabel.textContent = 'Gender:';
// form.appendChild(genderLabel);

// const genders = ['Male', 'Female'];
// genders.forEach(gender => {
//   const genderDiv = document.createElement('div');
  
//   const genderInput = document.createElement('input');
//   genderInput.type = 'radio';

//   genderInput.name = 'gender';
 
  
//   const genderLabel = document.createElement('label');
 
//   genderLabel.textContent = gender;

//   genderDiv.appendChild(genderInput);
//   genderDiv.appendChild(genderLabel);
//   form.appendChild(genderDiv);
// });


// // Hobbies (Checkboxes)
// const hobbiesLabel = document.createElement('label');
// hobbiesLabel.textContent = 'Hobbies:';
// form.appendChild(hobbiesLabel);

// const hobbies = ['Reading', 'Sports', 'Traveling', 'Music'];


// hobbies.forEach(hobby => {
//   const hobbyDiv = document.createElement('div');

//   const hobbyInput = document.createElement('input');
//   hobbyInput.type = 'checkbox';
  
//   const hobbyLabel = document.createElement('label');

//   hobbyLabel.textContent = hobby;

//   hobbyDiv.appendChild(hobbyInput);
//   hobbyDiv.appendChild(hobbyLabel);
//   form.appendChild(hobbyDiv);
// });

// // Message
// const messageLabel = document.createElement('label');
// messageLabel.textContent = 'Message:';
// form.appendChild(messageLabel);
// const messageTextarea = document.createElement('textarea');

// // (css)

// messageTextarea.id = 'message';
// messageTextarea.name = 'message';
// messageTextarea.rows = 4;
// messageTextarea.required = true;
// messageTextarea.style.width = '100%';
// messageTextarea.style.marginBottom = '10px';
// form.appendChild(messageTextarea);
// document.body.appendChild(form);

const root =document.getElementById("root");
 const section = document.createElement("section");
 const form = document.createElement("form");
 form.id ="form";
  
  //  const nameInputGroup = wrapMultipleElements([ createInputLabel( "Enter your name" , "userName" , true)  , createInputElement("text" ,"Enter your name" , "userName" , true)]);
 const nameInput = createInputElement("text" , "Enter your name" , "userName" , "username");
 const nameInputlabel  = createInputLabel("Enter your name" ,"userName");
 const  nameInputGroup = wrapMultipleElements([nameInputlabel ,nameInput] , "input-group");

 const ageInput = createInputElement("number" , "Enter your age" , "age" ,  "age" ,true);
 const ageInputLabel  = createInputLabel("Enter your name" ,"age");
 const  ageInputGroup = wrapMultipleElements([ageInputLabel ,ageInput] , "input-group");

 const emailInput = createInputElement("email" , "Enter your email" , "email" , "email" );
 const emailInputLabel  = createInputLabel("Enter your email" ,"email");
 const  emailInputGroup = wrapMultipleElements([emailInputLabel ,emailInput] ,"input-group");

 const contactInput = createInputElement("number" , "Enter your number", "number" , "contact" , true);
 const contactInputLabel  = createInputLabel("Enter your number" ,"number");
 const  contactInputGroup = wrapMultipleElements([contactInputLabel ,contactInput] ,"input-group");

 const selectGenderLabel =  createInputLabel("select your gender" , "" );

 const maleRadioInput = createInputElement("radio" , "","male" , "gender" , "male" );
 const maleInputLabel  = createInputLabel("Male" ,"male");
 const  maleInputGroup = wrapMultipleElements([maleInputLabel ,maleRadioInput]);

 const femaleRadioInput = createInputElement("radio" , "","female" , "gender" ,"female" );
 const femaleInputLabel  = createInputLabel("Female" ,"female");
 const  femaleInputGroup = wrapMultipleElements([femaleInputLabel ,femaleRadioInput] , "");
 const genderRadioWrapper = wrapMultipleElements([selectGenderLabel ,maleInputGroup ,femaleInputGroup]
  , "input-group"
 );

 const selectHobbiesLabel =  createInputLabel("select your hobbies" , "" );


 const codingRadioInput = createInputElement("checkbox" , "","conding" , "hobbies" );
 const condingInputLabel  = createInputLabel("Coding" ,"coding");
 const  codingInputGroup = wrapMultipleElements([ 
  condingInputLabel,codingRadioInput
 ] , "");
 const codingRadioWrapper = wrapMultipleElements([selectHobbiesLabel ,
  codingInputGroup]
  , "input-group"
 );
 const travelingRadioInput = createInputElement("checkbox" , "","traviling" , "hobbies" );
 const travilingInputLabel  = createInputLabel("Traviling" ,"traviling");
 const  travilingInputGroup = wrapMultipleElements([ 
  travilingInputLabel,
  travelingRadioInput
 ] , "");
 const travilingRadioWrapper = wrapMultipleElements([
  travilingInputGroup]
  , "input-group"
 );

 const sumbitbtn = document.createElement("button");
 sumbitbtn.innerText = "submit";
 
 form.appendChild(nameInputGroup);
 form.appendChild(ageInputGroup);
 form.appendChild(emailInputGroup);
 form.appendChild(contactInputGroup);
 form.appendChild(genderRadioWrapper);
//  form.appendChild(codingRadioWrapper);
//  form.appendChild(travilingRadioWrapper);
 form.appendChild(sumbitbtn);

 section.appendChild(form);
 root.appendChild(section);

 form.addEventListener("submit" , function (event) {
    event.preventDefault();
    // console.dir(event.target[0].value);
    // console.dir(event.target[1].value);
    // console.dir(event.target[2].value);
    // console.dir(event.target[3].value);
    // console.dir(event.target["gender"].value);
  
    // const gender = Array.from(event.target["gender"].value).filter(function (elements ,value) {
    //   const condition = elements.value && elements.checked;
    //   return condition;
    // })[0].value;


   //  const name = document.getElementById("userName").value;
   //  const age = document.getElementById("age").value;
   //  const email = document.getElementById("email").value;
   //  const gender = document.querySelector('input[name= "gender"]:checked').value;
   //  console.log([name,age,email,gender]); 
   //  console.log(name,age,email,gender); 
   //  console.dir([name,age,email,gender]); 
   // console.table([name,age,email,gender]);

   //  const age = document.getElementById("age").value;
   //  const email = document.getElementById("email").value;
   //  const gender = document.querySelector('input[name= "gender"]:checked').value;
   
 const userName = event.target.username.value;
 const userAge = event.target.age.value;
 const usercontact = event.target.contact.value;
 const useremail = event.target.email.value;
 const gender = event.target.gender.value;
//  console.log(userName,userAge,usercontact,useremail ,gender);
//  console.dir([userName,userAge,usercontact,useremail ,gender]);
 console.table([Name,age,email,contact,gender]);
 });

 
 function createInputElement(type , placeholder , id , name, value = ""){
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.placeholder = placeholder;
  inputElement.id = id;
  inputElement.name = name;
  inputElement.value = value;
  return inputElement ;
 };

 function createInputLabel(labelText , labelFor){
  const labelField = document.createElement("label");
  labelField.setAttribute("for" ,labelFor);
  labelField.innerText = labelText;
  return labelField;
 };

 function wrapMultipleElements(elements , className ){
  const wrapper = document.createElement("div");
 className && wrapper.classList.add(className);
 elements.forEach(function(element){
  wrapper.appendChild(element);
 });
 return wrapper;
 }; 
  
 console.log(document.forms.form);
 console.log(document.links[0].href);
 console.log(document.images[0].src);
//  console.log(document.anchors[0].href);
 console.log(document.nodeName);

 console.log(window.localStorage);
const button = document.querySelector("#button");
button.addEventListener("click" , function (event){
  localStorage.setItem("username" ,"Raheel");
  localStorage.setItem("age" ,"40");
  console.log( localStorage.getItem("age"));
  
});

//  localStorage.removeItem("age");
 localStorage.clear();

// button.addEventListener( "click" , function (event) {
//  sessionStorage.setItem("username" ,"Rehan");
//  sessionStorage.setItem("age" ,"40");
//  console.log( sessionStorage.getItem("age")); 
// });

//  sessionStorage.removeItem("age");/
//  sessionStorage.clear();

const personal = `name = learning to js ; expire =fri nov 20 2024 16:55 GMT + 0500 ; path = /03-js/`;
document .cookie = personal;
document.cookie = "name=Raheel";
// document.cookie = "name=Ramzan";
// console.log(window.document.cookie.getItem("name"));
console.log(window.document.cookie);

const  date = new Date();
date.setTime(date.getTime()+1);
console.log(date);








// const studentobj = {
//     username: "Ali",
//     userage: "13",
//     userdob: "01-12-2004",
//     usergender: "gender",
//   }

//   console.log(studentobj);
//   console.log(JSON.stringify(studentobj));
//   console.log(JSON.parse(JSON.stringify(studentobj)));




