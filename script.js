const form = document.getElementById("registrationForm");
const displayDataDiv = document.getElementById("displayData");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;

    // Display the data in the div
    displayDataDiv.innerHTML = `
        <h3>Registered Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    // Clear the form fields after displaying data
    form.reset();
});
