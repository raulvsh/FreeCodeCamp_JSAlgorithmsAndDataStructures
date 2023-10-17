// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
// Change code below this line
function add(newBookList, bookName) {
    let bookList2 = []
    bookList2.push(...newBookList);
    bookList2.push(bookName);
    return bookList2;

    // Change code above this line
}

// Change code below this line
function remove(newBookList, bookName) {
    let bookList3 = []
    bookList3.push(...newBookList);
    const book_index = bookList3.indexOf(bookName);
    if (book_index >= 0) {

        bookList3.splice(book_index, 1);
        return bookList3;

        // Change code above this line
    }
}

//console.log(bookList.add(bookList, "nuevo libro"))
console.log(bookList)
console.log(add(bookList, "A Brief History of Time"))
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"))
console.log(bookList)

