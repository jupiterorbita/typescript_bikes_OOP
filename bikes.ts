class Bike {
    constructor(
        public price: number,
        public max_speed: number,
        public miles: number = 0) {
        // this.price = price;
        // this.max_speed = max_speed;
        // this.miles = miles;
    }
    displayInfo() {
        console.log(`displaying info: `)
        console.log(`price = $${this.price}`);
        console.log(`max_speed = ${this.max_speed}mph`);
        console.log(`miles = ${this.miles}`);
        return this;
    }
    ride() {
        this.miles += 10;
        console.log(`Riding`);
        return this;
    }
    reverse() {
        this.miles -= 5;
        if (this.miles < 0) {
            this.miles = 0;
        }
        console.log(`reversing`);
        return this;
    }
}

let bike1 = new Bike(200, 20);
let bike2 = new Bike(300, 30, 12);
let bike3 = new Bike(400, 25)
console.log(`bike1 ==> ${bike1}`);
bike1.displayInfo();
bike1.displayInfo().ride().ride().ride().reverse().displayInfo()

bike2.ride().ride().reverse().reverse().displayInfo()

bike3.reverse().reverse().reverse().displayInfo()

