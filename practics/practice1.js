let cal=(l,b,h,) =>{return l*b*h}
console.log(cal(5,9,10))
let ary=[20,17,16,19,10]

let sum = 0
 for (let val of ary) {
    sum=sum+val
    console.log(val) 
    
 }
 let circle= r => Math.PI*r*r
 console.log(circle(8))
arr=["bsc","cse","It"]
arr.forEach(val => {
   let opt=document.createElement("option")
   opt.textContent=val
   opt.value=val
   document.getElementById("bh").appendChild(opt)
   
});
