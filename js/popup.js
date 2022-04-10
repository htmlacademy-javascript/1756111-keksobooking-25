const similarAdTemplate = document.querySelector('#card').content.querySelector('.popup');

const translationType = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель'
};

const renderCard = (ad) => {
  const adElement = similarAdTemplate.cloneNode(true);
  const featuresContainer = adElement.querySelector('.popup__features');
  const photosContainer = adElement.querySelector('.popup__photos');

  featuresContainer.innerHTML = '';
  photosContainer.innerHTML = '';

  adElement.querySelector('.popup__title').textContent = ad.offer.title;
  adElement.querySelector('.popup__text--address').textContent = ad.offer.address;
  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;
  adElement.querySelector('.popup__type').textContent =  translationType[ad.offer.title];
  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} для ${ad.offer.guests} гостей`;
  adElement.querySelector('.popup__text--time').textContent =`Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;
  adElement.querySelector('.popup__description').textContent = ad.offer.description;

  for (const feature of ad.offer.features) {
    const li = document.createElement('li');
    li.className = `popup__feature popup__feature--${feature}`;
    featuresContainer.appendChild(li);
  }

  for (const url of ad.offer.photos) {
    const image = document.createElement('img');
    image.src = url;
    image.className = 'popup__photo';
    image.width = 45;
    image.height = 40;
    image.alt = 'Фотография жилья'
    photosContainer.appendChild(image)
  }

  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  return adElement;
};

export {renderCard};
