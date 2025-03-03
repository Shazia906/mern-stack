const form = document.querySelector("#myform");
console.log(form);

form.addEventListener("submit" ,function (event) {
    event.preventDefault();
    // console.dir(event.target.Username.value);
    // console.dir(event.target.email.value);
    // console.dir(event.target.password.value);
    // console.dir(event.target.lastname.value);
    // console.dir(event.target.contact.value);
    // console.dir(event.target.conformpassword.value);
    // console.dir(event.target.gender.value);

    const Username = event.target.Username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const lastname =  event.target.lastname.value;
    const contact = event.target.contact.value;
    const conformpassword = event.target.conformpassword.value;
    const gender = event.target.gender.value;  
    
    // console.dir([Username ,email  ,password , lastname , contact , conformpassword ,gender]);
    console.table([Username ,email  ,password , lastname , contact , conformpassword ,gender]);

  if (Username==="") {
    alert("Username is required");
  };
  if (email==="") {
    alert("Lastname is required");
  };
  if (password==="") {
    alert("Email is required");
  };
  if (lastname==="") {
    alert("Contact is required");
  };
  if (contact==="") {
    alert("Password is required");
  };
  if (conformpassword !== password){
    alert("Conformpassword is not match with password");
  };
  if (gender==="") {
    alert("Gender is required");
  };
    
 
})