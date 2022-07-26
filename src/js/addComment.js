import INVOLVEMENT_URL from './config.js';
import displayComments from './displayComments.js';

const formEl = document.querySelector('.add-comment');
const { usernameEl, commentMsgEl } = formEl.elements;
const addComment = () => {
  formEl.addEventListener('submit', async (event) => {
    event.preventDefault();

    await fetch(`${INVOLVEMENT_URL}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: formEl.dataset.item,
        username: usernameEl.value,
        comment: commentMsgEl.value,
      }),
    });

    displayComments(formEl.dataset.item);
  });
};

export default addComment;
