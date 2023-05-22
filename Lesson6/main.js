
//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';

console.log(a.length);
console.log(b.length);
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
let upperCaseA = a.toUpperCase();
let upperCaseB = b.toUpperCase();
let upperCaseC = c.toUpperCase();
console.log(upperCaseA);
console.log(upperCaseB);
console.log(upperCaseC);

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowerCaseA = upperCaseA.toLowerCase();
let lowerCaseB = upperCaseB.toLowerCase();
let lowerCaseC = upperCaseC.toLowerCase();
console.log(lowerCaseA);
console.log(lowerCaseB);
console.log(lowerCaseC);
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
let trim = str.trim();
console.log(trim);
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToArray = string =>{
    let newArray = string.split(' ');
    return (newArray);
}
console.log(stringToArray('Ревуть воли як ясла повні'));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arr =[10,8,-7,55,987,-1011,0,1050,0];
let strings = arr.map(nam => nam+'');
console.log( strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
let sortNums = (nums, direction)=> {
    if (direction === 'ascending') {
        nums.sort((a, b) => {
            return a - b;
        })
        return nums
    }
    if (direction === 'descending') {
        nums.sort((a, b) => {
            return b-a;
        })
        return nums
    }
}
console.log(sortNums(nums,'ascending'));
console.log(sortNums(nums,'descending'));

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => {
 return b.monthDuration - a.monthDuration ;
}));

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArrayFilter = coursesAndDurationArray.filter((coursesAndDurationArray) => {
    return coursesAndDurationArray.monthDuration > 5
});
console.log(coursesAndDurationArrayFilter);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let map = coursesAndDurationArray.map((course, index) =>{
    let courses = {...course}
    courses.id = index;
    return courses;
})
console.log(map);

//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];
//  - знайти піковий туз
let ace = cards.find(el => el.cardSuit === 'spade');
console.log(ace);

//  - всі шістки
let card6 = cards.filter(el => el.value === '6');
console.log(card6);
//  - всі червоні карти
let redCards = cards.filter(el => el.color === 'red');
console.log(redCards);
//  - всі буби
let diamond = cards.filter(el => el.cardSuit === 'diamond');
console.log(diamond);
//  - всі трефи від 9 та більше
let clubs = cards.filter((card) =>
    [ '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'].includes(card.value)
    && card.cardSuit === 'clubs'
);

console.log(clubs);
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const arrCards = cards.reduce((acc, cu) => {
    switch (cu.cardSuit) {
        case 'spade':
            acc.spades.push(cu);
            break;
        case 'diamond':
                acc.diamonds.push(cu);
            break;
        case 'heart':
            acc.hearts.push(cu);
            break;
        case 'clubs':
            acc.clubs.push(cu);
            break
    }
    return acc;
    }, {spades:[], diamonds:[], hearts:[], clubs:[]})
console.log(arrCards);
// =========================
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
const sass = coursesArray.filter((item) => item.modules.includes('sass'));
console.log(sass);
// --написати пошук всіх об'єктів, в який в modules є docker
const docker = coursesArray.filter((item) => item.modules.includes('docker'));
console.log(docker);