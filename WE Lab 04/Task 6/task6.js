let signUpBtn = document.querySelector("#signUpBtn");
let infoDiv = document.querySelector("#infoDiv");

signUpBtn.addEventListener('click', () => {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let dateOfBirth = document.querySelector("#birthDate").valueAsDate;
    let password = document.querySelector("#password").value;

    infoDiv.innerHTML = `
        <h3>Your info:</h3>
        <p><b>Name: </b>${name}</p>
        <p><b>Age: </b>${age}</p>
        <p><b>Date of Birth: </b>${dateOfBirth.toDateString()}</p>
        <p><b>Password: </b>${password}</p>
    `;
});