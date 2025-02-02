const myLibrary = [];


// TEMP BOOKS FOR WIP
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read')
const intelligentDesign = new Book('Intelligent Design', 'William Dembski', 312, 'not read')
const atomicHabits = new Book('Atomic Habits', 'James Clear', 288, 'not read')
const theAlchemist = new Book('The Alchemist', 'Paulo Coelho', 208, 'not read')
const eatThatFrog = new Book('Eat That Frog', 'Brian Tracy', 144, 'not read')


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

myLibrary.push(theHobbit, intelligentDesign, atomicHabits, theAlchemist, eatThatFrog);

function toCamelCase(str) {
    return str.split(' ').map(function(word, index) {
        if (index == 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('')
}