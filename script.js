//Global Vars
let myLibrary = [];

//target dynamic areas
const library = document.getElementById('books-library');
const showForm = document.getElementById('show-form');
const addBookForm = document.getElementById('add-new-book');
const addBookSubmit = document.getElementById('add-book');


//Object constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Key functions
function addBookToLibrary (title, author, pages) {
    const newBook = new Book(title, author, pages);
    //add book to library array
    myLibrary.push(newBook);
}

function createBookCard (book) {
    const newBookCard = document.createElement('div');
        newBookCard.classList.add('book-card');
        
        const list = document.createElement('ul');
        list.classList.add('book-details');
        const bookSummary = document.createElement('li');
        bookSummary.textContent = `${book.title} by ${book.author}`

        const pageSummary = document.createElement('li');
        pageSummary.textContent = `${book.pages} pages long`

        list.appendChild(bookSummary);
        list.appendChild(pageSummary);
        newBookCard.appendChild(list);
        return newBookCard;
}

function displayBooks () {
    library.textContent = '';

    myLibrary.forEach(book => {
        const newBookCard = createBookCard(book);
        library.appendChild(newBookCard);
    })
}

showForm.addEventListener('click', () => {
    addBookForm.style.display = "block";
    showForm.style.display = "none";
})

addBookForm.addEventListener('submit', e => {
    e.preventDefault();

    const title = e.target.elements.title.value;
    const author = e.target.elements.author.value;
    const pages = e.target.elements.pages.value;

    addBookToLibrary(title, author, pages);
    
    addBookForm.reset();
    addBookForm.style.display = "none";
    showForm.style.display = "inline-block";
    displayBooks();
})

addBookToLibrary('Hamlet', 'Space', 400);
addBookToLibrary('Glemnar', 'Rete', 300);
displayBooks();