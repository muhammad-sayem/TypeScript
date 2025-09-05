"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "Sabbir",
    age: 26,
    isEnrolled: true,
    courses: ["TypeScript", "JavaScript", "Python"],
    marks: [59, 85, 73],
    info: ["Sabbir", 26, true]
};
const student2 = {
    name: "Akib",
    age: 39,
    isEnrolled: true,
    courses: ["Python", "Django", "MySQL"],
    marks: [63, 57, 94],
    info: ["Akib", 39, true]
};
function displayStudent(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Name: ${student.age}`);
    console.log(`Name: ${student.courses.join(', ')}`);
}
displayStudent(student1);
displayStudent(student2);
//# sourceMappingURL=app.js.map