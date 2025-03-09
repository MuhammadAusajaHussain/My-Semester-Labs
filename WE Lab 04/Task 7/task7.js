let signUpBtn = document.querySelector("#signUpBtn");
let notARobotChckBox = document.querySelector("#notARobot");
let resultDiv = document.querySelector("#resultDiv");

signUpBtn.addEventListener('click', () => {
    resultDiv.innerHTML = "";
    
    let name = document.querySelector("#name").value;
    let nameRegex = /^[A-Za-z\s]{0,}$/;

    let contact = document.querySelector("#contact").value;
    let contactRegex = /^\d{11}$/;

    let email = document.querySelector("#email").value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let password = document.querySelector("#password").value;

    let gender = (document.querySelector("#male").checked) ? "Male" : ( document.querySelector("#female").checked ? "Female" : "" );

    if( !nameRegex.test(name) ){
        alert("Name should have ONLY alphabets!");
    }
    else if( !contactRegex.test(contact) ){
        alert("Contact should have 11 digits!");
    }
    else if ( !emailRegex.test(email) ) {
        alert("Invalid email format!");
    }
    else if ( password == "" ) {
        alert("Enter password!");
    }
    else if (gender == ""){
        alert("Gender not selected!");
    }
    else if (!notARobotChckBox.checked){
        alert("You are a robot (checkbox not selected)!");
    }
    else{
        resultDiv.innerHTML = "<h3>Sign up successful!</h3>";
    }
});