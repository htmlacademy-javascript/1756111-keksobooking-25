let min;
let max;
let fraction;
let random;

function randomNumber(min, max) { //Случайное число от / до
  if (min>=0 && max>=0 && min > max) { // Если у нас мин и макс неотрицательные и минимум не больше макса, выполняется условие
    random = Math.floor(Math.random()*(max - min))+min; //Я не совсем понимаю принцип выполнения, но в лерн жс и девелопер так считается случайное число
  }
  console.log(random) // выводим случайное число
}

function degreeRandomNumber(min, max, fraction) {  //Случайное число от / до / знаков после запятой
  if (min>=0 && max>=0 && min > max && fraction >= 0) { // Если у нас мин и макс неотрицательные и минимум не больше макса и знаков больше нуля, выполняется условие
    random = Math.floor(Math.random()*(max - min))+min; // Я не понимаю, как указать, сколько разрешено нулей после запятой

    // была идея взять fraction = (Math.pow (10,fraction)) и посчитать сколько нулей, но я смотрел в гугле, там вообще неизвестные для меня команды
    console.log(random) // выводим случайное число
  }
}
