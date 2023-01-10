const btn1 = document.getElementById("btnOne");
const btn2 = document.getElementById("btnTwo");
const btn3 = document.getElementById("btnThree");
const btn4 = document.getElementById("btnFour");
const input1 = document.getElementById("input");


btn1.onclick = () => document.getElementById("paraOne").innerHTML = Number(document.getElementById("paraOne").innerHTML) + 1


// function incrementCount () {
//     let counter = document.getElementById("paraOne").innerHTML;
//     counter ++;
//     document.getElementById("paraOne").innerHTML = counter;
// };


const colors = ["red", "green", "yellow", "orange", "blue", "purple"]
let colorIndex = 0;
btn2.onclick = () => {
    document.getElementById("paraTwo").style.color = colors[colorIndex % colors.length];
    colorIndex++;
};

let colorIndexBack = 0;
btn3.onclick = () => {
    document.getElementById("divBG").style.background = colors[colorIndexBack % colors.length];
    colorIndexBack++;
};



btn4.onclick = () => {
    let value1 = Number(document.getElementById("numberOne").value);
    let value2 = Number(document.getElementById("numberTwo").value);
    let product = value1 * value2;
    document.getElementById("paraThree").innerHTML = product;
};

input1.oninput = () => {
    document.getElementById("paraFour").innerText = input1.value
};