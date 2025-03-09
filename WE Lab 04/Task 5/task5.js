let resultDiv = document.querySelector("#resultDiv");
let checkBtn = document.querySelector("#checkBtn");

checkBtn.addEventListener('click', () => {
    let inputStr = document.querySelector("#inputStr").value;
    
    if( checkPalindrome(inputStr) ){
        resultDiv.innerHTML = `<h3>Result: ${inputStr} is a palindrome.</h3>`;
    }
    else{
        resultDiv.innerHTML = `<h3>Result: ${inputStr} is not a palindrome.</h3>`;
    }
});

function checkPalindrome(str){
    if(str.length % 2 == 0){
        str1 = str.substring(0,str.length/2);
        str2 = str.substring(str.length/2);
        str2 = reverseString(str2);
        
        if(str1 == str2){
            return true;
        }
    }
    else if(str.length % 2 != 0 ){
        str1 = str.substring(0,str.length/2);
        str2 = str.substring(str.length/2 + 1);
        str2 = reverseString(str2);
        
        if(str1 == str2){
            return true;
        }
    }

    return false;
}

function reverseString(str){
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr += str.charAt(i);
    }
    return revStr;
}