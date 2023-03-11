window.onload = function() {
    fetch('https://upadhayay.github.io/db.json')
      .then(response => response.json())
      .then(data => {
        const booksList = data.books.map(book => `<li>
          (${book.year}) - Published: ${book.published}${book.author ? ` - Author: ${book.author}` : ''}
        </li>`).join('');
        document.getElementById('paper-data').innerHTML = booksList;
      })
      .catch(error => console.log(error));
  };