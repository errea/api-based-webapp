import { getMovieById } from './moviesApi.js';
import { getComments, createComment } from './involvementApi.js';

const generatePopupContent = async (movie) => {
  const popup = document.getElementById('popup');
  document.body.style.backgroundColor = 'rgba(0,0,0,0.6)';
  popup.innerHTML = '';
  const image = movie.image?.medium ?? 'https://ultimateactionmovies.com/wp-content/uploads/2021/07/Eliminators-696x392.jpeg';

  const movieId = movie.id;
  const comments = await getComments(movieId);

  let commentBlock = '';

  popup.insertAdjacentHTML('beforeend', ` 
    <div class="popup-container">
      <div class="inner-content">
        <div class="photo-close">
          <img src="${image}" />
          <span type="button" class="close-popup"><i class="fas fa-times fa-2x"></i></span>
        </div>
        <h2>${movie.name}</h2>
        <div class="movie-description-1">
          <p>Type: ${movie.type}</p>
          <p>Language: ${movie.language}</p>
        </div>
        <div class="movie-description-2">
          <p>Status: ${movie.status}</p>
          <p>Premiered: ${movie.premiered}</p>
        </div>
        <div class="comments-display">
          ${commentBlock}
        </div>
        <div class="comment-create">
          <h3>Add a comment</h3>
          <input name="username" placeholder="Your name" />
          <textarea name="insights" rows="6">Your insights</textarea>
          <button comment-id="${movie.id}" class="btn-add-comment">Comment</button>
        </div>
      </div>
    </div>`);
  popup.style.display = 'block';
  const closeButton = document.getElementsByClassName('close-popup')[0];
  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    document.body.style.backgroundColor = 'rgba(0,0,0,0)';
  });

  const commentsDisplay = document.querySelectorAll(`[comment-id="${movie.id}"]`)[0]
    .parentElement.previousElementSibling;  
  
  if (comments.length > 0) {
    commentBlock += `<h3>Comments</h3>`;
    comments.forEach((comment) => {
      const date = comment.creation_date.split('-');
      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;
      commentBlock += `<p>${dateFormated} ${comment.username}: ${comment.comment}</p>`;
    });
  }
  commentsDisplay.insertAdjacentHTML('beforeend', commentBlock);

  updateCommentTitle(movie.id);

  const commentButton = document.querySelectorAll(`[comment-id="${movie.id}"]`)[0];
  commentButton.addEventListener('click', async (e) => {
    const commentObject = {
      item_id: Number(e.target.getAttribute('comment-id')),
      username: commentButton.previousElementSibling.previousElementSibling.value,
      comment: commentButton.previousElementSibling.value,
    };

    const result = await createComment(commentObject);

    if (result === 201) {
      const comments = await getComments(movieId);
      const lastComment = comments[comments.length - 1];
      const commentsDisplay = document.querySelectorAll(`[comment-id="${movie.id}"]`)[0]
        .parentElement.previousElementSibling;
      const date = lastComment.creation_date.split('-');
      const dateFormated = `${date[1]}/${date[2]}/${date[0]}`;
      
      if (comments.length === 1) {
        commentsDisplay.insertAdjacentHTML('beforeend', `
          <h3>Comments</h3>
          <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
        `);
      } else {
        commentsDisplay.insertAdjacentHTML('beforeend', `
          <p>${dateFormated} ${lastComment.username}: ${lastComment.comment}</p>
        `);
      }
      updateCommentTitle(movie.id);
    }
  });
};

const displayCommentPopup = async (id) => {
  const movie = await getMovieById(id);
  generatePopupContent(movie);
};

const calculateCommentsNumber = (commentId) => { 
  const commentsContent = document.querySelectorAll(`[comment-id="${commentId}"]`)[0]
    .parentElement.previousElementSibling.children;
  
  const commentsCount = [...commentsContent].filter(elem => elem.nodeName === "P").length;

  return commentsCount;
}

const updateCommentTitle = (id) => {
  const numberOfComments = calculateCommentsNumber(id);

  const commentsContent = document.querySelectorAll(`[comment-id="${id}"]`)[0]
    .parentElement.previousElementSibling.children;
  
  if (commentsContent.length > 0) {
    const commentTitle = [...commentsContent].filter(elem => elem.nodeName === "H3")[0];

    commentTitle.innerText = `Comments (${numberOfComments})`;
  }  
  
}

export default displayCommentPopup;