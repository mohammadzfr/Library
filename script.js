// DOM Elements
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const addBook = document.querySelector(".add-book");

// Event Listeners
addBook.addEventListener('click', function() {
  form.classList.remove("clear");
})

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pageCount = document.querySelector("#pages").value;
  let isRead = document.querySelector('input[name="read"]:checked').value;
  let book = new Book(title, author, pageCount, isRead);
  myLibrary[myLibrary.length] = book;
  console.log(myLibrary[myLibrary.length-1]);
  book.displayBook();
  console.log(title + author + pageCount + isRead);
  form.reset();
  form.classList.add("clear");
});

// Book stuff
let hungerGames = new Book('The Hunger Games', 'Suzanne Collins', 374, "Not read");
let harryPotter = new Book('Harry Potter', 'J.K. Rowling', 374, "Not read");
let myLibrary = [hungerGames, harryPotter];

function Book(title, author, pageCount, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // do stuff here

}

//loops through every book in myLibrary
function displayLibrary() {
  myLibrary.forEach(book => {
    book.displayBook()
  })
}

//inherits from book object and displays book on row
Book.prototype.displayBook = function() {
  const row = document.createElement('tr');
  const entryT = document.createElement('td');
  const entryA = document.createElement('td');
  const entryP = document.createElement('td');
  const entryR = document.createElement('td');
  tbody.appendChild(row);
  entryT.innerHTML = this.title;
  row.appendChild(entryT);
  entryA.innerHTML = this.author;
  row.appendChild(entryA);
  entryP.innerHTML = this.pageCount;
  row.appendChild(entryP);
  entryR.innerHTML = this.isRead;
  row.appendChild(entryR);
}

displayLibrary();