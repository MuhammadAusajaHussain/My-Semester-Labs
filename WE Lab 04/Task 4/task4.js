let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener('click',()=>{
    let num1 = Number (document.querySelector("#num1").value);
    let num2 = Number (document.querySelector("#num2").value);
    let operater = document.querySelector("#operation").value;
    let resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = "";
    
    let result = 0;

    if(operater == '+'){
        result = num1 + num2;
    }
    else if(operater == '-'){
        result = num1 - num2;
    }
    else if(operater == '*'){
        result = num1 * num2;
    }
    else if(operater == '/'){
        if(num2 == 0){
            result = "Undefined"
        }
        else{
            result = num1 / num2;
        }
    }

    resultDiv.innerHTML =  `<h2>Result = ${result}</h2>`;
});
