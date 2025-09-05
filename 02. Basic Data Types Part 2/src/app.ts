// "any" data type (jodi data type ignore korte chai tahole eta use kore) //
let randomElement: any = "Hello"
randomElement = 10;

console.log(randomElement);

// "unknown" data type //
const value: unknown = 76;

if(typeof value === "string"){
  console.log(value.toUpperCase());
}
else{
  console.log("This is not a string and that's why it's not possible to make uppercase");
}

// "void" data type //
function logMessage(): void {
  console.log("Message logged Successfully!!");
}
logMessage();

function greetings(name: string): string {
  return `Hello, ${name}`
}
console.log(greetings("Sayem"));

function greetings2(name: string, age: number): string {
  return `Welcome ${name} whose age is ${age}`;
}
console.log(greetings2("Sayem", 24));

// "null" and "undefined" (kono variable declare kora hoise kintu kono value assign kora hoy nai ekhete hobe "undefined" ar "null" holo manually "no value" set kore deya. ts e ei undefined and null type o declare kore deya lage) //

let x: undefined = undefined;
console.log(x);

let y: null = null;
console.log(y);

// Type Inference //

/* 
--> TS er khetre jokhon kono variable declare kore value assign kora hoy tokhon o nije theke e type ta bujhe ney and oi hishabe ar pore onno data type er value diye sheta replace kora jaay na. Etakei bole "Type Inference" 

--> Tobe large projects er jonno always best practice holo code lekhar somoy nije theke e type define kore deya.
*/