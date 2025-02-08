const myLibrary = [];
const libraryGrid = document.querySelector('.library-grid')
const addBookBtn = document.querySelector('.btn-add-book')
const addBookForm = document.querySelector('.form-div')
const overlay = document.querySelector('.overlay')
const removeBtn = document.querySelector('.remove-btn')
const statusBtn = document.querySelector('.status')


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, isRead = false) {
    const book = new Book(title, author, pages, isRead)
    myLibrary.push(book);
    addLibraryCard(book);
}

const submitBook = document.forms['add-book'];
submitBook.addEventListener('submit', function (e) {
    e.preventDefault();
    const formTitle = submitBook.querySelector('input[id="title"]').value;
    const formAuthor = submitBook.querySelector('input[id="author"]').value;
    const formPages = submitBook.querySelector('input[id="pages"]').value;
    const formIsRead = submitBook.querySelector('input[id="isRead"]').checked;
    addBookToLibrary(formTitle, formAuthor, formPages, formIsRead)
    submitBook.reset()
});

function addLibraryCard(book) {
    const libraryCardDiv = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    const btnCtrlDiv = document.createElement('div');
    const statusBtn = document.createElement('button');
    const removeBtn = document.createElement('button')

    libraryCardDiv.classList.add('library-card')
    btnCtrlDiv.classList.add('button-control')
    statusBtn.classList.add('btn')

    removeBtn.classList.add('btn')
    removeBtn.classList.add('remove-btn')

    statusBtn.classList.add('status')
    addCardContent(book, p1, p2, p3);
    if (book.read) {
        statusBtn.classList.add('status-read-btn')
        statusBtn.textContent = 'Read'
    } else {
        statusBtn.classList.add('status-not-read-btn')
        statusBtn.textContent = 'Not read'
    }
    removeBtn.textContent = 'Remove'

    libraryCardDiv.appendChild(p1);
    libraryCardDiv.appendChild(p2);
    libraryCardDiv.appendChild(p3);
    libraryCardDiv.appendChild(btnCtrlDiv);
    btnCtrlDiv.appendChild(statusBtn);
    btnCtrlDiv.appendChild(removeBtn);
    libraryGrid.appendChild(libraryCardDiv)

    addBookForm.style.display = 'none';
    overlay.style.display = 'none';
    removeBtn.onclick = removeBook
    statusBtn.onclick = changeBookStatus;

}

function addCardContent(book, p1, p2, p3) {
    p1.textContent = book.title
    p2.textContent = book.author
    p3.textContent = book.pages
}

addBookBtn.addEventListener("click", () => {
    addBookForm.style.display = 'block';
    overlay.style.display = 'block';
})

document.addEventListener('click', (e) => {
    let clickedElem = e.target;
    if (clickedElem == overlay) {
        addBookForm.style.display = 'none';
        overlay.style.display = 'none';
    }
})

function removeBook(e) {
    e.target.parentNode.parentNode.remove()
}

function changeBookStatus(e) {
    if (e.target.textContent == 'Read') {
        e.target.classList.remove('status-read-btn')
        e.target.classList.add('status-not-read-btn')
        e.target.textContent = 'Not read'
    } else {
        e.target.classList.add('status-read-btn')
        e.target.classList.remove('status-not-read-btn')
        e.target.textContent = 'Read'
    }
}