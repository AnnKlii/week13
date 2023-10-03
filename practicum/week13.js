// //Задание 1
// // Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
// const currentDate = new Date();
// console.log(currentDate);

// //Задание 2
// // Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
// const currentYear = new Date().getFullYear();
// console.log(currentYear);

// //Задание 3
// // Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
// const currentMonth = new Date().getMonth();
// console.log(currentMonth);

// //Задание 4
// // Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
// const currentDay = new Date().getDate();
// console.log(currentDay);

// //Задание 5
// // Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
// const birthday = new Date(2023, 11, 27);
// console.log(birthday);

// //Задание 6
// // Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
// const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate() + 10);
// console.log(futureDate);

// //Задание 7
// // Выведите в консоль разницу в днях между futureDate и currentDate
// function diffFutureCurrentDate() {
//     const diff = futureDate - currentDate;
//     return Math.round(diff / (1000 * 60 * 60 * 24));
// }
// console.log(diffFutureCurrentDate());

// //Задание 8
// // Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
// const pastDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 5);
// console.log(pastDate);


// //Задание 9
// // Выведите в консоль разницу в днях между currentDate и pastDate
// function diffPastCurrentDate() {
//     const diff = currentDate - pastDate;
//     return Math.round(diff / (1000 * 60 * 60 * 24));
// }
// console.log(diffPastCurrentDate());

// //Задание 10
// // Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
// const nextWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
// console.log(nextWeek);

// //Задание 11
// // Выведите в консоль день недели для nextWeek
// console.log(nextWeek.getDay());

// //Задание 12
// // Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
// const futureYear = new Date(currentDate.getFullYear() + 5, currentDate.getMonth(), currentDate.getDate());
// console.log(futureYear);

// //Задание 13
// // Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
// const futureDateInFutureYear = new Date(birthday.getFullYear() + 1, birthday.getMonth(), birthday.getDate());
// console.log(futureDateInFutureYear);

// //Задание 14
// // Выведите в консоль разницу в годах между futureYear и текущим годом
// function diffFutureCurrentYear() {
//     const year1 = futureYear.getFullYear();
//     const year2 = currentDate.getFullYear();
//     return Math.round(year1 - year2);
// }
// console.log(diffFutureCurrentYear());
// //Задание 15
// // Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// // Выведите объект date в консоль.
// const strDate = '2023-06-15T08:30:00.000Z';
// const dateFifteen = new Date(Date.parse(strDate));
// console.log(dateFifteen);
// //Задание 16
// // Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// // Выведите таймстамп в консоль.
// const msec = Date.parse(strDate);
// console.log(msec);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
    console.log('Переменная является положительным числом');
} else {
    console.log('Переменная не является положительным числом');
}
//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0) {
    console.log('Переменная является четным числом');
} else {
    console.log('Переменная не является четным числом');
}
//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {
    console.log('Переменная кратна трём');
} else {
    console.log('Переменная не кратна трём');
}
//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number > 0 && number < 10) {
    console.log('Переменная является однозначным числом');
} else {
    console.log('Переменная не является однозначным числом');
}
//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number > 9 && number < 100) {
    console.log('Переменная является двузначным числом');
} else {
    console.log('Переменная не является двузначным числом');
}
//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0) {
    console.log('Переменная является положительным числом');
} else if (number === 0) {
    console.log('Переменная является нулем');
} else {
    console.log('Переменная является отрицательным числом');
}
//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 === 0 && number % 7 === 0) {
    console.log('Переменная кратна пяти и семи');
} else if (number % 5 === 0 && number % 7 !== 0) {
    console.log('Переменная кратна пяти, но не кратна семи');
} else if (number % 5 !== 0 && number % 7 === 0) {
    console.log('Переменная не кратна пяти, но кратна семи');
} else {
    console.log('Переменная не кратна пяти и семи');
}
//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (number < 0 || number === 0) {
    console.log('Переменная является отрицательным числом или нулем');
} else {
    console.log('Переменная является положительным числом');
}
//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number > 99 && number < 1000) {
    console.log('Переменная является трёхзначным положительным числом');
} else {
    console.log('Переменная не является трёхзначным положительным числом');
}


//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

let dayNumber = 7;
switch (dayNumber) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Среда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;
    default: console.log('Неверный номер');
}

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N':
        fullName = "Север";
        break;
    case 'S':
        fullName = "Юг";
        break;
    case 'E':
        fullName = "Восток";
        break;
    case 'W':
        fullName = "Запад";
        break;

}
console.log(fullName);