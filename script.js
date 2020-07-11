const postList = document.querySelector('#post-list');
const postTitle = document.querySelector('.form-control#postTitle');
const postContent = document.querySelector('.form-control[name="postContent"]');
const author = document.querySelector('.form-control[name="postAuthor"]');
const PostImage = document.querySelector('.form-control[name="postImg"]');
const submitButton = document.querySelector(".btn.btn-primary");
const form = document.querySelector('#post-form');
const hideForm = document.querySelector("#show-form");

submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();
    const blogPost = `
        <div class="card">
            <img
                class="card-img-top"
                src="${PostImage.value}"
                alt="Card image cap"
                width = "500"
                height = "200"
            />
            <div class="card-body">
                <h5 class="card-title">
                ${postTitle.value}
                <small>by ${author.value}</small>
                </h5>
                <p class="card-text">${postContent.value}</p>
                <button type="button" class="btn btn-sm btn-light btn-delete">
                    Delete entry
                </button>
            </div>

            <div class="card-footer text-muted">
            </div>
        </div>
    `;
    postList.insertAdjacentHTML('afterbegin', blogPost);
    form.reset();
});

hideForm.addEventListener('click', ($event) => {
    $event.preventDefault()
    form.classList.add('hidden')
});