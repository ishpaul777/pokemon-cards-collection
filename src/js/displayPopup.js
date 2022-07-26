import addComment from './addComment.js';
import { typeColor } from './displayCards.js';
import displayComments from './displayComments.js';

const listsEl = document.querySelector('.card-collection');
const popupEl = document.querySelector('.details-page');
const overlay = document.querySelector('.overlay');
const closeBtnEl = document.querySelector('.close-btn');

const displayPopup = () => {
  listsEl.addEventListener('click', (event) => {
    const clicked = event.target.closest('.see-details');
    if (!clicked) return;
    fetch(clicked.dataset.url)
      .then((response) => response.json())
      .then((data) => {
        const pokemonName = data.species.name[0].toUpperCase() + data.species.name.substring(1);
        const pokeImgURL = data.sprites.other.dream_world.front_default;
        const locationEncounters = data.location_area_encounters;
        const statHp = data.stats[0].base_stat;
        const statAttack = data.stats[1].base_stat;
        const statDefense = data.stats[2].base_stat;
        const statSpecialAttack = data.stats[3].base_stat;
        const statSpecialDefense = data.stats[4].base_stat;
        const statSpeed = data.stats[5].base_stat;

        document.querySelector('.add-comment').dataset.item = data.species.name;
        displayComments(data.species.name);
        addComment();

        const abilitiesEl = document.querySelector('.abilities-pop');
        abilitiesEl.innerHTML = '';
        const { types } = data;

        let themeColor;
        if (types[0].type.name !== 'normal' || types[1] === undefined) {
          themeColor = typeColor[types[0].type.name];
        } else {
          themeColor = typeColor[types[1].type.name];
        }

        types.forEach((type) => {
          const formattedType = type.type.name[0].toUpperCase() + type.type.name.slice(1);
          const ability = document.createElement('span');
          ability.classList.add('ability');
          ability.innerHTML = formattedType;
          ability.style.background = themeColor;
          abilitiesEl.appendChild(ability);
        });

        fetch(locationEncounters)
          .then((response) => response.json())
          .then((data) => {
            const locationsEl = document.querySelector('.locations');
            locationsEl.innerHTML = '<h2>Top 3 Locations</h2>';

            if (data.length === 0) return;
            for (let i = 0; i < 3; i += 1) {
              const locationSplitted = data[i].location_area.name.split('-');
              const location = locationSplitted
                .map((loc) => loc[0].toUpperCase() + loc.slice(1))
                .join(' ');

              const html = `<h3 class="location">${location}</h3>`;
              locationsEl.insertAdjacentHTML('beforeend', html);
            }
          });

        document.querySelector('.modal-image').src = pokeImgURL;
        document.querySelector('.pokemon-name').textContent = pokemonName;
        document.querySelector('.hp-score--pop h3 .score').textContent = statHp;
        document.querySelector('.attack-score--pop h3 .score').textContent = statAttack;
        document.querySelector('.defense-score--pop h3 .score').textContent = statDefense;
        document.querySelector('.spl-attack-score--pop h3 .score').textContent = statSpecialAttack;
        document.querySelector('.spl-defense-score--pop h3 .score').textContent = statSpecialDefense;
        document.querySelector('.speed-score--pop h3 .score').textContent = statSpeed;
      });

    popupEl.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtnEl.addEventListener('click', () => {
    popupEl.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
};

export default displayPopup;
