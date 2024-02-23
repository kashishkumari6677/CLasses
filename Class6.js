//loop while
var i=0
while(i<10){
    console.log(i)
    i++;
}
//do-while loop
var a=0
do{
    var num=Number(prompt("enter your first Number"))
    var num1=Number(prompt("enter your second Number"))
    var sign=prompt("enter arthimstic operators like +,-,*,/")
    if(sign==='+'){
        console.log(num+" + "+num1+" = "+(num+num1))
    }
    else if(sign==='-'){
        console.log(num+" - "+num1+" = "+(num-num1))
    }
     else{
        alert("you enter wrong sign")
     }
     var ask=prompt("do you want to do again")
     a++;
}while(ask==='yes')
var b=Math.pow(4,2)
console.log(b)
var c=Math.sqrt(25)
console.log(c)
var arr=[2,3,4,7,34,27,22,45]
console.log(math.max(...arr))
console.log(math.min(...arr))
var ra=2.567
console.log(math.round(ra))
var rand=math.random()*100000
console.log(math.floor(rand))
var random=math.random()*10
console.log(math.floor(random))