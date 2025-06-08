var card = document.querySelector('#card')
var button = document.querySelector('button')

button.addEventListener('click',function(){
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)


    card.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    button.style.border = `solid 6px rgb(${c1},${c2},${c3})`
})