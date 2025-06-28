function addBlog() {
  const title = document.getElementById("blogTitle").value.trim();
  const content = document.getElementById("blogContent").value.trim();

  if (!title || !content) {
    alert("Please fill in both title and content!");
    return;
  }

  const blog = { title, content, date: new Date().toLocaleString() };

  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.unshift(blog); // add new story at the top
  localStorage.setItem("blogs", JSON.stringify(blogs));

  document.getElementById("blogTitle").value = "";
  document.getElementById("blogContent").value = "";

  displayBlogs();
}

function displayBlogs() {
  const blogList = document.getElementById("blogList");
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  blogList.innerHTML = blogs.map(blog => `
    <div class="blog-card">
      <h3>${blog.title}</h3>
      <p>${blog.content}</p>
      <small>Posted on: ${blog.date}</small>
    </div>
  `).join("");
}

window.onload = displayBlogs;
