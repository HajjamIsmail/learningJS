// Array to store user objects
let users = [];

// Get form elements
const form = document.getElementById("user-form");
const errorsList = document.getElementById("errors");
const tableBody = document.querySelector("#user-table tbody");

// Regex for names (only letters)
const nameRegex = /^[A-Za-z]+$/;

// Handle form submission
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload
  errorsList.innerHTML = ""; // clear previous errors

  try {
    // Collect values
    const lastname = document.getElementById("lastname").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked");

    let errors = [];

    // Validation: required fields
    if (!lastname) errors.push("Last name is required.");
    if (!firstname) errors.push("First name is required.");
    if (!dob) errors.push("Date of birth is required.");
    if (!gender) errors.push("Gender is required.");

    // Regex validation for names
    if (lastname && !nameRegex.test(lastname)) {
      errors.push("Last name must contain only letters (A-Z).");
    }
    if (firstname && !nameRegex.test(firstname)) {
      errors.push("First name must contain only letters (A-Z).");
    }

    // Date validation
    if (dob) {
      const birthDate = new Date(dob);
      const today = new Date();
      if (birthDate > today) {
        errors.push("Date of birth cannot be in the future.");
      }
    }

    // If there are errors, display them and stop
    if (errors.length > 0) {
      errors.forEach(err => {
        let li = document.createElement("li");
        li.textContent = err;
        errorsList.appendChild(li);
      });
      return;
    }

    // If valid, create user object
    const user = {
      lastname: lastname,
      firstname: firstname,
      dob: dob,
      gender: gender.value
    };

    // Store in array
    users.push(user);

    // Update table
    displayUsers();

    // Reset form
    form.reset();

  } catch (e) {
    // Exception handling
    let li = document.createElement("li");
    li.textContent = "An error occurred: " + e.message;
    errorsList.appendChild(li);
  }
});

// Function to display users in the table
function displayUsers() {
  tableBody.innerHTML = "";
  users.forEach(u => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${u.lastname}</td>
      <td>${u.firstname}</td>
      <td>${u.dob}</td>
      <td>${u.gender}</td>
    `;
    tableBody.appendChild(row);
  });
}
