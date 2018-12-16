class BlogPost extends HTMLElement {

    set blogPost(blogPost) {
        this.innerHTML = `
            <a href="blog-posts/${blogPost.id}">${blogPost.title}</a>
            <p>${blogPost.body}</p>
        `;
    }
}

customElements.define("blog-post", BlogPost);