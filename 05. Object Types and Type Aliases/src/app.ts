const student = {
  name: "Bob",
  age: 20
}

const printUser = (user: {name: string, age: number}): void => {
  console.log(`The user is ${user.name} andd he is ${user.age} years old`);
}
printUser(student);

// ----------------------------------------------- //

// Type Alias //
type User = {
  name: string;
  age: number;
  isMarried: boolean;
}

const user1: User = {
  name: "Meow Mulla",
  age: 20,
  isMarried: true
}

const showUser = (user: User): void => {
  console.log("Name: ", user.name);
  console.log("Age: ", user.age);
  console.log("Marital Status: ", user.isMarried);
}

// --------------------------- //
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;  // Option kore deya hoise
}

const item1: Product = {
  id: 1,
  name: "Laptop",
  price: 75000,
  description: "Quickly reinvent covalent interfaces rather than corporate sources. Conveniently innovate real-time core competencies vis-a-vis unique convergence. Completely maintain top-line."
}

const item2: Product = {
  id: 2,
  name: "Mobile",
  price: 20000,
} 

const showProduct = (product: Product) => {
  console.log("ID: ", product.id);
  console.log("Name: ", product.name);
  console.log("Price: ", product.price);
  console.log("Description: ", product.description ? product.description : "Description not available");
}

showProduct(item1)
showProduct(item2);