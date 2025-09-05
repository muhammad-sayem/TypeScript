"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// "any" data type (jodi data type ignore korte chai tahole eta use kore) //
let randomElement = "Hello";
randomElement = 10;
console.log(randomElement);
// "unknown" data type //
const value = 76;
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
else {
    console.log("This is not a string and that's why it's not possible to make uppercase");
}
// "void" data type //
function logMessage() {
    console.log("Message logged Successfully!!");
}
logMessage();
function greetings(name) {
    return `Hello, ${name}`;
}
console.log(greetings("Sayem"));
function greetings2(name, age) {
    return `Welcome ${name} whose age is ${age}`;
}
console.log(greetings2("Sayem", 24));
// "null" and "undefined" (kono variable declare kora hoise kintu kono value assign kora hoy nai ekhete hobe "undefined" ar "null" holo manually "no value" set kore deya) //
let x;
console.log(x);
let y = null;
console.log(y);
//# sourceMappingURL=app.js.map