
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
const arr =[];
const users =[
        new User(1, 'vasya', 'fjnv', 'email', '0678452157'),
        new User(2, 'tanya', 'fjndk', 'email', '0653255157'),
        new User(3, 'olga', 'knjkk', 'email', '5486512154'),
        new User(4, 'pavlo', 'jkbuh', 'email', '5354153652'),
        new User(15, 'petro', 'yufytu', 'email', '1215215155'),
        new User(6, 'maria', 'ytufyu', 'email', '5352154546'),
        new User(7, 'vika', 'wefcrca', 'email', '8684515215'),
        new User(8, 'sergiy', 'rklek', 'email', '8551584551'),
        new User(9, 'ivan', 'lelkl', 'email', '5415454888'),
        new User(10, 'anya', 'kriir', 'email', '868545215')
];
Array.prototype.push.apply(arr, users)
console.log(arr);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filter = arr.filter(item => item.id % 2 === 0);
console.log(filter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sort =arr.sort(function (a, b){
    return a.id - b.id
})
console.log(sort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const arr2 = [];
const arrClient = [
    new Client(1, 'vasya', 'fjnv', 'email', '0678452157', ['a', 'b','c']),
    new Client(2, 'tanya', 'fjndk', 'email', '0653255157', ['a','b','c','d']),
    new Client(3, 'olga', 'knjkk', 'email', '5486512154',['a', 'b','c']),
    new Client(4, 'pavlo', 'jkbuh', 'email', '5354153652',['a', 'b','c','d','e']),
    new Client(15, 'petro', 'yufytu', 'email', '1215215155',['a','b','c','d']),
    new Client(6, 'maria', 'ytufyu', 'email', '5352154546',['a','b','c','d']),
    new Client(7, 'vika', 'wefcrca', 'email', '8684515215',['a', 'b','c','d','e']),
    new Client(8, 'sergiy', 'rklek', 'email', '8551584551', ['a']),
    new Client(9, 'ivan', 'lelkl', 'email', '5415454888',['a','b']),
    new Client(10, 'anya', 'kriir', 'email', '8685452Client',['a', 'b','c','d','e','f'])
    ];
Array.prototype.push.apply(arr2, arrClient);
console.log(arr2);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortOrder =arr2.sort(function (a, b){
    return a.order.length - b.order.length
})
console.log(sortOrder);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
function Car1 (model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    }
    this.info = function () {
        console.log(`Модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску -${this.yearOfManufacture}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log( this.maxSpeed + newSpeed);
    }
    this.changeYear = function (newValue){
       console.log( this.yearOfManufacture = `${newValue}`);
    }
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(car);
    }
}
let car = new Car1 ('Volvo XC90', 'Volvo Cars', 2015, 230, 2.0 )
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed (30);
car.changeYear(2020);
car.addDriver({name: 'sergiy', age: 45});


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
class Car2 {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
    }
    info () {
        console.log(`Модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску -${this.yearOfManufacture}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`)
    }
    increaseMaxSpeed (newSpeed) {
        console.log( this.maxSpeed + newSpeed );
    }
    changeYear (newValue){
        console.log( this.yearOfManufacture = `${newValue}`);
    }
    addDriver (driver) {
        this.driver = driver;
        console.log(car2)
    }
}
let car2 = new Car2 ('Volvo XC90', 'Volvo Cars', 2015, 230, 2.0 )
console.log(car);
car2.drive();
car2.info();
car2.increaseMaxSpeed (30);
car2.changeYear(2019);
car2.addDriver({name: 'vadim', age :32})

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
const cinderellas = [
    new Cinderella('Anna', 22, 37),
    new Cinderella('Tanya', 25, 37),
    new Cinderella('Olga', 21, 36),
    new Cinderella('Inna', 30, 40),
    new Cinderella('Maria', 35, 39),
    new Cinderella('Lina', 28, 38),
    new Cinderella('Lida', 32, 39),
    new Cinderella('Vira', 27, 37),
    new Cinderella('Svitlana', 25, 41),
    new Cinderella('Natalia', 24, 35)
]

class Prince{
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
const princeForCinderella = new Prince('Andriy', 26, 36);

let she =  null;

for (let i = 0; i<cinderellas.length; i++) {
    if (cinderellas[i].footSize === princeForCinderella.shoe) {
        she = cinderellas[i];
    }
}
console.log(she);

const findCinderella = cinderellas.find(item => item.footSize === princeForCinderella.shoe)
console.log(findCinderella);