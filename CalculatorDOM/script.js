let btnAdd = document.getElementById("addBtn");
let btnMinus = document.getElementById("minusBtn");
let btnDivide = document.getElementById("divideBtn");
let btnMultiply = document.getElementById("multiplyBtn");
let btnTheme = document.getElementById("themeBtn");
let button = document.querySelectorAll("button");
let body = document.body;

btnAdd.addEventListener("click", function(){
    let num1 = Number(document.getElementById("firstNum").value);
    let num2 = Number(document.getElementById("secondNum").value);
    document.getElementById("resultText").innerText = num1 + num2;
});

btnMinus.addEventListener("click", function(){
    let num1 = Number(document.getElementById("firstNum").value);
    let num2 = Number(document.getElementById("secondNum").value);
    document.getElementById("resultText").innerText = num1 - num2;
});

btnDivide.addEventListener("click", function(){
    let num1 = Number(document.getElementById("firstNum").value);
    let num2 = Number(document.getElementById("secondNum").value);
    document.getElementById("resultText").innerText = num1 / num2;
});

btnMultiply.addEventListener("click", function(){
    let num1 = Number(document.getElementById("firstNum").value);
    let num2 = Number(document.getElementById("secondNum").value);
    document.getElementById("resultText").innerText = num1 * num2;
});

btnTheme.addEventListener("click", function(){
    body.classList.toggle("dark-mode");
    if(btnTheme.className === "btn btn-outline-dark")
        button.forEach(button => button.classList.replace("btn-outline-dark", "btn-outline-light"));
    else
        button.forEach(button => button.classList.replace("btn-outline-light", "btn-outline-dark"));
});
