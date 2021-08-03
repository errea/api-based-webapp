import './style.css';
import Logo from './img/logo.png';
import { displayCommentPopup } from './comments.js';

const button = document.querySelectorAll('[data-id="40995"]')[0];

button.addEventListener('click', (e) => {
  const movieId = e.target.getAttribute('data-id');
  displayCommentPopup(movieId);
});