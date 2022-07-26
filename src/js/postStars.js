import INVOLVEMENT_URL from './config.js';

const postStars = async (pokemonName) => {
    fetch(INVOLVEMENT_URL+ `/likes`,{
        method: 'POST',
        body: JSON.stringify({
            "item_id": pokemonName
        }),
        headers: {
          'Content-type': 'application/json; charset=utf-8',
        },
      })
      return 
}

export default postStars