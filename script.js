const showForm = document.querySelector('#show-form');
const formCard = document.querySelector('#form-card');
const postList = document.querySelector('#post-list');
const formElement = document.querySelector('#post-form');
const textareaErrorMessage = document.querySelector('#error-message');
const deleteBtns = document.querySelectorAll('.btn-delete');

const toggleForm = () => {
    if (formCard.classList.contains('hidden')) {
        formCard.classList.remove('hidden');
        showForm.textContent = 'Hide form';
    } else {
        formCard.classList.add('hidden');
        showForm.textContent = 'Add a post';
    }
};


const createNewPost = (form) => {

    const imgSrc = form.postImg.value;
    const postTitle = form.postTitle.value;
    const postAuthor = form.postAuthor.value;
    const postContent = form.postContent.value;
    const today = new Date();
    // Create HTML element
    return `
        <div class="card">
            <img class="card-img-top" src="${imgSrc}" alt="beautiful random image"/>
            <div class="card-body">
                <h5 class="card-title">${postTitle} <small>by ${postAuthor}</small></h5>
                <p class="card-text">${postContent}</p>
                <button type="button" class="btn btn-sm btn-light btn-delete">
                    Delete entry
                </button>
            </div>
            <div class="card-footer text-muted">
                ${today.toLocaleDateString()}
            </div>
        </div>
    `;
};


const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const postContent = form.postContent;
    const wordsLength = postContent.value.split(' ').length;
    if (wordsLength < 20) {
        postContent.classList.add('is-invalid');
        textareaErrorMessage.classList.remove('hidden');
    } else {

        const newPost = createNewPost(form);
        postList.insertAdjacentHTML('afterbegin', newPost);
        postContent.classList.remove('is-invalid');
        textareaErrorMessage.classList.add('hidden');
    }
    form.reset();
};

formElement.addEventListener('submit', handleSubmit);
const handleDelete = (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const deleteBtn = e.target;
        deleteBtn.closest('.card').remove();
    }
};

showForm.addEventListener('click', toggleForm);
document.addEventListener('click', handleDelete);