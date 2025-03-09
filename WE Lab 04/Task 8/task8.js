let imageLinks = [
    "./images/img1.jpeg",
    "./images/img2.jpeg",
    "./images/img3.jpeg",
    "./images/img4.jpeg"
];
let img = document.querySelector("img");
let mover = 1;

setInterval( ()=>{
    mover = (mover == 3) ? (0) : (mover + 1);
    img.src = imageLinks[mover];
    imgNumber.innerHTML = mover + 1;
}, 3500);

let moveBackwardBtn = document.querySelector("#moveBackward");
let moveForwardBtn = document.querySelector("#moveForward");
let imgNumber = document.querySelector("#imgNo");

moveBackwardBtn.addEventListener('click', () => {
    mover = (mover == 0) ? (3) : (mover-1);
    img.src = imageLinks[mover];
    imgNumber.innerHTML = mover + 1;
});

moveForwardBtn.addEventListener('click', () => {
    mover = (mover == 3) ? (0) : (mover+1);
    img.src = imageLinks[mover];
    imgNumber.innerHTML = mover + 1;
});