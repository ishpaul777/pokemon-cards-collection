import INVOLVEMENT_URL from './config.js';

const commentsEl = document.querySelector('.all-comments');

const displayComments = (item) => {
  fetch(`${INVOLVEMENT_URL}/comments?item_id=${item}`)
    .then((response) => response.json())
    .then((data) => {
      commentsEl.innerHTML = '<h2 >Comments</h2>';
      data.forEach((comment) => {
        const html = `<p>${comment.username} ${comment.comment}</p>`;
        commentsEl.insertAdjacentHTML('beforeend', html);
      });
    });
};

export default displayComments;
