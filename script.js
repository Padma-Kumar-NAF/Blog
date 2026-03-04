async function loadPosts() {
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  const posts = data.posts;
  const container = document.getElementById("postsContainer");

  posts.forEach((post) => {
    let tagsHTML = "";

    post.tags.forEach((tag) => {
      tagsHTML += `<span class="badge bg-primary">${tag}</span>`;
    });

    container.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card blog-card">
                <div class="card-body">
 
                    <h5 class="card-title text-success">${post.title}</h5>
                    <p class="card-text">
                    ${post.body}
                    </p>
 
                    <div class="tags mb-3">
                        ${tagsHTML}
                    </div>

                    <div class="stats d-flex justify-content-between">
                        <span>Likes : ${post.reactions.likes}</span>
                        <span>Dislikes : ${post.reactions.dislikes}</span>
                        <span>Views : ${post.views}</span>
                    </div>
                </div>
            </div>
        </div>
        `;
  });
}
loadPosts();
