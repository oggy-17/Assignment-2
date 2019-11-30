alert("Welcome to the Number Guess Game");
var a = 6 ;
var b = prompt("Guess the number which is ranging from 1 - 10");

var c = parseInt(b);

if(c === a){
console.log("BINGO ! Correct answer");
}
else if(c=== 5){
    console.log("Close Enough to the Correct Answer");
}
else if(c=== 7){
    console.log("Close Enough to the Correct Answer");
}
else{
    console.log("You Guessed the Wrong Number");
}  