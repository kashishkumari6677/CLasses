function check(){
    let age=prompt("enter your age")
if(age>18){
    alert("you can attend event")
}else{
    alert("you cannot attend event")
}
}
check()
//recursive function
//5! 5*4*3*2*1=120 
let res=1
function fact(a){
    if(a===1){
        console.log(res)
        return;
    }
    res*=a
    fact(a-1)
}
let val=prompt("enter any number")
fact(val)