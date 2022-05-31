import Book from './modules/book.js';
import pageLoad from './modules/pageLoad.js';
import dateTime from './modules/dateTime.js';

dateTime();
pageLoad();

const submitButton = document.getElementById('submit');
const formContainer = document.querySelector('.formContainer');
const bookContainer = document.querySelector('#books-container');
const contact = document.querySelector('.contact');
const addNew = document.querySelector('#add_new');
const ButtonContact = document.querySelector('#contact');
const BookList = document.querySelector('#book_list');

submitButton.addEventListener('click', Book.addButton);

addNew.addEventListener('click', () => {
  bookContainer.classList.add('disappear');
  contact.classList.add('disappear');
  formContainer.classList.remove('disappear');
});

ButtonContact.addEventListener('click', () => {
  bookContainer.classList.add('disappear');
  contact.classList.remove('disappear');
  formContainer.classList.add('disappear');
});

BookList.addEventListener('click', () => {
  bookContainer.classList.remove('disappear');
  contact.classList.add('disappear');
  formContainer.classList.add('disappear');
});