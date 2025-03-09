let submitBtn = document.querySelector("#submitbtn");

submitBtn.addEventListener('click', () => {
    let div = document.querySelector("div");
    div.innerHTML = "";

    let num = document.querySelector("#num").value;
    let str = "";

    for (let index = 0; index <= 10; index++) {
        str += `<p>${num} * ${index} = ${num*index}</p>`;
    }

    div.innerHTML = str;

});