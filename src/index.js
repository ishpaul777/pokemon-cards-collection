import './css/style.css';
import addComment from './js/addComment.js';

import displayCards from './js/displayCards.js';
import displayPopup from './js/displayPopup.js';
import fetchApi from './js/fetchApi.js';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetchApi(20, 0);
  displayCards(response.results);
  displayPopup();
  addComment();
});
