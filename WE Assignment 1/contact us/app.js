function recordResponse(){
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    if(name == "" || email == "" || message == ""){
        alert("Fill all the necessary fields.");
    }
    else{
        alert("Response has been recorded.")
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
    }
}