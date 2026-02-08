// js/script.js  (<= 15 lines, arrow functions only)
window.addEventListener('load', () => {
  const $ = s => document.querySelector(s), f = $('#empForm');
  f.innerHTML = `<label for="id">8-Digit Employee ID</label><input id="id" type="text" class="form-control" required maxlength="8">
  <label for="name">Full Name</label><input id="name" type="text" class="form-control" required>
  <label for="ext">4-Digit Extension</label><input id="ext" type="text" class="form-control" required maxlength="4">
  <label for="email">Email</label><input id="email" type="email" class="form-control" required>
  <label for="department">Department</label><select id="department" class="form-select" required>
  <option>Administrative</option><option>Engineering</option><option>Executive</option><option>Marketing</option><option>Quality Assurance</option><option>Sales</option></select>
  <button id="submit" type="submit" class="btn btn-primary mt-3">Add Employee</button>`;
  f.addEventListener('submit', e => { e.preventDefault();
    const id=$('#id').value, name=$('#name').value, ext=$('#ext').value, email=$('#email').value, dept=$('#department').value.toLowerCase();
    document.writeln(`ID: ${id}<br>`); document.writeln(`Name: ${name}<br>`); document.writeln(`Extension: ${ext}<br>`); document.writeln(`Email: ${email}<br>`); document.writeln(`Department: ${dept}<br>`);
  });
});
