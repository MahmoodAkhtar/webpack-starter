import BlogPostsService from "./services/blog-posts-service";
import "./components/blog-post";

window.addEventListener("load", () => {
    const main = document.querySelector("main");
    const res = new BlogPostsService().fetchPosts();

    res.then(json => {
        console.log(json);

        json.forEach(blogPost => {
            const el = document.createElement("blog-post");
            el.blogPost = blogPost;
            main.appendChild(el);
        });
    });
});
