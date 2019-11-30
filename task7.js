var input1 = prompt("Enter Number 1");
var input2 = prompt("Enter Number 2");

var num1 = parseInt(input1);
var num2 = parseInt(input2);

var operation = prompt("Enter the Operation you want to perform");

if (operation === "+" ){
var sum = num1 + num2;
console.log(sum);
}
if (operation === "-" ){
    var subtraction = num1 - num2;
    console.log(subtraction);
    }
    if (operation === "*" ){
        var multiplication = num1 * num2;
        console.log(multiplication);
        }
        if (operation === "/" ){
            var division = num1 / num2;
            console.log(division);
            }