// custom type guard //

type Fish = {
  swim: () => void;
}

type Bird = {
  fly: () => void;
}

const isFish = (pet: Fish | Bird): pet is Fish => { 
  return (pet as Fish).swim !== undefined; 
}

// pet is Fish = এটা function এর return type, যেটা TypeScript কে বলে দেয় future এ if এর ভিতরে এটা Fish হবে।

// (pet as Fish) = TypeScript কে temporary ভাবে বলছি "pet কে Fish ধরে নাও"।

const movePet = (pet: Fish | Bird) => {
  if(isFish(pet)){
    pet.swim();
  }
  else{
    pet.fly();
  }
}

const myFish: Fish = {
  swim: () => console.log("My Fish is swimming")
};

const myBird: Bird = {
  fly: () => console.log("My bird in flying")
}

movePet(myFish);
movePet(myBird);