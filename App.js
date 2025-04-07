function abcd(cb){
    let executed = false
    let time = 0
    return function(){
        if(!executed){
            cb();
            executed = true;
        }else{
            time++;
            console.log(`Already executed ${time} times`);
            
        }
    }
}

let newfnc = abcd(function(){
    console.log("some function that is needs to be executed");
    
})

newfnc();
newfnc();
newfnc();
newfnc();
newfnc();