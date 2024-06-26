class Car {
	constructor(speed) {
		this.speed = 0
	}

	drive(newSpeed) {
		this.speed = newSpeed
		return this.speed
	}

}

// let car = new Car();
// console.log(car.drive(0));     // => returns 0
// console.log(car); // => { speed: 0 }

// console.log(car.drive(10));    // => returns 10
// console.log(car); // => { speed: 10 }

// console.log(car.drive(50));    // => returns 50
// console.log(car); // -> { speed: 50 }

// console.log(car.drive(100));   // => returns 100
// console.log(car); // -> { speed: 100 }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
