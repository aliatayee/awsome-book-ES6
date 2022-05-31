const booksContainer = document.getElementById('books-container');
const bookContainer = document.querySelector('#books-container');

const makeaddButtonTemplate = (title, author, index) => {
  const bookCard = document.createElement('div');
  const bookInfo = document.createElement('div');
  bookInfo.classList.add('bookInfo');
  bookCard.classList.add('bookCard');
  bookCard.id = `${index}`;

  bookContainer.classList.remove('disappear');

  const h2 = document.createElement('h2');
  h2.innerText = title;
  bookInfo.append(h2);

  const h4 = document.createElement('h4');
  h4.innerText = `by ${author}`;
  bookInfo.append(h4);

  bookCard.append(bookInfo);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Remove';
  bookCard.append(deleteButton);

  booksContainer.append(bookCard);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
};

export default makeaddButtonTemplate;