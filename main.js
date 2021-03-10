// - створити функцію яка виводить масив
// function arr(array) {
//     console.log(array);
// }
// arr([1, 2, 3]);

// - створити функцію яка заповнює масив рандомними числами та виводить його.
// Для виведення використати попвередню функцію.
// arr([Math.random(), Math.random(), Math.random()]);

// - створити функцію яка приймає три числа та виводить та повертає найменше.
// function min(a, b, c) {
// if (a < b && a < c) {
//     console.log(a);
//     return a;
// }else if (b < c && b < a) {
//     console.log(b);
//     return b;
// } else if (c < a && c < b) {
//     console.log(c);
//     return c;
// }
// }
// min(12, 5, 4222);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function max(a, b, c) {
// if (a > b && a > c) {
//     console.log(a);
//     return a;
// } else if (b > c && b > a) {
//     console.log(b);
//     return b;
// } else if (c > a && c > b) {
//     console.log(c);
//     return c;
// }
// }
// max(25, 54, 11111);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function maxMin(a, b, c, d) {
//     if (a > b && a > c && a > d) {
//         console.log(a);
//     } else if (b > a && b > c && b > d) {
//         console.log(b);
//     } else if (c > a && c > b && c > d) {
//         console.log(c);
//     } else if (d > a && d > b && d > c) {
//         console.log(d);
//     }
//     if (a < b && a < c && a < d) {
//         return a;
//     } else if (b < a && b < c && b < d) {
//         return b;
//     } else if (c < a && c < b && c < d) {
//         return c;
//     } else if (d < a && d < b && d < c) {
//         return d;
//     }
// }
// maxMin(2, 5, 3, 1);
//OR//
// function maxMin(a, b, c, d) {
//     console.log(Math.max(a, b, c, d));
//     return Math.min(a, b, c, d);
// }
// maxMin(22, 5, 3, 1);

// - створити функцію яка виводить масив
// function arr(array) {}
// arr([1, 2, 3]);

// - створити функцію, яка повертає найбільше число з масиву
// function arr(array) {
//     let max = array[0];
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     console.log(max);
//     return max;
// }
// arr([2533, 5, 4433334, 576849]);

