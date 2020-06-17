var calculateSumOfDigits = function (number) {
  var sum = 0;

  while (number > 0) {
    sum += number % 10;
    number = Math.trunc(number / 10);
  }
  return sum;
}

var getYears = function (startYear, endYear, sumOfDigits) {
  var years = [];

  for (var i = startYear; i <= endYear; i++) {
    if (calculateSumOfDigits(i) == sumOfDigits) {
      years.push(i);
    }
  }

  return years;
}

console.log(getYears(2018, 2045, 11));

  /* Техническое задание

  Мяу! Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.

  Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.

  Названия параметров могут быть любыми.

  Годы в массиве должны быть числами и располагаться по возрастанию, от меньшего к большему.

  */
