const prompt = require('prompt-sync')()

let num = prompt("Enter the number of lines : ")

for(let i = num ; i >0 ; i--){
    for(let j = 1 ; j <=i ; j++){
        process.stdout.write("* ")
    }
    console.log();
    
}
