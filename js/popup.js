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
  adElement.querySelector('.popup__description').textContent = ad.offer.description;

  for (let feature of ad.offer.features) {
    const li = document.createElement('li');
    li.className = `popup__feature popup__feature--${feature}`;
    adElement.querySelector('.popup__features').appendChild(li);
  }

console.log(ad.offer.photos);

  for (let url of ad.offer.photos) {
    const image = document.createElement('img');
    image.src = url;
    image.className = 'popupphoto';
    image.width = '45';
    image.height = '40';
    image.alt = 'Фотография жилья'
    adElement.querySelector('.popup__photos').appendChild(image)
  }

  adElement.querySelector('.popup__avatar').href = ad.author.avatar;

  return adElement;
};

export {renderCard};