let myLibrary = [];
let newBook;

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addToLibrary() {
	event.preventDefault();
	let bookTitle = document.getElementById('title').value;
	let bookAuthor = document.getElementById('author').value;
	let bookPages = document.getElementById('pages').value;
	let bookRead = document.getElementById('read').checked;
	newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
	myLibrary.push(newBook);
	form.reset();
	closeForm();
}

function display() {
	for (i = 0; i < myLibrary.length; i++) {
		console.log(myLibrary[i]);
	}
}

const bookShelf = document.getElementsByClassName('bookShelf');
const newBtn = document.getElementById('newBookBtn');

function openForm() {
	document.getElementById('bookForm').style.display = 'block';
}

function closeForm() {
	document.getElementById('bookForm').style.display = 'none';
}
