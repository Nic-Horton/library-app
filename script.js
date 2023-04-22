let myLibrary = [];
let newBook;

// Constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = 'by ' + author;
	this.pages = pages + ' pgs';
	this.read = read;
}

// Adds input from form and enters them into array after they become objects of Book
function addToLibrary() {
	event.preventDefault();
	let bookTitle = document.getElementById('title').value;
	let bookAuthor = document.getElementById('author').value;
	let bookPages = document.getElementById('pages').value;
	let bookRead = document.getElementById('read').checked;
	newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
	myLibrary.push(newBook);
	display();
	form.reset();
	closeForm();
}

// Displays each array index on HTML
function display() {
	const bookShelf = document.getElementById('bookShelf');
	const books = document.querySelectorAll('.card');
	books.forEach((card) => bookShelf.removeChild(card));
	for (i = 0; i < myLibrary.length; i++) {
		createCard(myLibrary[i]);
	}
}

// Function responsible for tying form input to JavaScript in order to output as HTML
function createCard(book) {
	const library = document.querySelector('#bookShelf');
	const cardDiv = document.createElement('div');
	const titleDiv = document.createElement('div');
	const authorDiv = document.createElement('div');
	const pagesDiv = document.createElement('div');
	const readBtn = document.createElement('button');
	const removeBtn = document.createElement('button');

	cardDiv.classList.add('card');
	cardDiv.setAttribute('id', myLibrary.indexOf(book));

	titleDiv.textContent = book.title;
	titleDiv.classList.add('title');
	cardDiv.appendChild(titleDiv);

	authorDiv.textContent = book.author;
	authorDiv.classList.add('author');
	cardDiv.appendChild(authorDiv);

	pagesDiv.textContent = book.pages;
	pagesDiv.classList.add('pages');
	cardDiv.appendChild(pagesDiv);

	readBtn.classList.add('readBtn');
	cardDiv.appendChild(readBtn);
	if (book.read === false) {
		readBtn.textContent = 'Not Read';
		readBtn.style.backgroundColor = '#e04f63';
	} else {
		readBtn.textContent = 'Read';
		readBtn.style.backgroundColor = '#63da63';
	}

	removeBtn.textContent = 'Remove';
	removeBtn.setAttribute('id', 'removeBtn');
	cardDiv.appendChild(removeBtn);

	library.appendChild(cardDiv);

	removeBtn.addEventListener('click', () => {
		myLibrary.splice(myLibrary.indexOf(book), 1);
		display();
	});

	readBtn.addEventListener('click', () => {
		book.read = !book.read;
		display();
	});
}

const bookShelf = document.getElementsByClassName('bookShelf');
const newBtn = document.getElementById('newBookBtn');

function openForm() {
	document.getElementById('bookForm').style.display = 'block';
}

function closeForm() {
	document.getElementById('bookForm').style.display = 'none';
}
