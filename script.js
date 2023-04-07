let myLibrary = [];
let newBook;

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addToLibrary() {
	newBook = new Book(
		prompt('title'),
		prompt('author'),
		prompt('pages'),
		prompt('read')
	);
	myLibrary.push(newBook);
}

function display() {
	for (i = 0; i < myLibrary.length; i++) {
		console.log(myLibrary[i]);
	}
}
