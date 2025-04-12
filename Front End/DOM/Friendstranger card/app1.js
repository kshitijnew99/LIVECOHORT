var button = document.querySelector('button');
var h3 = document.querySelector('h3');

let flag = 0
button.addEventListener('click',function(){
    if(!flag){
        h3.innerHTML = "Friend"
        h3.style.color = "green"
        flag = 1
    }
    else{
        h3.innerHTML = "Stranger"
        h3.style.color = "red"
        flag = 0
    }
})






