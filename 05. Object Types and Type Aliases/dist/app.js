"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = {
    name: "Bob",
    age: 20
};
const printUser = (user) => {
    console.log(`The user is ${user.name} andd he is ${user.age} years old`);
};
printUser(student);
const user1 = {
    name: "Meow Mulla",
    age: 20,
    isMarried: true
};
const showUser = (user) => {
    console.log("Name: ", user.name);
    console.log("Age: ", user.age);
    console.log("Marital Status: ", user.isMarried);
};
const item1 = {
    id: 1,
    name: "Laptop",
    price: 75000,
    description: "Quickly reinvent covalent interfaces rather than corporate sources. Conveniently innovate real-time core competencies vis-a-vis unique convergence. Completely maintain top-line."
};
const item2 = {
    id: 2,
    name: "Mobile",
    price: 20000,
};
const showProduct = (product) => {
    console.log("ID: ", product.id);
    console.log("Name: ", product.name);
    console.log("Price: ", product.price);
    console.log("Description: ", product.description ? product.description : "Description not available");
};
showProduct(item1);
showProduct(item2);
//# sourceMappingURL=app.js.map