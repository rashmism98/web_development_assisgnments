// CREATE AN ARRAY OF EMPLOYEES
let employees = [
  [10000001, "Sally Smith", 1234, "sally.smith@email.com", "Engineering"],
  [10000002, "John Doe", 2345, "john.doe@email.com", "Sales"],
  [10000003, "Maria Garcia", 3456, "maria.garcia@email.com", "Marketing"],
  [10000004, "David Kim", 4567, "david.kim@email.com", "QA"],
  [10000005, "Aisha Khan", 5678, "aisha.khan@email.com", "Administrative"],
];

const STORAGE_KEY = "employees";

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const storedEmployees = localStorage.getItem(STORAGE_KEY);
if (storedEmployees) {
  employees = JSON.parse(storedEmployees);
}

// GET DOM ELEMENTS
const form = document.querySelector("#addForm");
const empTable = document.querySelector("#empTable");
const empCount = document.querySelector("#empCount");

const idEl = document.querySelector("#id");
const nameEl = document.querySelector("#name");
const extEl = document.querySelector("#extension");
const emailEl = document.querySelector("#email");
const deptEl = document.querySelector("#department");

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = idEl.value.trim();
    const name = nameEl.value.trim();
    const extension = extEl.value.trim();
    const email = emailEl.value.trim();
    const department = deptEl.value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = [Number(id), name, Number(extension), email, department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee);

    // BUILD THE GRID
    buildGrid();

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    idEl.focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (!e.target.classList.contains("delete-btn")) return;

    const ok = confirm("Are you sure you want to delete this employee?");
    if (!ok) return;

    // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    const rowIndex = e.target.parentNode.parentNode.rowIndex; // includes thead row

    // REMOVE EMPLOYEE FROM ARRAY
    // rowIndex includes header row, so subtract 1 to match employees array index
    employees.splice(rowIndex - 1, 1);

    // BUILD THE GRID
    buildGrid();
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    const oldTbody = empTable.querySelector("tbody");
    if (oldTbody) oldTbody.remove();

    // REBUILD THE TBODY FROM SCRATCH
    const newTbody = document.createElement("tbody");

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (const emp of employees) {
      const [id, name, ext, email, dept] = emp;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${ext}</td>
        <td>${email}</td>
        <td>${dept}</td>
        <td><button type="button" class="btn btn-danger btn-sm delete-btn">Delete</button></td>
      `;

      // Use appendChild to append the constructed row
      newTbody.appendChild(tr);
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(newTbody);

    // UPDATE EMPLOYEE COUNT
    empCount.value = employees.length;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}