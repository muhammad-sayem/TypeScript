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
//# sourceMappingURL=tupeGuard.js.map