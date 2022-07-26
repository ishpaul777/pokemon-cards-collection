import INVOLVEMENT_URL from './config.js';

const getStars = async (likeCountEL, pokemonName) => {
  const response = await fetch(`${INVOLVEMENT_URL}/likes`);
  const pokeStarsData = await response.json();
  // console.log(pokeStarsData)
  pokeStarsData.forEach((starData) => {
    if (starData.item_id === pokemonName) {
      likeCountEL.textContent = starData.likes;
    }
    const localStarData = JSON.parse(localStorage.getItem('StarData'));
    localStarData.forEach((pokemon) => {
      if (pokemon === pokemonName) {
        likeCountEL.parentElement.children[0].classList.add('active');
      }
    });
  });
};

export default getStars;
