
alert("Click OKAY to know about your Percentage in three Subjects");

var a = prompt("Total marks in subject A");
var b = prompt("Total marks in subject B");
var c = prompt("Total marks in subject C");
var d = prompt("Total marks");

var conversionToNumber1 = parseInt(a);
var conversionToNumber2 = parseInt(b);
var conversionToNumber3 = parseInt(c);

var sumOfAllSubjects = conversionToNumber1 + conversionToNumber2 + conversionToNumber3;
var percentageOfSubjects = (sumOfAllSubjects/d)*100;

if(percentageOfSubjects >= 80){
 console.log("Total Marks : " + d);
 console.log("Marks Obtained : " + sumOfAllSubjects);
 console.log("Percentage : " + percentageOfSubjects);   
 console.log("Grade : A");
 console.log("Remarks : Excellent");
}
else if(percentageOfSubjects >= 70 && percentageOfSubjects <= 79){
    console.log("Total Marks : " + d);
 console.log("Marks Obtained : " + sumOfAllSubjects);
 console.log("Percentage : " + percentageOfSubjects);
    console.log("Grade : B");
    console.log("Remarks : Good");
   }
 else if(percentageOfSubjects > 60 && percentageOfSubjects <= 69 ){
    console.log("Total Marks : " + d);
    console.log("Marks Obtained : " + sumOfAllSubjects);
    console.log("Percentage : " + percentageOfSubjects);
    console.log("Grade : C");
    console.log("Remarks : You need to Improve");
   }
   if(percentageOfSubjects < 60){
    console.log("Total Marks : " + d);
    console.log("Marks Obtained : " + sumOfAllSubjects);
    console.log("Percentage : " + percentageOfSubjects);
    console.log("Fail")
    console.log("Remarks : Sorry")
   }