
let records = JSON.parse(
  window.localStorage.getItem("records") ?? JSON.stringify([])
);

const ROOT = document.getElementById("table-root");
const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");

// THEAD
if (records.length > 0) {
  const head = Object.keys(records[0]);
  const tr = document.createElement("tr");
  head.forEach(function (element) {
    const th = document.createElement("th");
    const textNode = document.createTextNode(element);
    th.appendChild(textNode);
    tr.appendChild(th);
  });
  const deleteTh = document.createElement("th");
  deleteTh.textContent = "Actions";
  tr.appendChild(deleteTh);
  tHead.appendChild(tr);
}

// TBODY
records.forEach(function (element) {
  const tr = document.createElement("tr");
  Object.values(element).forEach(function (text) {
    const td = document.createElement("td");
    const textNode = document.createTextNode(text);
    td.appendChild(textNode);
    tr.appendChild(td);
  });

  const addBtn = document.createElement("td");
  const dltbutton = document.createElement("button");
  dltbutton.setAttribute("id", "delete");
  dltbutton.textContent = "Delete";

  addBtn.appendChild(dltbutton);
  dltbutton.addEventListener("click", function () {
    tr.remove();
    const filteredElements = records.filter(function (child) {
      return child.name !== element.name;
    });
    window.localStorage.setItem("records", JSON.stringify(filteredElements));
    // records = filteredElements;
    debugger;
  });

  tr.appendChild(addBtn);
  tBody.appendChild(tr);
});

table.appendChild(tHead);
table.appendChild(tBody);
ROOT.appendChild(table);