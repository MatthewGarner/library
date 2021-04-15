//Global Vars
let myLibrary = [];

//target dynamic areas
const library = document.getElementById('books-library');
const showForm = document.getElementById('show-form');
const addBookForm = document.getElementById('add-new-book');
const addBookSubmit = document.getElementById('add-book');


//Object constructor
function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

//Key functions
function addBookToLibrary (title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
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
        pageSummary.textContent = `${book.pages} pages`

        const readStatusButton = document.createElement('button');
        
        if(book.isRead) {
            readStatusButton.textContent = 'Mark Unread';
            readStatusButton.classList.add('book-read');
        } else {
            readStatusButton.textContent = 'Mark Read';
            readStatusButton.classList.add('book-unread');
        }

        list.appendChild(bookSummary);
        list.appendChild(pageSummary);
        newBookCard.appendChild(list);
        newBookCard.appendChild(readStatusButton);
        return newBookCard;
}

function displayBooks () {
    library.textContent = '';

    myLibrary.forEach(book => {
        const newBookCard = createBookCard(book);
        library.appendChild(newBookCard);
    })
}

function toggleRead (book) {
    if (book.isRead) {
        book['isRead'] = false;
        
    } else {
        book['isRead'] = true;
    }
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
    const isRead = e.target.isRead.checked;

    addBookToLibrary(title, author, pages, isRead);

    addBookForm.reset();
    addBookForm.style.display = "none";
    showForm.style.display = "inline-block";
    displayBooks();
})

addBookToLibrary('Hamlet', 'Space', 400);
addBookToLibrary('Glemnar', 'Rete', 300);
displayBooks();