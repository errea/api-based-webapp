import './style.css';
import Logo from './img/logo.png';
import  displayList from './list_movie.js';
import { displayCommentPopup } from './comments.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

const button = document.querySelectorAll('[data-id="40995"]')[0];

button.addEventListener('click', (e) => {
  const movieId = e.target.getAttribute('data-id');
  displayCommentPopup(movieId);
});
