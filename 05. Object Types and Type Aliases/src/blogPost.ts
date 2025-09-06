// 1. Define Type Alias //

type BlogPost = {
  title: string;
  content: string;
  author: string;
  isPublished: boolean;
  publishedDate?: string;
}

// 2. Create a blog post //

const myBlog: BlogPost = {
  title: "Travel with friends",
  content: "Quickly reinvent covalent interfaces rather than corporate sources. Conveniently innovate real-time core competencies vis-a-vis unique convergence. Completely maintain top-line.",
  author: "Jack Charles",
  isPublished: true,
  publishedDate: "17/08/25"
}

// 3. Function for showing blog elements //

const showBlog = (blog: BlogPost) => {
  console.log("Title:", blog.title);
  console.log("Description:", blog.content);
  console.log("Author:", blog.author);
  console.log("Published or not: ", blog.isPublished);
  console.log("Published Date: ", blog.publishedDate);
}

// 4. Show Blog Elements //
showBlog(myBlog)