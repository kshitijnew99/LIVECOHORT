console.time("label");
let num = Number(prompt("Enter the number : "))

function isAutomorphic(n){
    let square = n * n
    let count = 0
    let orgNum = n
    
    while(n != 0){
       count++
       n = Math.floor(n / 10)
    }
    let lastDigit = square % Math.pow(10,count);
    lastDigit == orgNum ? console.log(" is an Automorphic number ") : console.log("is not an Automorphic Number");
}


isAutomorphic(num)
console.timeEnd("label");