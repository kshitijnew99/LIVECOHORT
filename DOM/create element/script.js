let btn = document.querySelector("button")

var arr = ['img1.png','img2.png']

btn.addEventListener('click',function(){
    let num = Math.floor(Math.random()*arr.length)  
    var img = document.createElement('img')
    img.setAttribute('src',arr[num])

    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)
    let rot = Math.floor(Math.random()*360)
    
    
    console.log(img);
    img.style.height = '200px';
    img.style.width = '200px';
    img.style.objectFit = 'cover'
    img.style.position = 'absolute'
    img.style.top = `${y}%`
    img.style.left = `${x}%`
    img.style.rotate = `${rot}deg`
    

    document.body.appendChild(img) 
    

})