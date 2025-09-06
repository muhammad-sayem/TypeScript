"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Sayem"));
// function type signature //
let displayName; // displayName name er ekta function define kora hoise jeta ekta string recieve korbe "name" er moddhe. => string diye bujhano hoise eta string type er data return korbe //
displayName = function (name) {
    return `Hi, ${name}`;
};
console.log(displayName("Alice"));
// ---------------------------------------------------------- //
// Optional parameter (Eta holo emon parameter set kora jeta function call korar somoy value deya hoteo pare nao hote pare) // 
function greeting(firstName, lastName, title) {
    return `This is ${firstName} ${lastName} and his profession is ${title ? title : "N/A"}`;
}
console.log(greeting("Muhammad", "Sayem"));
console.log(greeting("Asif", "Abdullah", "Businessman"));
// default parameter (eta holo jokhon parameter deya hobe tokhon sheta e dekhabe ar parameter na dile default kono ekta value dekhabe) //
function welcomeMessage(name = "Guest") {
    return `Welcome ${name}!`;
}
console.log(welcomeMessage());
console.log(welcomeMessage("Hasib"));
// -------------------------------------------------------- //
// Arrow Function //
const add = (a, b) => {
    return a + b;
};
console.log(`Summation of two numbers: ${add(20, 50)}`);
const square = (x) => x * x; // 1 line hole direct return kora jay, ar 1 line e return kora ke bole implicit return //
console.log(`Square of the number is ${square(12)}`);
//# sourceMappingURL=app.js.map