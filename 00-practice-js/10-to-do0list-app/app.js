const addButton = document.querySelector("#add-task");
const classDiv = document.querySelector("#class-div");
const input = document.querySelector("#input");

addButton.addEventListener("click" , function () {
    if (input.value == "") {
        alert("Please Enter the task");  
    }
    else{
        let newElement = document.createElement("div");
        const deleteButton = document.createElement("button");
    
        newElement.innerHTML = input.value;
        deleteButton.innerText = "Delete";
        classDiv.appendChild(newElement);
        newElement.appendChild(deleteButton);
         input.value = "";
         deleteButton.addEventListener("click" , function (event) {
          classDiv.remove();
         });
        }
});
