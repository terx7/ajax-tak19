const bookIdInput = document.getElementById('book-id')

bookIdInput.addEventListener('change', e => {
    fetchBookData(e.currentTarget.value)
})

function fetchBookData(bookId) {
    fetch('http://localhost:8080/book.php?id=' + bookId)
        .then(res => {
            return res.json()
        })
        .then(book => {
            console.log(book)
        })
}
