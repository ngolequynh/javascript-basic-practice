// check if an object is empty {} or not
const isEmpty = object => (Object.keys(object).length === 0);

class BookList {
  constructor(nextBook = {}, currentBook = {}, lastReadBook = {}, booksList = []) {
    /* readBooks is assigned to the length of the new array from booksList array
    which passed the condition that read property is true */
    this.readBooks = booksList.filter(book => (book.read)).length;
    this.unreadBooks = booksList.length - this.readBooks;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastReadBook = lastReadBook;
    this.booksList = booksList;
  }

  /**
   * update readBooks and unreadBooks
   */
  updateBookList() {
    this.readBooks = this.booksList.filter(book => book.read === true).length;
    this.unreadBooks = this.booksList.length - this.readBooks;
  }

  setNextBook() {
    // assign nextBook to the first book in booksList which read property is false
    this.nextBook = this.booksList.find(firstUnreadBook => !(firstUnreadBook.read));
  }

  setCurrentBook(book) {
    if (book) {
      this.currentBook = book;
      this.currentBook.read = true;
    }
    this.updateBookList();
  }

  addBook(book) {
    this.booksList.push(book);
    if (isEmpty(this.nextBook)) {
      this.setNextBook();
    }
    this.updateBookList();
  }

  finishCurrentBook() {
    // finish current book and update read date
    this.currentBook.isFinished = true;
    this.currentBook.readDate = new Date(Date.now());

    // change the last read book to be the book just got finished
    this.lastReadBook = this.currentBook;

    // read new book
    this.setCurrentBook(this.nextBook);

    // assign next book
    this.setNextBook();
  }
}

class Book {
  constructor(title, genre, author, read, isFinished) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.isFinished = isFinished;
    this.readDate = new Date();
  }
}

const bookList = new BookList();

const bookA = new Book('book a', 'romantic', 'qngo', false, false);

const bookB = new Book('book b', 'science', 'qngo', false, false);

const bookC = new Book('book c', 'comedy', 'ngoquynh', false, false);

const bookD = new Book('book c', 'comedy', 'ngoquynh', false, false);

bookList.addBook(bookA);
bookList.addBook(bookB);
bookList.addBook(bookC);
bookList.addBook(bookD);

bookList.setCurrentBook(bookB);
console.log('Reading book b');
console.log(bookList);
console.log('-----------\n');

bookList.finishCurrentBook();
console.log('Finish current book');
console.log(bookList);
console.log('-----------\n');

bookList.finishCurrentBook();
console.log('Finish current book');
console.log(bookList);
console.log('-----------\n');
