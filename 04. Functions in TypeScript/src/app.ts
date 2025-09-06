function greet (name: string): string{
  return `Hello, ${name}`;
}

console.log(greet("Sayem"));

// function type signature //
let displayName: (name: string) => string; // displayName name er ekta function define kora hoise jeta ekta string recieve korbe "name" er moddhe. => string diye bujhano hoise eta string type er data return korbe //

displayName = function (name: string): string {
  return `Hi, ${name}`
}
console.log(displayName("Alice"));