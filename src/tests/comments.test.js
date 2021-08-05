/**
 * @jest-environment jsdom
 */
const { expect, test } = require('@jest/globals');

describe('Comments adding feature', () => {
  // Arrange --------------------------------------------------------------------------->
  document.body.innerHTML = `
    <div class="popup-container">
      <div class="inner-content">
        <div class="photo-close">
          <img src="custom image" />
          <span type="button" class="close-popup"><i class="fas fa-times fa-2x"></i></span>
        </div>
        <h2>Custom movie name</h2>
        <div class="movie-description-1">
          <p>Type: Custom movie type</p>
          <p>Language: Custom movie language</p>
        </div>
        <div class="movie-description-2">
          <p>Status: Custom movie status</p>
          <p>Premiered: Custom movie premiered</p>
        </div>
        <div class="comments-display">
          <h3>Comments</h3>
        </div>
        <div class="comment-create">
          <h3>Add a comment</h3>
          <input name="username" placeholder="Your name" />
          <textarea name="insights" rows="6">Your insights</textarea>
          <button comment-id="40955" class="btn-add-comment">Comment</button>
        </div>
      </div>
    </div>
  `;

  const calculateCommentsNumber = (commentId) => {
    const commentsContent = document.querySelectorAll(`[comment-id="${commentId}"]`)[0]
      .parentElement.previousElementSibling.children;
  
    const commentsCount = [...commentsContent].filter((elem) => elem.nodeName === 'P').length;
  
    return commentsCount;
  };
  
  const updateCommentTitle = (id) => {
    const numberOfComments = calculateCommentsNumber(id);
  
    const commentsContent = document.querySelectorAll(`[comment-id="${id}"]`)[0]
      .parentElement.previousElementSibling.children;
  
    if (commentsContent.length > 0) {
      const commentTitle = [...commentsContent].filter((elem) => elem.nodeName === 'H3')[0];
  
      commentTitle.innerText = `Comments (${numberOfComments})`;
    }
  };
   
 
  //  Act --------------------------------------------------------------------------->

  // updateCommentTitle(40955);

  const checkNumberOfComments = (id) => {
    return calculateCommentsNumber(id);
  }


  //  Assert --------------------------------------------------------------------------->
  test('if has 0 comments on initialization', () => {
    expect(checkNumberOfComments(40955)).toBe(0);
  });
});
