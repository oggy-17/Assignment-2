var a = prompt("Enter a Color to know about what it means in terms of Traffic Rules");
var b = "Red";
var c = "red";
var d = "Yellow";
var e = "yellow";
var f = "Green";
var g = "green";

if( a===b || a===c ) {
    console.log("Must Stop");
}
else if( a===d || a===e ){
    console.log("Ready to move");
}

else if (a===f || a===g) {
    console.log("Move now");
}
else{
    console.log("Traffic Colors consist of three Colors, Which are Red , Yellow and Green");
}