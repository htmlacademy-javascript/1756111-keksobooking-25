import {createAds, OFFER_AMOUNT} from './create-ads.js';

const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderCard = (ad) => {
  console.log({ad});
  const adElement = similarAdTemplate.cloneNode(true);

  return adElement;
};

export {renderCard};

/*
similarAds.forEach(({title, address, price, type, capacity, time, features, description, photos, avatar}) => {
  const adElement = similarAdTemplate.cloneNode(true);

  adElement.querySelector('.popup__title').textContent = title;
  adElement.querySelector('.popup__text--address').textContent = address;
  adElement.querySelector('.popup__text--price').textContent = price;
  adElement.querySelector('.popup__type').textContent = type;
  adElement.querySelector('.popup__text--capacity').textContent = capacity;
  adElement.querySelector('.popup__text--time').textContent = time;
  adElement.querySelector('.popup__features').textContent = features;
  adElement.querySelector('.popup__description').textContent = description;
  adElement.querySelector('.popup__photos').textContent.style.fill = photos;
  adElement.querySelector('.popup__avatar').textContent.style.fill = avatar;

  similarListFragment.appendChild(adElement);
});
*/
