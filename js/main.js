const TITLE = [
  'Квартира в центре Токио',
  'Дизайн в стле барокко',
  'Новый дом из кирпича',
  'Плавующий дом',
  'Дом на дереве',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Окна в полный рост',
  'Без отделки',
  'Домашний кинотеатр',
  'Арабские ковры на стенах',
  'Японские фонари',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const OFFER_AMOUNT = 10;

const minlat = 35.65000;
const maxlat = 35.70000;
const minlnt = 139.70000;
const maxlnt = 139.80000;


const getRandomIntegerNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return 'Неверный диапазон переданных чисел'
  }

  const random = Math.floor(Math.random() * (max - min)) + min;
  return random;
};

const getRandomFractionNumber = (min, max, fraction) => {
  if (min < 0 || max < 0 || min >= max || fraction <= 0) {
    return 'Неверный диапазон переданных чисел'
  }

  let random = Math.random() * (max + (0.1 ** fraction) - min) + min;
  return random;
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntegerNumber(0, elements.length - 1)];
};

const getRandomArrayElements = (elements) => {
  const array = [];

  for (let i = 0; i < getRandomIntegerNumber(1, elements.length); i++) {
    array.push(getRandomArrayElement(elements));
  }

  return array;
};

const createAd = (index) => {

  const location ={
    lat: getRandomFractionNumber(minlat, maxlat, 5),
    lng: getRandomFractionNumber(minlnt, maxlnt, 5)
  };

  return {
    author: {
      avatar: `img/avatars/user${(index + 1).toString().padStart(2, '0')}.png` //Через алерт тодже не работает
    },
    offer : {
      title: getRandomArrayElement(TITLE),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomIntegerNumber(0, 3000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomIntegerNumber(1, 5),
      guests: getRandomIntegerNumber(1, 8),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArrayElements(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElements(PHOTOS)
    },
    location: {
      lat: location.lat,
      lng: location.lng
    }
  };
};

const createAds = (count) => {
  const data = [];

  for (let i = 0; i < count; i++) {
    const ad = createAd(i);
    data.push(ad);
  }

  return data;
};

console.log (createAds(OFFER_AMOUNT))
