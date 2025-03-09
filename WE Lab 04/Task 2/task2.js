function function2(str){
    let arr = [];
    for(let i = 0; i < str.length; i++)
        arr.push( str.charAt(i) );
    arr.reverse();
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    let finalStr = "";
    for(let i = 0; i < arr.length; i++ )
        finalStr += arr[i];
    alert(`Answer = ${finalStr}`);
}
let str = prompt("Enter a string");
function2(str);