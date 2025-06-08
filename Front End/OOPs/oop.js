class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    getMobileInfo() {
        console.log(`${this.brand} - ${this.price} INR`);
    }
}

class MobileShop {
    constructor() {
        this.mobiles = [];
    }

    addMobile(mobile) {
        this.mobiles.push(mobile);
    }

    listAllMobiles() {
        console.log("Listing all mobiles in the shop:");
        this.mobiles.forEach((mob) => {
            console.log(`${mob.brand} - ${mob.price} INR`);
        });
    }
}

// Create shop instance
const shop1 = new MobileShop();

// Create mobile instances
const samsung = new Mobile('Samsung', 120000);
const xiaomi = new Mobile('Xiaomi', 80000);

// Add mobiles to the shop
shop1.addMobile(samsung);
shop1.addMobile(xiaomi);

// List all mobiles in the shop
shop1.listAllMobiles();
