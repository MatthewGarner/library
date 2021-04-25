//Global Vars
let myLibrary = [];

//target dynamic areas
const library = document.getElementById('books-library');
const showForm = document.getElementById('show-form');
const addBookForm = document.getElementById('add-new-book');
const addBookSubmit = document.getElementById('add-book');


//Object constructor
//Refactor as class

class Book {
    constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    }

    toggleRead() {
    if (this.isRead) {
        this.isRead = false;
    } else {
        this.isRead = true;
    };  
    }
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
        newBookCard.setAttribute('id', myLibrary.indexOf(book));


        const list = document.createElement('ul');
        list.classList.add('title');

        const Title = document.createElement('li');
        Title.textContent = book.title;

        const authorName = document.createElement('li');
        authorName.textContent = `by ${book.author}`;

        const pageSummary = document.createElement('li');
        pageSummary.textContent = `${book.pages} pages`

        const readStatusButton = document.createElement('button');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        
        if(book.isRead) {
            readStatusButton.textContent = 'Mark Unread';
            readStatusButton.classList.add('book-read');
        } else {
            readStatusButton.textContent = 'Mark Read';
            readStatusButton.classList.add('book-unread');
        }

        list.appendChild(Title);
        list.appendChild(authorName);
        list.appendChild(pageSummary);
        newBookCard.appendChild(list);
        newBookCard.appendChild(readStatusButton);
        newBookCard.appendChild(removeButton);

        readStatusButton.addEventListener('click', () => {
            book.isRead = !book.isRead;
            displayBooks();
        })

        removeButton.addEventListener('click', () => {
            const bookLoc = myLibrary.indexOf(book);
            myLibrary.splice(bookLoc, 1);

            displayBooks();
        })

        return newBookCard;
}

function displayBooks () {
    library.textContent = '';

    myLibrary.forEach(book => {
        const newBookCard = createBookCard(book);
        library.appendChild(newBookCard);
    })
}

function findBookInArray (index) {

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

addBookToLibrary('Hamlet', 'Space', 400, false);
addBookToLibrary('Glemnar', 'Rete', 300, true);



const books1 = myLibrary[0];
const booksLoc = myLibrary.indexOf(books1);

console.log(booksLoc);
books1.toggleRead();



displayBooks();