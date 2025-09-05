// Premitive data Types //

// String //
let studentName: string = "Alice";
studentName = "Bob";

// Number //
const age: number = 12;

// Boolean //
let isPassed: boolean = false;
// console.log(isPassed);

// ------------------------------------- //

// Array //
let marks:number[] = [57, 73, 85]
console.log(marks[0]);

const names: string[] = ["Alice", "Bob", "Charles"];
names.push("David")
console.log(names[3]);

const numbers: Array<number> = [18, 94, 37, 58, 76];
console.log(numbers[1]);

// Tuples //
const student: [string, number, boolean] = ["Alice", 21, true];
console.log(student[0]);
console.log(student[1]);