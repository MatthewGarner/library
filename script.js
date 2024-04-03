//TODOs
    //Fix form submission when "cancel is clicked"

//DOM elements
//dialog
const dialog = document.querySelector("dialog");

//buttons
const addBookButton = document.querySelector('.add-button');
const submitFormButton = document.querySelector('.submit-form');
const closeModalButton = document.querySelector('.close-modal')
const bookDetailsForm = document.querySelector('.book-details-form')

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

//Event handlers
addBookButton.addEventListener('click', () => {
    dialog.showModal();
});

closeModalButton.addEventListener('click', () => {
    dialog.close()
});

submitFormButton.addEventListener('click', handleAddBookSubmission);

//Functions

//Create a new book and add it to the library
function addBookToLibrary() {
    
  let title = prompt("What's the book title?");
  let author = prompt("Who is the book's author?");
  let pageCount = prompt("How many pages?");

  const newBook = new Book(title, author, pageCount);

  myLibrary.push(newBook);
  displayAllBooks();
  return myLibrary;
}

function handleAddBookSubmission (e) {
    e.preventDefault();
    const formData = new FormData(e.target.form);
    const formProps = Object.fromEntries(formData);

    console.log(formData);
    console.log(formProps);
    dialog.close();
    bookDetailsForm.reset();

}



//Create a book element for the UI from book obj
function createBookCard(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    const titleAndAuthor = document.createElement('h2');
    titleAndAuthor.textContent = `${book.title} by ${book.author}`;
    bookCard.appendChild(titleAndAuthor);

    return bookCard;
}

//Render any books in the library as cards
function displayAllBooks() {
    const libraryContainer = document.querySelector('.library-container');
    libraryContainer.replaceChildren();

    myLibrary.forEach((book) => {
        const newCard = createBookCard(book);
        libraryContainer.appendChild(newCard);
    })
    
}

displayAllBooks();