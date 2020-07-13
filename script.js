// Set here all the given element that needed
const postList = document.querySelector('#post-list');
const postTitle = document.querySelector('.form-control#postTitle');
const postContent = document.querySelector('.form-control[name="postContent"]');
const author = document.querySelector('.form-control[name="postAuthor"]');
const PostImage = document.querySelector('.form-control[name="postImg"]');
const submitButton = document.querySelector(".btn.btn-primary");
const form = document.querySelector('#post-form');
const hideForm = document.querySelector("#show-form");

// Set to today during the post creation
const today = new Date();
const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

// Fuction for the new post
const newPost = () => {
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
            ${date}
            </div>
        </div>
    `;

    postList.insertAdjacentHTML('afterbegin', blogPost);

}

// Create an event listener for the submit button
submitButton.addEventListener('click', ($event) => {
    $event.preventDefault();



    if (postContent.value.split(' ').length < 20) {
        postContent.classList.add("is-invalid");
        blogPost[0].classList.add('invalid-feedback');
    }
    newPost(); 

    form.reset();


});

// Hide the form when click the hide button
hideForm.addEventListener('click', ($event) => {
    $event.preventDefault()
    form.classList.add('hidden')
});


// for (let i = 0; i < delteButton.length; i++) {
//     delteButton[i].addEventListener('click', ($event) => {
//         $event.preventDefault()
//         const deletCard = delteButton[i].parentElement.parentElement;
//       deletCard.style.display = 'none'
//     });
// }

