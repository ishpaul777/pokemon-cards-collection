import fetchApi from '../js/fetchApi.js';
import displayCards from '../js/displayCards.js';
// import displayPopup from '../js/displayPopup.js'; uncomment this

describe('Test counter of total cards should be equal to no. of cards', () => {
  test('Checking counter', () => {
    document.addEventListener('DOMContentLoaded', async () => {
      const response = await fetchApi(20, 0);
      displayCards(response);
      const cardCollection = document.querySelectorAll('.card');
      const cardCounter = document.querySelector('.card-counter').innerHTML;
      expect(cardCounter).toBe(cardCollection.length);
    });
  });
});

// Add your counter test here-
