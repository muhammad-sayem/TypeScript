// union type (|) //

let value: string | number;   // string othoba number type hote pare //

type ProductID = string | number;

const getProductId = (id: ProductID) => {
  console.log(`Product ID: ${id}`);
} 
getProductId("abcd1234");
getProductId(1234);

// intersection type (&) //

type User = {
  id: number;
  name: string;
}

type Admin = {
  isAdmin: boolean;
}

type AdminUser = User & Admin;

const newUser: AdminUser = {
  id: 1,
  name: "Mubin",
  isAdmin: false
}

const showUser = (user: AdminUser) => {
  console.log(user.name);
}

showUser(newUser);