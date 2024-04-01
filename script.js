const myLibrary = [
{title: 'Jean Bean', author: 'clarpo', pages: 100},
{title: 'Jean Bean', author: 'clarpo', pages: 100},
{title: 'Jean Bean', author: 'clarpo', pages: 100},
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


function addBookToLibrary() {
    //Create a new book and add it to the library
  let title = prompt("What's the book title?");
  let author = prompt("Who is the book's author?");
  let pageCount = prompt("How many pages?");

  const newBook = new Book(title, author, pageCount);

  myLibrary.push(newBook);
  displayAllBooks();
  return myLibrary;
}

function createBookCard(book) {
    //take a book object and create a book element for the UI
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    const titleAndAuthor = document.createElement('h2');
    titleAndAuthor.textContent = `${book.title} by ${book.author}`;
    bookCard.appendChild(titleAndAuthor);

    return bookCard;
}

function displayAllBooks() {
    const libraryContainer = document.querySelector('.library-container');
    libraryContainer.replaceChildren();

    myLibrary.forEach((book) => {
        const newCard = createBookCard(book);
        libraryContainer.appendChild(newCard);
    })
    //iterate over array of books
    //for each - display on the page
}

displayAllBooks();