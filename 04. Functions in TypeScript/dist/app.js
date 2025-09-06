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
//# sourceMappingURL=app.js.map