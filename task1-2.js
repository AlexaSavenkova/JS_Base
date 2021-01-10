// С замыканиями я не очень разобралась :(
// Вроде понимаю, как это работает в теории, 
// Но где это можно применить на практике (в частности в игре змейка) не очень понятно.
//  Но я все же пропробовала сделать хоть что-то похожее :
// из объекта game убрала метод canSetDirection(direction) 
// и сделала его вложенной функцией метода keyDownHandler(event)
// тогда не нужно будет передавать direction в качестве арнумента
// эта переменная будет в области видимости (в лексичееском окружении) функции canSetDirection.
// 

keyDownHandler(event) {
    // Если статус игры не "играем", значит обрабатывать ничего не нужно.
    if (!this.status.isPlaying()) {
        return;
    }
    // Получаем направление змейки, больше мы не обрабатываем других нажатий.
    const direction = this.getDirectionByCode(event.code);
    // Получаем прошлое направление змейки.
    const lastStepDirection = this.snake.getLastStepDirection();

    // Змейка не может повернуть на 180 градусов, поэтому делаем проверку, можем ли мы назначить направление.
    
    function canSetDirection() {
        
        // Если прошлое направление змейки не противоположное от direction, возвращаем true.
        return direction === 'up' && lastStepDirection !== 'down' ||
            direction === 'right' && lastStepDirection !== 'left' ||
            direction === 'down' && lastStepDirection !== 'up' ||
            direction === 'left' && lastStepDirection !== 'right';
    }

    if (canSetDirection()) {
        this.snake.setDirection(direction);
    }
},




// Задание 2

if (!("a" in window)) {
    var a = 1;
}
alert(a);
// Переменная, а создается до выполнения кода как свойстов объекта window
// т.к. объявляется через var
// значение после создания - undefined
// в if не зайдем (т.к. ключ "а" есть в window), поэтому присвоения  a=1 не будет 
// а так и останется undefined


var b = function a(x) {
    x && a(--x);
};
alert(a);

// Named Function Expression
// имя a доступно только изнутри самой функци
// при попытке обратиться к а снаружи будт ошибка a is not defined




function a(x) {
    return x * 2;
}
var a;
alert(a);
// глобальные функции и переменные, объявленные с помощью var, становятся 
// свойствами глобального объекта window  
// Если повторно объявить переменную, она не потеряет своего значения.
// следовательно, a останется функцией
// alert вернет текст функции



function b(x, y, a) {
    arguments[2] = 10;
    console.log(arguments[2]);
    alert(a);
}
b(1, 2, 3);
// 10   без 'use strict': в старом варианте arguments и переменные-параметры 
// ссылаются на одни и те же значения.
// 3  с использованием 'use strict': Аргументы отделены от локальных переменных




function a() {
    alert(this);
}
a.call(null);
// null в строгом режиме, т.к. 
// первый аргумент метода call становится  this вызываемой функции
// А в старом режиме , без use strict, при указании первого аргумента null или undefined 
// в call/apply, функция получает this = window