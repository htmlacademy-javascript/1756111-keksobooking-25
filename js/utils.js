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

export {getRandomIntegerNumber, getRandomFractionNumber, getRandomArrayElement, getRandomArrayElements};
