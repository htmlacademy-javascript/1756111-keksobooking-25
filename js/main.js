const getRandomIntegerNumber = (min, max) => {
  if (min < 0 || max < 0 || min >= max) {
    return 'Неверный диапазон переданных чисел'
  }

  const random = Math.floor(Math.random() * (max - min)) + min;
  return random;
};

getRandomIntegerNumber(1, 10);

function degreeRandomNumber(min, max, fraction) {
  if (min>=0 && max>=0 && min > max && fraction >= 0) {
    random = Math.floor(Math.random()*(max - min))+min;


    console.log(random)
  }
}
