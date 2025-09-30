function loginPageRequirement() {
    let userName = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (userName === "" && password === "") {
        console.log("You have to insert your details");
        alert("Please enter username and password!");
    } else if (userName === "admin" && password === "cafe123") {
        console.log("Welcome to FreshBite!");

        // Save login info in localStorage
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(password ,"cafe123")
        localStorage.setItem(userName, "admin");

        alert("Login successful!");
        // Redirect to staff dashboard (you can create dashboard.html)
        window.location.href = "../Staff_Dashboard/staff_dashboard.html";
    } else {
        alert("Invalid credentials, try again!");
    }
}
