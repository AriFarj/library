const myLibrary = [];
const libraryGrid = document.querySelector('.library-grid')


// TEMP BOOKS FOR WIP
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true)
const intelligentDesign = new Book('Intelligent Design', 'William Dembski', 312, false)
const atomicHabits = new Book('Atomic Habits', 'James Clear', 288, false)
const theAlchemist = new Book('The Alchemist', 'Paulo Coelho', 208, true)



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, isRead = false) {
    const book = new Book(title, author, pages, isRead)
    myLibrary.push(book);
}

myLibrary.push(theHobbit, intelligentDesign, atomicHabits, theAlchemist);

function toCamelCase(str) {
    return str.split(' ').map(function (word, index) {
        if (index == 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('')
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

function addLibraryCard() {
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
    statusBtn.classList.add('status-notRead-btn')
    removeBtn.classList.add('btn')
    removeBtn.classList.add('remove-btn')

    libraryCardDiv.appendChild(p1);
    libraryCardDiv.appendChild(p2);
    libraryCardDiv.appendChild(p3);
    libraryCardDiv.appendChild(btnCtrlDiv);
    btnCtrlDiv.appendChild(statusBtn);
    btnCtrlDiv.appendChild(removeBtn);
    libraryGrid.appendChild(libraryCardDiv)
}