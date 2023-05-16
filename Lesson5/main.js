//
// //ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRectangle = (a, b)=> a * b;

console.log(areaRectangle(5, 10));

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaCircle = rad => Math.PI * Math.pow(rad, 2);

console.log(areaCircle(5));
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder =(r,h) => 2 * Math.PI * r * h;

console.log(areaCylinder(5, 2));
// // - створити функцію яка приймає масив та виводить кожен його елемент
const array = [1, 15, 'jih', false];

let arrPrint = arr => {
    for (const item of arr) {
        console.log(`item: ${item}`)
    }}
arrPrint(array);
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let p = text => `<p> ${text} </p>`
document.write(p('Hello'));
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ul = textContent => `<ul><li>${textContent}</li><li>${textContent}</li><li>${textContent}</li></ul>`

document.write(ul('some text'));

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

document.write('<ul>');
let ul2 = (textContent, count) => {for (let i =0; i<3; i++) {
        document.write(`<li>${textContent}</li>`)
    }
    document.write('</ul>')}

ul2('some text', 3);

// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
document.write('<ul>');
let fooIter2 = arr  => {for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</ul>')
}
fooIter2(array);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

let userPrinter = arr => {
    for (const user of arr) {
        document.write(`<div>id: ${user.id} - name: ${user.name} - age: ${user.age}</div>`)
    }
}

userPrinter(users);
// - створити функцію яка повертає найменьше число з масиву
const newArr = [10, 3, 5, 7, 9];
let getMinNam = arr => {
    let minNam = arr[0];
    for (const argument of arr) {
        if (argument < minNam){
            minNam=argument;
            return minNam;
        }
    }
}
console.log(getMinNam(newArr));
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArr = [1,2,10];
let sum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(sum(sumArr));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) =>{
    let x= arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr;
}
console.log(swap([11,22,33,44],0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            return sumUAH / item.value;
        }
    }
}
const result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(result);