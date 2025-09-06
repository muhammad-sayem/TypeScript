"use strict";
// 1. Create an user interface //
Object.defineProperty(exports, "__esModule", { value: true });
// 4. Create an author object //
const author1 = {
    id: 1,
    name: "Masud",
    email: "masud@gmail.com",
    bio: "Masud is a good writter",
    post: ["Post 1", "Post 2", "Post 3"]
};
// 5. Make account Status //
const accountStatus = "active";
// 6. Display author //
const displayAuthor = (author) => {
    console.log("Author ID: ", author.id);
    console.log("Author Namw: ", author.name);
    console.log("Author Email: ", author.email);
};
displayAuthor(author1);
//# sourceMappingURL=ProfileManagement.js.map