import storage from './storage.js';
import makeaddButtonTemplate from './makeaddButtonTemplate.js';
import bookCollection from './bookCollection.js';

const formContainer = document.querySelector('.formContainer');
const pageLoad = () => {
  if (storage.length > 0) {
    for (let i = 0; i < storage.length; i += 1) {
      makeaddButtonTemplate(storage[i].title, storage[i].author, storage[i].index);

      /* REMOVE FUNCTION */
      // eslint-disable-next-line no-loop-func
      const removeButton = () => {
    
        const bookCard = document.getElementById(`${storage[i].index}`);
        bookCard.remove();
        // seperator.parentNode.removeChild(seperator);
        localStorage.setItem('books', JSON.stringify(bookCollection));
      };

      document.getElementById(`${storage[i].index}`).addEventListener('click', removeButton);
    }
  } else {
    formContainer.classList.remove('disappear');
  }
};

export default pageLoad;