class BlogPost extends HTMLElement {

    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }

    set blogPost(blogPost) {
        this.root.innerHTML = `
            <a href="blog-posts/${blogPost.id}">${blogPost.title}</a>
            <p>${blogPost.body}</p>
        `;
    }
}

customElements.define("blog-post", BlogPost);