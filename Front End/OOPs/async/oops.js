function orderFood() {
        let val = Math.random()
        return new Promise((resolve, reject) => {
            if(val > 0.5) resolve();
            else reject();
        });
}

setInterval(function(){
    orderFood()
    .then(() => {
        console.log("🍕 Pizza Delivered!..");
    })
    .catch(() => {
        console.log("🚫 Delivery Failed!....");
    });
},2000)
