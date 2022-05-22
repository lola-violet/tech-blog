const posts = document.querySelectorAll(".blog")
for (const post of posts) {
    post.addEventListener('click', e => {
        console.log(e.target.getAttribute('value'))
        location.href=`/blog/${e.target.getAttribute('value')}`;
    })
}