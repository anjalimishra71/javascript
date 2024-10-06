/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;

// }

// Car.prototype.accelerate = function () {
//     this.speed += 10
//     console.log(`${this.make} going at ${this.speed} km/h`);
// }

// Car.prototype.break=function(){
//     this.speed -= 10
//     console.log(`${this.make} going at ${this.speed}`);

// }
// const car1=new Car("BMW",120);
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();

// car1.break();


//Using ES6
// class Car {
//     constructor(make, speed) {
//         this.make = make
//         this.speed = speed
//     }

//     accelerate() {
//         this.speed += 10
//         console.log(`${this.make} going at ${this.speed} km/h`);
//     }

//     break() {
//         this.speed -= 10
//         console.log(`${this.make} going at ${this.speed}`);

//     }

//     get speedUs() {
//         this.speed /= 1.6;
//         return `${this.speed} mi/h`

//     }
//     set speedUs(speed) {
//         this.speed = speed *1.6
//         console.log(` ${this.speed} km/h`);

//     }
// }
// const ford = new Car("Ford", 120)
// console.log(ford.speedUs);
// console.log(ford.speedUs);
// ford.speedUs = 50
// console.log(ford.speedUs);


/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
 */
// const Car = function (make, speed) {
//     this.make = make
//     this.speed = speed

// }
// Car.prototype.accelerate = function () {
//     this.speed += 10
//     console.log(`${this.make} going at ${this.speed} km/h`);
// }

// Car.prototype.break = function () {
//     this.speed -= 10
//     console.log(`${this.make} going at ${this.speed}`);

// }

// const Ev = function (make, speed, charge) {

//     Car.call(this, make, speed);
//     this.charge = charge;

// }
// Ev.prototype = Object.create(Car.prototype)




// const tesla = new Ev("tesla", 120, 23)
// Ev.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo;
// }

// Ev.prototype.accelerate = function () {
//     this.speed += 10
//     this.charge -= 1
//     console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// }

// tesla.chargeBattery(20)
// tesla.break()
// tesla.accelerate()


/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }
    accelerate() {
        this.speed += 10
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    break() {
        this.speed -= 10
        console.log(`${this.make} going at ${this.speed}`);
        return this;

    }



}

class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
            this.speed += 10
            this.#charge -= 1
            console.log(`Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
        }
}

const riven=new EVCl("Rivian",120,23)
// console.log(riven.#charge);
// console.log(riven.make);
riven.accelerate().accelerate().accelerate().chargeBattery(50).break().chargeBattery(50)

