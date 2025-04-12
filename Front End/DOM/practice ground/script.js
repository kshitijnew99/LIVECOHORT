var names = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 },
]
let ageSum = ""
names.forEach(function(elem){
    ageSum +=  elem.name;
    
})
console.log(ageSum);
