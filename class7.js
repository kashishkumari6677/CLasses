var num = Number(prompt("enter your first Number"))
var num1 = Number(prompt("enter your second Number"))
var sign = prompt("enter arthimstic operators like +,-,*,/")
switch(sign){
    case '+':
    console.log(num + " + " + num1 + " = " + (num + num1))
    break;
    case '-':
    console.log(num + " - " + num1 + " = " + (num - num1))
    break;
    default:
    console.log("you enter wrong sign")
}
var d=new Date()
var hour=d.getHours()
var minutes=d.getMinutes()
var second=d.getSeconds()
if(hour>12){
    // hour=hour-12
    hour-=12
}
console.log(hour+":"+minutes+":"+second)
for(var i=1;i<=5;i++){
    for(var j=0;j<i;j++){
      console.log("*")
    }
    console.log("")
}
