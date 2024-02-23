var std = ["Perna", "Kashish", "Fedwa", "Ayesha Siyal", "Aqsa", "Premika", "Asiha khan"]
console.log(std) 
//counting indexno
console.log(std.length)
console.log(std[5])
//stack LIFO=last in first out
//pop push
//pop is used to remove value from end
//push is used to add value from end
std.push("Muskan Meshwari")
std.push("Zanib")
console.log(std) 
//queue FIFO=first in first out
//shift unsift
//shift is used to remove value from begin
std.shift()
console.log(std)
//unshift is used to add value from begin
std.unshift("Aroob")
console.log(std)
//splice(starting indexno,delete no,...value)
std.splice(2,1,"Perna","Muskan Lakhwani","Anchal")
console.log(std) 
var passStd=[]
//slice is used to copy a value and paste in another array
//slice(start,end)
passStd=std.slice(1,6)
console.log(passStd) 


