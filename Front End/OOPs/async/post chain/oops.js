function getUser(){
    return new Promise((res,rej) => {
        setInterval(function(){
            res({id : 1 , name : "kshitij"});
        },2000)
    })
}

function getPost(UserID){
    return new Promise((res,rej) => {
        setInterval(function(){
           res(["Post 1 ", "Post 2"]);
        },2000)
    })
}

function getComments(PostID){
    return new Promise((res, rej) => {
        setInterval(function(){
            res(["the comment is resolved","Amazing content"]); 
        },1000)
    })
}

getUser()
.then(function(data) {
    console.log(`Data fetched of : ${data.name}`);
    return getPost(data.id)  
})
.then(function(titles){
    console.log(titles);
    return getComments("smfm")
    
})
.then(function(com){
    console.log(com);
    
})
.finally(function(){
    console.log("All function Fetched");
    
})