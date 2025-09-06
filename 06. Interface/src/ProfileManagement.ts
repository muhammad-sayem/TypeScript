// 1. Create an user interface //

interface User {
  id: number;
  name: string;
  email: string
}

// 2. Create an author interface //

interface Author extends User {
  bio: string;
  post: string[];
}

// 3. Define user status using type alias //

type Status = "active" | "inactive" | "banned";

// 4. Create an author object //

const author1: Author = {
  id: 1,
  name: "Masud",
  email: "masud@gmail.com",
  bio: "Masud is a good writter",
  post: ["Post 1", "Post 2", "Post 3"]
}

// 5. Make account Status //

const accountStatus: Status = "active";

// 6. Display author //

const displayAuthor = (author: Author) => {
  console.log("Author ID: ", author.id);
  console.log("Author Namw: ", author.name);
  console.log("Author Email: ", author.email);
}

displayAuthor(author1);