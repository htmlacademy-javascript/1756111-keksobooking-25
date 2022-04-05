import {createAds} from './create-ads';

const windowWithAnnouncements = document.querySelector('#map-canvas'); //как понял, нужно сюда вставлять
const similarListElement = windowWithAnnouncements.querySelector('#map-canvas');
const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarAds = createAds();

const similarListFragment = document.createDocumentFragment();

similarAds.forEach(({title, address, price, type, capacity, time, features, description, photos, avatar}) => {
  const adElement = similarAdTemplate.cloneNode(true);

  const TITLE = adElement.querySelector('.popup__title');
  const ADDRESS = adElement.querySelector('.popup__text--address');
  const PRICE = adElement.querySelector('.popup__text--price');
  const TYPE = adElement.querySelector('.popup__type');
  const CAPACITY = adElement.querySelector('.popup__text--capacity');
  const TIME = adElement.querySelector('.popup__text--time');
  const FEATURES = adElement.querySelector('.popup__features');
  const DESCRIPTION = adElement.querySelector('.popup__description');
  const PHOTOS = adElement.querySelector('.popup__photos');
  const AVATAR = adElement.querySelector('.popup__avatar');

  TITLE.textContent = title;
  ADDRESS.textContent = address;
  PRICE.textContent = price;
  TYPE.textContent = type;
  CAPACITY.textContent = capacity;
  TIME.textContent = time;
  FEATURES.textContent = features;
  DESCRIPTION.textContent = description;
  PHOTOS.textContent.style.fill = photos;
  AVATAR.textContent.style.fill = avatar;

  similarListFragment.appendChild(adElement);
});

similarListElement.appendChild(similarListFragment);


