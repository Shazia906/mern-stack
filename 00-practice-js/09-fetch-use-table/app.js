// const createtablebutton = document.querySelector("#create-table");
// const tableDiv = document.getElementById("div");
// createtablebutton.addEventListener("click" , ()=>{
//     fetch("https://jsonplaceholder.typicode.com/users").then((response)=>
//     response.json()).then((data)=> {
//      data.forEach(user => {
//         const row = document.createElement("tr");
//         row.innerText = `<td>${user.name}</td>`
//         table.appendChild(row);
//         tableDiv.appendChild(table); 
//      });
//     })
// });

// const createTableBtn = document.getElementById('create-table-btn'); 
// const tableContainer = document.getElementById('table-container');

// createTableBtn.addEventListener("click" , ()=>{
//   console.log("save");

//     fetch("https://jsonplaceholder.typicode.com/users").then((response)=>
//     response.json()).then((data)=> {
//         console.log(data);
//       // Table body mein data add karna
//       const tableBody = document.getElementById('table-body');
//       data.forEach(user => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//           <td>${("https://jsonplaceholder.typicode.com/users")}</td>
//           <td>${user.name}</td>
//           <td>${user.phone}</td>
//         `;
//         tableBody.appendChild(row);
//       });
//       // Table container ko display karna
//       tableContainer.style.display = 'block';
//     })
//     .catch(error => console.error('Error:', error));
    
//     });


document.getElementById('createTableBtn').addEventListener('click', function() {
  // Fetch data from an API
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) // Parse JSON data
      .then(data => {
          console.log(data);
          createTable(data); 
          // Call function to create table with the fetched data
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
});

// Function to create the table
        function createTable(data) {
            const tableContainer = document.getElementById('tableContainer');
  
        //     // Create the table element
            const table = document.createElement('table');

            // Create the table header
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const headers = ["Name", "Phone", "Website", "Street" , " CompanyName"]; 
            // Table headers
            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.textContent = headerText;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Create the table body
            const tbody = document.createElement('tbody');
            data.forEach(item => {
                const row = document.createElement('tr');
                const cells = [item.name, item.phone, item.website,
                  item.address.street, item.company.name , ]; // Data cells
                cells.forEach(cellText => {
                    const td = document.createElement('td');
                    td.textContent = cellText;
                    row.appendChild(td);
                });
                tbody.appendChild(row);
            });
            table.appendChild(tbody);

            // tableContainer.appendChild(table);

            // Clear any existing table and append the new one
            // tableContainer.innerHTML = '';
            tableContainer.appendChild(table);
        }