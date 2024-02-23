var heading=document.getElementById("head")
heading.innerHTML="Namasta"
heading.style.color="green"
//function
function check(){
    var num=document.getElementById("value").value
    console.log(num)
if(num%2){
    alert("even")
}else{
    alert("odd")
}
}