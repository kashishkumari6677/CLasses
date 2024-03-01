//condition if-else
// var age = prompt("Enter your age")
//' = 'assign
// //comparsion operator equal,less,greter,notequal
// //                     ===,<,>,!=
// //logical operator and &&,or ||
// if (age >= 18&&age<40) {
//     var city = prompt("enter your city name").toLowerCase()
//     if (city === "hyderabad"||city==="karachi") {
//         alert("you can come for interview at 6pm")
//     } else {
//         alert("you are not eligable")
//     }
// }else {
//     alert("you are not eligable")
// }
// else-if
var prect=prompt("Enter your precentage")
if(prect>=50&&prect<60){
    alert("C Grade")
}
else if(prect>=60&&prect<70){
    alert("B Grade")
}
else if(prect>=70&&prect<80){
    alert("B+ Grade")
}
else if(prect>=80&&prect<90){
    alert("A Grade")
}
else if(prect>=90){
    alert("A-one Grade")
}
else{
    alert("Fail")
}