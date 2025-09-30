// Show current date
document.getElementById("date").innerText = new Date().toDateString();
// Logout function
function logout() {
    alert("Logging out...");
    // Redirect logic goes here
     window.location.href = "../project_stafflogin/login.html"
}
