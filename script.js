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
{title: 'Jean Bean', author: 'clarpo', pages: 100},
{title: 'Jean Bean', author: 'clarpo', pages: 100},
{title: 'Jean Bea', author: 'clarpo', pages: 100},
{title: 'Jean Bean', author: 'clarpo', pages: 100},
{title: 'Jean Bean', author: 'clarpo', pages: 100},
{title: 'Jean Bean', author: 'clarpo', pages: 100},
{title: 'Jean Bean', author: 'clarpo', pages: 100}
];

//Book Constructor
function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = false
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


//Create a book element for the UI from book obj
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    const titleAndAuthor = document.createElement('h2');
    titleAndAuthor.textContent = `${book.title} by ${book.author}`;

    const removeBook = document.createElement('button');
    removeBook.classList.add('remove-book-button');

    bookCard.appendChild(titleAndAuthor);
    bookCard.appendChild(removeBook);

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
        removeButton.textContent = 'Remove book';

        libraryContainer.appendChild(newCard);
    })
    
}

displayAllBooks();