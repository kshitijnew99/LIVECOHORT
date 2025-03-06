function greetsetup(greeting){
    return function(indian){
        console.log(`${greeting}`,`${indian}`);
        
    }
}

var indiangrreet = greetsetup("hello")
indiangrreet("kshitij")
indiangrreet("piyush")