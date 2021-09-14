
addFunction = (a,b) => {return parseInt(a) + parseInt(b)};
subtractFunction = (a,b) => {return parseInt(a) - parseInt(b)};
multiplyFunction = (a,b) => {return parseInt(a) * parseInt(b)};
divideFunction = (a,b) => {return parseInt(a) / parseInt(b)};

var operation = parseInt(prompt("Enter Operation Number [1 - Add, 2 - Subtract, 3 - Multiply, 4 - Divide]"));
var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");

switch(operation){
    case 1:
        alert("The result is: "+addFunction(num1,num2)); break;
    case 2:
        alert("The result is: "+subtractFunction(num1,num2)); break;
    case 3:
        alert("The result is: "+multiplyFunction(num1,num2)); break;
    case 4:
        alert("The result is: "+divideFunction(num1,num2)); break;
}

