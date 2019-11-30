var input = prompt("Enter Time in the 24hrs clock format");
var time = parseInt(input);

if(time >= 00 && time < 12 ){
console.log("Good Morning");
}
else if(time >= 12 && time < 17 ){
    console.log("Good Afternoon");
    }
else if(time >= 17 && time < 21 ){
        console.log("Good Evening");
        }
        else if(time >= 21 && time <= 24 ){
            console.log("Good Night");
            }