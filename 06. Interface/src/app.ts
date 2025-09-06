// Type merge / duplicate kora jaay na and interface merge and duplicate kora jaay same name er upor e //

// When to use which //
/*
  1. Designing public APIs: Interface
  2. For Merge / duplicate: Interface
  3. Union and Intersection: Type
  4. Premitive or function: Type
  5. For simple object: Both
*/

// Define interface //

interface UserProfile {
  name: string;
  age: number;
  email: string
}

// Merge Interface //

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = {
  name: "Shakil",
  age: 34
}

// ------------------------------------------------------------ //

// Extending Interfaces //
