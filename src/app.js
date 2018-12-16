import PostsService from "./services/posts-service";

window.addEventListener("load", () => {
    const res = new PostsService().fetchPosts();
    console.log(res);
    const main = document.querySelector("main");

    res.then(json => {
        console.log(json);

        json.forEach(blogPost => {
            const el = document.createElement("blog-post");
            el.blogPost = blogPost;
            main.appendChild(el);
        });
    });
});
