// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.querySelector('#addForm');
const table = document.querySelector('#employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
const empCount = document.querySelector('#empCount');
empCount.value = count;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.querySelector('#id').value.trim();
    const name = document.querySelector('#name').value.trim();
    const extension = document.querySelector('#extension').value.trim();
    const email = document.querySelector('#email').value.trim();
    const department = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    // (insertRow() works on table; header row is index 0, so this adds after it)
    const row = table.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const cellID = row.insertCell(0);
    const cellName = row.insertCell(1);
    const cellExt = row.insertCell(2);
    const cellEmail = row.insertCell(3);
    const cellDept = row.insertCell(4);
    const cellDelete = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'btn btn-danger btn-sm';
    delBtn.textContent = 'Delete';
    cellDelete.appendChild(delBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.value = count;
});

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    // Only act if a delete button was clicked
    if (e.target.tagName !== 'BUTTON') return;
    if (e.target.textContent.trim().toLowerCase() !== 'delete') return;

    // Confirm deletion to user
    const ok = confirm('Are you sure you want to delete this employee?');
    if (!ok) return;

    // Use .deleteRow() with the rowIndex of the <tr> containing the button
    const tr = e.target.closest('tr');
    table.deleteRow(tr.rowIndex);

    // Decrement and update the employee count
    count = Math.max(0, count - 1);
    empCount.value = count;
});