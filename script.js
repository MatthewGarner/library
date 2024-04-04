//TODOs
    //Fix form submission when "cancel is clicked"

//DOM elements
//dialog
const dialog = document.querySelector("dialog");

//buttons
const addBookButton = document.querySelector('.add-button');
const submitFormButton = document.querySelector('.submit-form');
const closeModalButton = document.querySelector('.close-modal');
const bookDetailsForm = document.querySelector('.book-details-form');

//Initial Library for testing
const myLibrary = [
{title: 'Jean Bean', author: 'clarpo', pages: 100, isRead: false},
{title: 'Jean Bean', author: 'clarpo', pages: 100, isRead: false},
{title: 'Jean Bea', author: 'clarpo', pages: 100, isRead: false},
{title: 'Jean Bean', author: 'clarpo', pages: 100, isRead: true},
{title: 'Jean Bean', author: 'clarpo', pages: 100, isRead: false},
{title: 'Jean Bean', author: 'clarpo', pages: 100, isRead: false},
{title: 'Jean Bean', author: 'clarpo', pages: 100, isRead: false}
];

//Book Constructor
function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = false
}

Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
}

//Add listeners to elements
addBookButton.addEventListener('click', () => {
    dialog.showModal();
});

closeModalButton.addEventListener('click', () => {
    dialog.close();
});

submitFormButton.addEventListener('click', handleAddBookSubmission);


//Functions

//Create a new book and add it to the library
function addBookToLibrary(title, author, pageCount) {
    
  const newBook = new Book(title, author, pageCount);

  myLibrary.push(newBook);
  displayAllBooks();
  return myLibrary;
}

//Event handlers

function handleAddBookSubmission (e) {
    e.preventDefault();
    const formData = new FormData(e.target.form);
    const formProps = Object.fromEntries(formData);

    addBookToLibrary(formProps.title, formProps.author, formProps.pageCount);

    dialog.close();
    bookDetailsForm.reset();
}

function removeBookFromLibrary(e) {
    const indexToBeRemoved = e.target.dataset.index;

    myLibrary.splice(indexToBeRemoved, 1);
    displayAllBooks();
}

function handleReadStatusUpdate (e) {
    const indexToBeUpdated = e.target.dataset.index;

    myLibrary[indexToBeUpdated].isRead = !myLibrary[indexToBeUpdated].isRead;
    displayAllBooks();
}


//Create a book element for the UI from book obj
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    const titleAndAuthor = document.createElement('h2');
    titleAndAuthor.textContent = `${book.title} by ${book.author}`;

    const updateReadStatusButton = document.createElement('button');
    updateReadStatusButton.classList.add('update-read-status-button');

    const isRead = document.createElement('p');
    if (book.isRead) {
        isRead.textContent = 'Read it';
        updateReadStatusButton.textContent = 'Mark Unread';
    }
    else {
        isRead.textContent = 'Not read yet!';
        updateReadStatusButton.textContent = 'Mark Read';
    }
    
    const removeBookButton = document.createElement('button');
    removeBookButton.classList.add('remove-book-button');
    removeBookButton.textContent = 'Remove book';

    bookCard.appendChild(titleAndAuthor);
    bookCard.appendChild(isRead);
    bookCard.appendChild(updateReadStatusButton);
    bookCard.appendChild(removeBookButton);
    

    return bookCard;
}

//Render any books in the library as cards
function displayAllBooks() {
    const libraryContainer = document.querySelector('.library-container');
    libraryContainer.replaceChildren();

    myLibrary.forEach((book) => {
        const newCard = createBookCard(book);
        currentIndex = myLibrary.indexOf(book);

        removeButton = newCard.querySelector('.remove-book-button');
        removeButton.setAttribute('data-index', currentIndex);
        removeButton.addEventListener('click', removeBookFromLibrary);

        updateReadStatusButton = newCard.querySelector('.update-read-status-button');
        updateReadStatusButton.setAttribute('data-index', currentIndex);
        updateReadStatusButton.addEventListener('click', handleReadStatusUpdate);
        

        libraryContainer.appendChild(newCard);
    })
    
}

displayAllBooks();