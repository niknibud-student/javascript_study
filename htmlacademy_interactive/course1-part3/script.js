let keys = document.querySelectorAll('.key');
let clear = document.querySelector('.clear');
let display = document.querySelector('.display');
//console.log(keys);

for (let key of keys) {
  key.onclick = function () {
    display.textContent += key.textContent;
  };
}

clear.onclick = function () {
    display.textContent = '';
}
/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

При клике на кнопку очистки весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
