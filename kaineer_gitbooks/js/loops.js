/*
Задача 1. Напишите функцию isPlain, определяющую, является ли переданное целое положительное число — простым. Функция будет принимать один параметр number и возвращать true, если число — простое и false, если число делится на другое целое число без остатка. Например, числа 2, 3 и 5 являются простыми, а 9, 12 и 40 — не являются. В решении используйте цикл for. Чтобы проверить, является ли число простым, достаточно проверить, делится ли оно на числа от 2 до половины number (включительно) без остатка.
*/
var isPlain = function (number) {
    if (number % 2 == 0) {
        return number == 2;
    }
    var count = 0;
    for (var i = 3; i <= Math.floor(number / 2); i += 2) {
        if (number % i == 0) {
            count++;
        }
    }

    if (count > 0) {
        return false;
    } else {
        return true;
    }
}

console.log(isPlain(111));
console.log(isPlain(53));

/*
Задача 2. Напишите функцию fib, получающую на вход положительное целое число и возвращающую число фибоначчи с указанным номером. (Первое и второе числа фибоначчи: 1, начиная с третьего, число фибоначчи равно сумме двух предыдущих чисел). Необходимо выполнить задание, используя цикл.
*/

var fib = function (number) {
    if (number == 1 || number == 2) {
        return 1;
    }
    var num1 = 1;
    var num2 = 1;
    var _fib = 0;
    for (var i = 3; i <= number; i++) {
        _fib = num1 + num2;
        num1 = num2;
        num2 = _fib;
    }
    return _fib;
}

console.log(fib(7));

/*
Задача 3. Напишите функцию digitSumm, вычисляющую сумму цифр числа. Первый параметр функции — number. Для получения цифр используйте операцию получения остатка от деления %.
*/

var digitSumm = function (number) {
    var summ = 0;
    while (number > 0) {
        summ += number % 10;
        number = Math.floor(number / 10);
    }
    return summ;
}

console.log(digitSumm(12345));