// - створити функцію яка повертає найменьше число з масиву
// function arr(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     console.log(min);
//     return min;
// }
// arr([5, 333, 1, -5675]);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// function arr(array) {
// let sum = 0;
//     for (let element of array) {
//         sum += element;
//     }
//     console.log(sum);
//     return sum;
// }
// arr([5, 7, 1, 3]);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arr(array) {
// let average = 0;
//     for (let element of array) {
//         average += element
//     }
//     return average/array.length;
// }
// arr([4, 2, 1, 5, 7]);

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// function arr(array) {
//     return array.length;
// }
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// arr(usersWithId);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальну кількість полів в них
// function arr(array) {
//     let keys = 0;
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         let arrayElementKeys = Object.keys(arrayElement).length;
//         keys += arrayElementKeys;
//     }
//     console.log(keys);
//     return keys
// }
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// arr(usersWithId);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function arr(array, array1, sum) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array1.length; j++) {
//             if (i === j) {
//                 sum.push(array[i] + array1[j]);
//             }
//         }
//         }
//     console.log(sum);
//     return sum;
//     }
// arr([1,2,3,4], [2,3,4,5], []);
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [1, 22, 4, 3, 55];
// console.log(arr);
// function change(array, index) {
// if (index < array.length - 1) {
//     let element = array[index];
//     array[index] = array[index + 1];
//     array[index + 1] = element;
// }
// return array
// }
// console.log(change(arr, 2));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець масиву
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function elements(array) {
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         if (arrayElement === 0) {
//             array.splice(i, 1);
//             array.push(0);
//         }
//     }
//     console.log(array);
//     return array;
// }
// elements([1,0,6,0,3]);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addBlock(tagType, txt) {
//     let tag = document.createElement(tagType);
//     tag.innerText = txt;
//     document.body.appendChild(tag);
// }
// addBlock('div', 'Hello world');

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addBlock(tagType, txt) {
//     let tag = document.createElement(tagType);
//     tag.innerText = txt;
//     document.body.appendChild(tag);
// }
// addBlock('div', 'Hello world');

// - приймає масив автомобілів (можна взяти з попередніх дз),та  ідентифікатор елемнту в який потрібно додати
// список цих автомобілів.
// let cars = ['Toyota', 'Mazda', 'Lexus', 'BMW', 'Mercedez', 'Opel', 'Nissan', 'Chevrolet', 'Volkswagen'];
// function carsInId(array, divId) {
// let idBlock = document.createElement('div');
// idBlock.id = divId;
// document.body.appendChild(idBlock);
// idBlock.innerText = array;
// }
// carsInId(cars, 'target');

// Для кожного автомобіля створити свій блок, та додати його в елемент, ідентифікатор якого ви отримали.
// Всі властивості авто в обному блоці
// let cars = ['Toyota', 'Mazda', 'Lexus', 'BMW', 'Mercedez', 'Opel', 'Nissan', 'Chevrolet', 'Volkswagen'];
// function carsInBlocks(tagType, id) {
//     let mainBlock = document.createElement(tagType);
//     mainBlock.id = id;
//     document.body.appendChild(mainBlock);
//     let ul = document.createElement('ul');
//     mainBlock.appendChild(ul);
//     for (let i = 0; i < cars.length; i++) {
//         let car = cars[i];
//         let li = document.createElement('li');
//         li.innerText = car;
//         ul.appendChild(li);
//     }
// }
// carsInBlocks('div', 'target');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// let cars = [
//     car1 = {model : 'Toyota', year : 1999, strength : 1000020, color : 'white'},
//     car2 = {model : 'Mazda', year : 3456, strength : 335325, color :'brown'},
//     car3 = {model : 'Lexus', year : 2341, strength : 424523, color :'yellow'},
//     car4 = {model : 'BMW', year : 2135, strength : 352423, color :'red'},
//     car5 = {model : 'Mercedez', year : 1223, strength : 45235234, color :'black'},
//     car6 = {model : 'Opel', year : 1253, strength : 234523, color :'blue'},
//     car7 = {model : 'Nissan', year : 4353, strength : 432523, color :'grey'},
//     car8 = {model : 'Chevrolet', year : 3465, strength : 325432, color :'silver'},
//     car9 = {model : 'Renault', year : 4365, strength : 235423, color :'pink'},
//     car10 = {model : 'Volkswagen', year : 4523, strength : 3523, color :'green'}];
// function carsInBlocks(tagType, id) {
// let mainBlock = document.createElement(tagType);
// mainBlock.id = id;
// document.body.appendChild(mainBlock);
//     for (let i = 0; i < cars.length; i++) {
//         let car = cars[i];
//         let carInBlock = document.createElement(tagType);
//         mainBlock.appendChild(carInBlock);
//         let model = document.createElement(tagType);
//         model.innerText = car.model;
//         let year = document.createElement(tagType);
//         year.innerText = car.year;
//         let strength = document.createElement(tagType);
//         strength.innerText = car.strength;
//         let color = document.createElement(tagType);
//         color.innerText = car.color;
//         carInBlock.appendChild(model);
//         carInBlock.appendChild(year);
//         carInBlock.appendChild(strength);
//         carInBlock.appendChild(color);
//     }
// }
// carsInBlocks('div', 'target');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними
//  "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// function usersWithCities(array, array1) {
//     let userWithCities = [];
//     for (let i = 0; i < array.length; i++) {
//         let arrayElement = array[i];
//         for (let j = 0; j < array1.length; j++) {
//             let array1Element = array1[j];
//             if (arrayElement.id === array1Element.user_id) {
//                 array.address = array1Element;
//                 userWithCities.push(array)
//             }
//         }
//     }
//     console.log(userWithCities);
//     return userWithCities;
// }
// usersWithCities(usersWithId, citiesWithId);

// ***- беремо завдання з правилами з уроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// // Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
// let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
// 			];
// function rulesInBlocks(array, tagType) {
// let mainBlock = document.createElement(tagType);
// mainBlock.id = 'wrap';
// document.body.appendChild(mainBlock);
//     for (let rule of rules) {
//         let ruleBlock = document.createElement(tagType);
//         mainBlock.appendChild(ruleBlock);
//         let title = document.createElement(tagType);
//         title.innerText = rule.title;
//         ruleBlock.appendChild(title);
//         let body = document.createElement(tagType);
//         body.innerText = rule.body;
//         ruleBlock.appendChild(body);
//     }
// }
// rulesInBlocks(rules, 'div');
