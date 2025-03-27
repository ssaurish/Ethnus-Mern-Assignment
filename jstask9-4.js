document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const usersTableBody = document.getElementById("usersTableBody");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const contact = document.getElementById("contact").value;
            const address = document.getElementById("address").value;

            // Create user object
            const user = { name, email, contact, address };

            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // Add new user to array
            users.push(user);

            // Save updated users array to localStorage
            localStorage.setItem("users", JSON.stringify(users));

            // Reset form
            form.reset();

            alert("User registered successfully!");
        });
    }

    if (usersTableBody) {
        displayUsers();
    }
});

function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const usersTableBody = document.getElementById("usersTableBody");

    usersTableBody.innerHTML = ""; // Clear previous data

    users.forEach(user => {
        const row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.address}</td>
                    </tr>`;
        usersTableBody.innerHTML += row;
    });
}
