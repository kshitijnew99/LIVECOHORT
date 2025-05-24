function getData()
{
    fetch(`https://api.github.com/users/username`).then(raw => raw.json)
}

getData().then(function(data){
    console.log(data);
})

