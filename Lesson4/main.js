
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle(a, b) {
    let result = a * b;
    return result;
}
let x = areaRectangle(5, 10);
console.log(x);
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(radius) {
    let result = Math.PI * Math.pow(radius, 2);
    return result;
}
let y = areaCircle(5);
console.log(y);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaCylinder(r,h){
    let result = 2 * Math.PI * r * h;
    return result;
}
let z = areaCylinder(5, 2);
console.log(z);
// - створити функцію яка приймає масив та виводить кожен його елемент
function fooIter(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph(textContent) {
    document.write(`<p>${textContent}</p>`);
}
paragraph('Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam cum autem distinctio quae nulla illum, consequatur culpa cupiditate praesentium alias doloribus asperiores qui eum similique, nihil atque. Quaerat, illum.')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ul(textContent) {
    document.write('<ul>');
    document.write(`<li>${textContent}</li>`);
    document.write(`<li>${textContent}</li>`);
    document.write(`<li>${textContent}</li>`);
    document.write('</ul>')
}
ul('some text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ul2(textContent) {
    document.write('<ul>');
    for (let i =0; i<3; i++) {
        document.write(`<li>${textContent}</li>`)
    }
    document.write('</ul>')
}
ul2('some text');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function fooIter2(arr) {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</ul>')
}
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function user(arr) {
    for (const arrElement of arr){
        document.write('<div>');
        for (const arrElementKey in arrElement) {
            document.write( `${arrElementKey} - ${arrElement[arrElementKey]} <br>`);
        }
        document.write('</div>')
    }
}

// - створити функцію яка повертає найменьше число з масиву
function getMinNam () {
    let minNam = arguments[0];
    for (const argument of arguments) {
        if (argument < minNam){
            minNam=argument;
            return minNam;
        }
    }
}

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum;
};


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    let x= arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = x;
    return arr;
}
console.log(swap([11,22,33,44],0,1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let sum = 0;
    for(let i =0; i<currencyValues.length; i++){
        if(currencyValues[i].currency === exchangeCurrency){
            sum=sumUAH/currencyValues[i].value;
        }
    }
    return sum;
}