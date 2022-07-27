import fetchApi from '../js/fetchApi.js';
import displayCards from '../js/displayCards.js';
import displayPopup from '../js/displayPopup.js';

// Test counter of total cards should be equal to no. of cards
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

// Test counter of total comments should be equal to no. of comments
describe('Test counter of total comments should be equal to no. of comments', () => {
  test('Checking comments counter', () => {
    document.addEventListener('DOMContentLoaded', async () => {
      const response = await fetchApi(20, 0);
      displayCards(response);
      displayPopup();
      const FirstCard = document.querySelector('.card');
      const FirstCardBtn = FirstCard.querySelector('.see-details');
      FirstCardBtn.click();
      const comments = document.querySelectorAll('.comments');
      const commentsCounter = document.querySelector('.comments-counter');
      expect(commentsCounter).toMatch(`Comments (${comments.length})`);
    });
  });
});
