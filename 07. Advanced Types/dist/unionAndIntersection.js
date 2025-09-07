"use strict";
// union type (|) //
Object.defineProperty(exports, "__esModule", { value: true });
let value; // string othoba number type hote pare //
const getProductId = (id) => {
    console.log(`Product ID: ${id}`);
};
getProductId("abcd1234");
getProductId(1234);
const newUser = {
    id: 1,
    name: "Mubin",
    isAdmin: false
};
const showUser = (user) => {
    console.log(user.name);
};
showUser(newUser);
//# sourceMappingURL=unionAndIntersection.js.map