"use strict";
// custom type guard //
Object.defineProperty(exports, "__esModule", { value: true });
const isFish = (pet) => {
    return pet.swim !== undefined;
};
// pet is Fish = এটা function এর return type, যেটা TypeScript কে বলে দেয় future এ if এর ভিতরে এটা Fish হবে।
// (pet as Fish) = TypeScript কে temporary ভাবে বলছি "pet কে Fish ধরে নাও"।
const movePet = (pet) => {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
};
const myFish = {
    swim: () => console.log("My Fish is swimming")
};
const myBird = {
    fly: () => console.log("My bird in flying")
};
movePet(myFish);
movePet(myBird);
//# sourceMappingURL=customTypeGuard.js.map