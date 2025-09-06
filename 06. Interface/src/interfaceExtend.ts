interface Animal {
  name: string;
}

interface Dog extends Animal {
  color: string
}

const myDog: Dog = {
  name: "Tommy",
  color: "Golden Brown"
}