import './css/style.css';

import displayCards from './js/displayCards.js';
import fetchApi from './js/fetchApi.js';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetchApi(20, 0);
  displayCards(response.results);
});