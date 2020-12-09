'use strict';

function сelsiusToFahrenheit(c) {
    let f = c * 1.8 + 32;
    return f.toFixed(2);
}


function task1() {
    let answer = +prompt('Введите градусы по Цельсию (или пустую строку для 0): ');

    while (isNaN(answer)) {
        answer = +prompt('Это не число. Повторите ввод градусов по Цельсию (или пустую строку для 0): ');
    }

    alert(`${answer} C равно ${сelsiusToFahrenheit(answer)} F`);
}


function task2() {
    let name = '';
    let admin = '';
    name = 'Василий';
    admin = name;
    console.log(admin);
}

task1();
task2();

// JS-выражение 1000 + "108" вернет строку '1000108'

// Скрипты c атрибутами async и defer не блокируют загрузку страницы

// Скрипты с defer :
//      - всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded
//      - сохраняют порядок относительно друг друга, т.е. выполняются в том порядке, как были записаны;

// Скрипты с async :
//      - Событие DOMContentLoaded и асинхронные скрипты не ждут друг друга;
//      - могут выполняться в любом порядке. То, что первое загрузится – запустится в первую очередь;