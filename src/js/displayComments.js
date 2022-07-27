import INVOLVEMENT_URL from './config.js';

const commentsEl = document.querySelector('.all-comments');

const displayComments = (item) => {
  const commentsHead = '<h2 class="comments-counter">Comments</h2>';
  commentsEl.innerHTML = commentsHead;

  fetch(`${INVOLVEMENT_URL}/comments?item_id=${item}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) return;
      document.querySelector('.comments-counter').innerHTML = `Comments (${data.length || 0})`;

      data.forEach((comment) => {
        const contentHTML = document.createElement('div');
        contentHTML.classList.add('comment');
        contentHTML.innerHTML = `
          <div class="comment-head">
          <a href='https://github.com/${comment.username}'>${comment.username}</a>
          <p class="date-posted">-${comment.creation_date}</p>
          </div>
          <p>${comment.comment}</p>`;
        commentsEl.appendChild(contentHTML);
      });
    });
};

export default displayComments;
