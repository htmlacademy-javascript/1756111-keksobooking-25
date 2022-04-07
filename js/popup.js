import {} from './create-ads.js';

const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderCard = (ad) => {
  console.log(ad);
  const adElement = similarAdTemplate.cloneNode(true);

  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = ad.offer.price;
  adElement.querySelector('.popup__type').textContent = ad.offer.type;
  adElement.querySelector('.popup__text--capacity').textContent = ad.offer.checkin;
  adElement.querySelector('.popup__text--time').textContent = ad.offer.checkout;
  adElement.querySelector('.popup__features').textContent = ad.offer.features; //TODO тут небольшие проблемы
  adElement.querySelector('.popup__description').textContent = ad.offer.description;
  adElement.querySelector('.popup__photos').append = ad.offer.photos; //TODO тут небольшие проблемы
  adElement.querySelector('.popup__avatar').href = ad.author.avatar;

  return adElement;
};

export {renderCard};