// DOM Elements
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");
const addBook = document.querySelector(".add-book");
var btnCallRmv = document.querySelectorAll(".btn-rmv");
var btnCallEdit = document.querySelectorAll(".btn-edit");
// Event Listeners
console.log(btnCallEdit);
//when add book is clicked, open form
addBook.addEventListener('click', function() {
  form.classList.remove("clear");
  table.classList.add("clear");
});



//when form is submitted
form.addEventListener('submit', function(e) {
  e.preventDefault();
  addBookToLibrary();
});

// Book stuff
let hungerGames = new Book('The Hunger Games', 'Suzanne Collins', 374, "Not read");
let harryPotter = new Book('Harry Potter', 'J.K. Rowling', 374, "Not read");
let myLibrary = [hungerGames, harryPotter];

function Book(title, author, pageCount, isRead) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pageCount = Number(pageCount);
  this.isRead = isRead;
}

function addBookToLibrary() {
  //grabs values from completed form
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pageCount = document.querySelector("#pages").value;
  let isRead = document.querySelector('input[name="read"]:checked').value;
  let book = new Book(title, author, pageCount, isRead);

  //adds book to library
  myLibrary[myLibrary.length] = book;
  console.log(myLibrary[myLibrary.length-1]);

  //displays book in table
  book.displayBook();
  console.log(title + author + pageCount + isRead);

  //clear form
  form.reset();
  form.classList.add("clear");
  table.classList.remove("clear");

  clearLibrary();
  displayLibrary();
  
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
  const entryBtn1 = document.createElement('td');
  const entryBtn2 = document.createElement('td');
  const btnEdit = document.createElement('button');
  const btnRmv = document.createElement('button');
  const index = myLibrary.length - 1
  tbody.appendChild(row);
  entryT.innerHTML = this.title;
  row.appendChild(entryT);
  entryA.innerHTML = this.author;
  row.appendChild(entryA);
  entryP.innerHTML = this.pageCount;
  row.appendChild(entryP);
  entryR.innerHTML = this.isRead;
  row.appendChild(entryR);

  btnEdit.setAttribute("entry", index);
  btnRmv.setAttribute("entry", index);
  btnEdit.classList.add("btn-edit");
  btnRmv.classList.add("btn-rmv");
  btnEdit.innerHTML = "Edit Book";
  btnRmv.innerHTML = "Remove Book";
  entryBtn1.appendChild(btnEdit);
  row.appendChild(entryBtn1);
  
  entryBtn2.appendChild(btnRmv);
  row.appendChild(entryBtn2);

  btnCallRmv = document.querySelectorAll(".btn-rmv");
  btnCallEdit = document.querySelectorAll(".btn-edit");
  console.log(btnCallEdit);

  btnCallEdit.forEach(edit => edit.addEventListener('click', function() {
    console.log("test");
  }))
  btnCallRmv.forEach((rmv) => {
    rmv.addEventListener('click', () => {
      console.log("test");
    });
  });
}

function clearLibrary() {
  var node = document.querySelector("tbody");
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

displayLibrary();
// clearLibrary();