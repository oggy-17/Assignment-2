var pwd = prompt("Enter Your Password");
var confirmpwd = prompt("Enter your Password again for the confirmation");

if(pwd===confirmpwd){
    console.log("Correct ! ")
}
else{
    console.log("Your Password does't match");
}