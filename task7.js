'use strict';
// При сравнении значений разных типов JavaScript приводит каждое из них к числу.
// null  преобразуется в 0
console.log(null > 0); //false
console.log(null >= 0); // true
console.log(null < 0); // false
console.log(null <= 0); // true


// для строгого равенства должны совпадать типы данных 
// 0 - это число,  null -  тип данных null
console.log(null === 0); //false
console.log(null !== 0); // true

//  при нестрогом равенстве существует специальное правило
// null и undefined  равны друг другу и не равны никаким другим значениям.
console.log(null == 0); //false
console.log(null != 0); // true