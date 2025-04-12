let team = [
    {
        name: "CSK",
        color: "Yellow",
        backGround: "black"
    },
    {
        name: "LSG",
        color: "Blue",
        backGround: "purple"
    },
    {
        name: "MI",
        color: "Blue",
        backGround: "Silver"
    },
    {
        name: "RCB",
        color: "Red",
        backGround: "gold"
    },
    {
        name: "PNKJ",
        color: "Red",
        backGround: "Silver"
    }
];

let btn = document.querySelector("button");
let winner = document.querySelector("h1");
let card = document.querySelector("#card");

btn.addEventListener('click', function () {
    let ram = Math.floor(Math.random() * team.length);
    winner.innerHTML = team[ram].name;
    winner.style.color = team[ram].color;
    card.style.backgroundColor = team[ram].backGround;
});
