"use strict";
// Type Narrowing er oita ekhaneo ase //
Object.defineProperty(exports, "__esModule", { value: true });
const logValue = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
        console.log(`The value is ${value} this is a string value`);
    }
    else {
        console.log(`The value is ${value} and this is a number value`);
    }
};
logValue("Hello World");
logValue(87);
const moveVehicle = (vehicle) => {
    if ("drive" in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
};
const myCar = {
    drive: () => {
        console.log("The car is driving");
    }
};
const myBoat = {
    sail: () => {
        console.log("The boat is sailing");
    }
};
moveVehicle(myCar);
moveVehicle(myBoat);
// -------------------------------------------------- //
// instanceof Type Guard //
class Dog {
    bark() {
        console.log("Woof Woof");
    }
}
class Cat {
    meow() {
        console.log("Meow Meow");
    }
}
const makeSound = (animal) => {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
};
const dog1 = new Dog();
const cat1 = new Cat();
makeSound(dog1);
makeSound(cat1);
//# sourceMappingURL=typeGuard.js.map