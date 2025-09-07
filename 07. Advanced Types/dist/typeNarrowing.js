"use strict";
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
//# sourceMappingURL=typeNarrowing.js.map