
let _url = new WeakMap();

class BlogPostsService {

    constructor() {
        _url.set(this, "https://jsonplaceholder.typicode.com/posts");
    }

    async fetchPosts() {
        const res = await fetch(_url.get(this));
        return await res.json();
    }
}

module.exports = BlogPostsService;