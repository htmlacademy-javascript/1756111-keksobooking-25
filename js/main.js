const getRandomIntegerNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return 'Неверный диапазон переданных чисел'
  }

  const random = Math.floor(Math.random() * (max - min)) + min;
  return random;
};

function getRandomFractionNumber(min, max, fraction) {

  if (min < 0 || max < 0 || min >= max || fraction <= 0) {
    return 'Неверный диапазон переданных чисел'
  }

  let random = Math.random() * (max + (0.1 ** fraction) - min) + min;
  return random;

}

getRandomFractionNumber(1, 10)

let location = [
  lat: getRandomFractionNumber(35.65000, 35.70000, 5),
  lng: getRandomFractionNumber(139.70000, 139.80000, 5) //TODO Тут ругается на что то, подскажи пожалуйста, что не так
];

let author = {
  avatar: img/avatars/user{getRandomIntegerNumber(01,10)}.png //TODO Я не понимаю, как тут без новых функций сделать это
};

let offer = {
  title: ['Квартира в центре Токио', 'Дизайн в стле барокко', 'Новый дом из кирпича', 'Плавующий дом', 'Дом на дереве'],
  address: [location.lat, location.lng],
  price: getRandomIntegerNumber(200, 3000), //TODO Если не писать новую функцию, то я не знаю как иначе
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  rooms: getRandomIntegerNumber(1, 5), //TODO Если не писать новую функцию, то я не знаю как иначе
  guests: getRandomIntegerNumber(1, 8), //TODO Если не писать новую функцию, то я не знаю как иначе
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description:['Окна в полный рост','Без отделки','Домашний кинотеатр','Арабские ковры на стенах','Японские фонари'],
  photos:[https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg,
  https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg
  https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg]
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntegerNumber(0, elements.length - 1)];
};


const getRandomAds = () => { 
  return {
    author: author.avatar,
    title: getRandomArrayElement(offer.title),
    address: offer.address,
    price: offer.price,
    type: getRandomArrayElement(offer.type),
    rooms: offer.rooms,
    guests: offer.guests,
    checkin: getRandomArrayElement(offer.checkin),
    checkout: getRandomArrayElement(offer.checkout),
    features: getRandomArrayElement(offer.features),
    description: getRandomArrayElement(offer.description),
    photos: getRandomArrayElement(offer.photos),
    location: location
  };
};

const similarAds = Array.from(10, getRandomAds);