const getRandomIntegerNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return 'Неверный диапазон переданных чисел'
  }

  const random = Math.floor(Math.random() * (max - min)) + min;
  return random;
};

getRandomIntegerNumber(1, 10);



function getRandomFractionNumber(min, max, fraction) {

  if (min < 0 || max < 0 || min >= max || fraction <= 0) {
    return 'Неверный диапазон переданных чисел'
  }

  let random = Math.random() * (max + (0.1 ** fraction) - min) + min;
  return random;

}

getRandomFractionNumber(1, 10)


const AUTHOR = [
  'Иван Петров',
  'Хуан Себастьянов',
  'Мария Пушкина',
  'Кристоф Колумб',
  'Виктор Дудка',
  'Юлия Путина',
  'Люпита Джугиашвили',
  'Вашингтон Петров',
];

/*avatar*/

const OFFER = [
  'До метро 15 минут пешком',
  'Последний этаж',
  'Окно выходит на парк',
  'Шумные соседи',
  'Скидка 10%',
];

const TITLE = [
  'Квартира в центре Токио',
  'Дизайк в стле барокко',
  'Новый дом из кирпича',
  'Плавующий дом',
  'Дом на дереве',
];

/*address*/

const PRICE = getRandomIntegerNumber(200, 3000); //TODO Если не писать новую функцию, то я не знаю как иначе

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const ROOMS = getRandomIntegerNumber(1, 5); //TODO Если не писать новую функцию, то я не знаю как иначе

const GUESTS = getRandomIntegerNumber(1, 8); //TODO Если не писать новую функцию, то я не знаю как иначе

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

/*description*/

/*photos*/

/*location*/
