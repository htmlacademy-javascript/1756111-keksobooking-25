import {createAds, OFFER_AMOUNT} from './create-ads.js';
import {renderCard} from './popup.js';

console.log(createAds(OFFER_AMOUNT));

const map = document.querySelector('#map-canvas');

const ads = createAds(OFFER_AMOUNT);
const card = renderCard(ads[0]);

map.appendChild(card);
