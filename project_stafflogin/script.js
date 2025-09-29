function loginPageRequirement() {
    let userName= document.getElementById("username").value;
    let password= document.getElementById("password").value;

    if (userName ==="" && password === "") {
        console.log("You have to insert your details")

    } else if (userName === "admin" && password === "cafe123") {
        console.log("welcome to freshbites!")
        
    } else {
        alert("Invalid")
    }

}
