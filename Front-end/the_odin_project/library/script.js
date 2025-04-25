const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.querySelector('input[placeholder="Title"]').value;
    const author = document.querySelector('input[placeholder="Author"]').value;
    const pages = document.querySelector('input[placeholder="Pages"]').value;
    const read = document.querySelector('input[placeholder="Read"]').checked;

    if (!title || !author || !pages) {
        return;
    }

    myLibrary.push(new Book(title, author, pages, read));

    const booksListBody = document.getElementById('booksListBody');
    const book = document.createElement('div');
    book.classList.add('book');

    const bookTitle = document.createElement('div');
    bookTitle.textContent = title;
    book.appendChild(bookTitle);
    const bookAuthor = document.createElement('div');
    bookAuthor.textContent = author;
    book.appendChild(bookAuthor);
    const bookPages = document.createElement('div');
    bookPages.textContent = pages;
    book.appendChild(bookPages);
    const bookRead = document.createElement('div');
    bookRead.textContent = read ? 'Read' : 'Not Read';
    bookRead.classList.add(read ? 'read' : 'not-read');
    book.appendChild(bookRead);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        booksListBody.removeChild(book);
        myLibrary.splice(myLibrary.indexOf(new Book(title, author, pages, read)), 1);
    });
    book.appendChild(deleteButton);

    const readButton = document.createElement('button');
    readButton.textContent = read ? 'Not Read' : 'Read';
    readButton.addEventListener('click', () => {
        bookRead.textContent = read ? 'Not Read' : 'Read';
        bookRead.classList.toggle('read');
        bookRead.classList.toggle('not-read');
        myLibrary[myLibrary.indexOf(new Book(title, author, pages, read))].read = !read;
    });
    book.appendChild(readButton);

    booksListBody.appendChild(book);
}

const addBook = document.getElementById('addBook');
addBook.addEventListener('click', addBookToLibrary);
