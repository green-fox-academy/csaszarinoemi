/*Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost*/

import{BlogPost, johnDoe, timUrban, williamTurton} from "../Day2/blog-post";

let importBlog = [johnDoe, timUrban, williamTurton];

class Blog {
  blogPostsList: BlogPost[] = [];

  constructor(list: BlogPost[] = []) {
    this.blogPostsList = list;
  }
add(argument: BlogPost){
  this.blogPostsList.push(argument);
}

}


let newBlogPost = new Blog(importBlog);
let fatorial = new BlogPost('Gabor', 'Factorial', 'Factorial, factorilas are great', '2018.11.16.');
newBlogPost.add(fatorial);
console.log(newBlogPost);