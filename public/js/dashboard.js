document.querySelector("#newBlog").addEventListener("submit", e => {
    e.preventDefault()
    const blogObj = {
        title: document.querySelector("#title").value,
        content: document.querySelector("#content").value,
    }
    console.log(blogObj)
    fetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify(blogObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            location.reload()
        } else {
            alert("Post Failed")
        }
    })
})