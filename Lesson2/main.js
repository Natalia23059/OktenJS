//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 4, 5, 6, 7, 'name', 'address', true]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title:'The Trackers',
    pageCount: 336,
    genre:"Historical Fiction"
}
console.log(book1)

let book2 = {
    title:'When Tender is the Heart',
    pageCount: 332,
    genre:"Drama"
}
console.log(book2)

let book3 = {
    title:'Simply Lies',
    pageCount: 432,
    genre: "Fiction"
}
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'One Day With You',
    pageCount: 310,
    genre: 'Romance',
    authors: [
        {name: 'Shari Low', age: 58},
    ]
}
console.log(book4);

let book5 = {
    title: 'All Your Perfects',
    pageCount: 305,
    genre: 'Romance',
    authors: [
        {name: 'Colleen Hoover', age: 43},
    ]
}
console.log(book5);

let book6 = {
    title: 'Harry Potter and the Prisoner of Azkaban',
    pageCount: 435,
    genre: 'Fantasy',
    authors: [
        {name: 'J.K. Rowling', age: 57},
        {name: 'Mary GrandPré', age: 69},
    ]
}
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name:'olga', username: 'olga111', password: 12345678},
    {name:'petro', username: 'petro200', password: 'rfnjn'},
    {name:'oleg', username: 'olegPl', password: '0902Pl'},
    {name:'svitlana', username: 'svitlana', password: 845763},
    {name:'vitalik', username: 'vitalik', password: 'jenjbkjk'},
    {name:'natalia', username: 'nataliaTbr', password: 1886554},
    {name:'ivan', username: 'ivan', password: 'hbdfhvje'},
    {name:'taras', username: 'taras', password: 854674938},
    {name:'mariya', username: 'mariya', password: 'fvbjehkjb'},
    {name:'kolya', username: 'kolya', password: 'loedewlmd'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5]['password']);
console.log(users[6]['password']);
console.log(users[7]['password']);
console.log(users[8]['password']);
console.log(users[9]['password']);
//
//
// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 15;
if (time >=0 && time < 15) {
        console.log('в першу четверть');
}
else if (time >=15 && time <30) {
    console.log('у другу четверть');
}
else if (time >=30 && time <45) {
    console.log('у третю четверть')
}
else if (time >=45 && time <=59) {
    console.log('у четверту четверть')
}
else {
    console.log('введіть число від 0 до 59')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 20;
if (day >=1 && day <=10) {
    console.log('у першу декаду')
}
else if (day >=11 && day <=20) {
    console.log('у другу декаду')
}
else if (day >20 && day<= 31) {
    console.log('у третю декаду')
}
else {
    console.log('введіть число місяця від 1 до 31')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNam = 1;
switch (dayNam) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('введіть порядковий номер дня тижня')
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a = +prompt('введіть перше число');
let b = +prompt('введіть друге число');
console.log(a, b);
if (a > b) {
    console.log(a);
}
else if (b > a) {
    console.log(b)
}
else if (a === b) {
    console.log('значення рівні')
}
else {
    console.log('введіть два числа')
}

//
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x1 = prompt('введіть значення')
console.log(x1);
if (x1 === NaN || x1 === null || x1 === undefined || x1 === '' || x1 === "" || x1===``|| x1 === 0 || x1 === false ){
    console.log("default");
}
else {
    console.log('+');
}

//
//
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
else {
    console.log('Продовжуй старатися');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
else {
    console.log('Продовжуй старатися');
}if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
else {
    console.log('Продовжуй старатися');
}if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
else {
    console.log('Продовжуй старатися');
}if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
else {
    console.log('Продовжуй старатися');
}if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}
else {
    console.log('Продовжуй старатися');
}