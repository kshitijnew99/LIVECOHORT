const people = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "John Miller",
      age: 30,
      married: true,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Emma Wilson",
      age: 27,
      married: false,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      name: "Michael Brown",
      age: 35,
      married: true,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Sophia Davis",
      age: 29,
      married: false,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Daniel Garcia",
      age: 42,
      married: true,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/women/33.jpg",
      name: "Olivia Martinez",
      age: 24,
      married: false,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "James Anderson",
      age: 38,
      married: true,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/women/19.jpg",
      name: "Ava Thomas",
      age: 26,
      married: false,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/men/88.jpg",
      name: "William Taylor",
      age: 31,
      married: true,
      isStatus: "Stranger"
    },
    {
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      name: "Mia Moore",
      age: 28,
      married: false,
      isStatus: "Stranger"
    }
  ];

var body = document.querySelector('body')
  
function ChangeHTMl(){
    let sum = ''

    people.forEach(function(elem,idx){
      sum = sum + `<div class="card">
          <img src="${elem.img}" alt="">
          <h1>${elem.name}</h1>
          <h5>Age : ${elem.age}</h5>
          <h4>Maried : ${elem.married}</h4>
          <h4>${elem.isStatus}</h4>
          <button id =${idx} >Add Friend</button>    
      </div>`
    })  
    body.innerHTML = sum
}   

ChangeHTMl()

  body.addEventListener('click',function(dets){
     var gold = people[dets.target.id]; // from this "people[dets.target.id]" value we can any value of the object and it's called Event Bubbling
     gold.isStatus = 'Friends'
    //  gold.isStatus.style.backgroundColor = "green"
     ChangeHTMl()   
  })

localStorage.setItem('user','Kshitij Rao ranjan ')


document.cookie = "theme : light , user : kshitij Rao ranjan"