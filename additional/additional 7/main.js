
//- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
// function User(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {
//                 street,
//                 suite,
//                 city,
//                 zipcode,
//                 geo: {
//                     lat,
//                     lng
//                 }}
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         name,
//         catchPhrase,
//         bs
//     }
// }
// const user = new  User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556','Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net','harness real-time e-markets')
// console.log(user);
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }
// function Tag (titleOfTag, action,titleOfAttr, actionOfAttr, titleOfAttr1, actionOfAttr1) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = [{titleOfAttr, actionOfAttr},{titleOfAttr1, actionOfAttr1}]
// }
// const a = new Tag ('a', `теґ <a> створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання).`, 'href', ' який вказує місце, куди буде посилатися створене посилання.','title ', 'випливаюча підказка' );
// console.log(a);
//
// const div = new Tag ('div', 'Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS.',
//     'align', 'Визначає вирівнювання вмісту всередині `<div>` елемента.', 'title', 'Вказує додаткову текстову підказку');
// console.log(div);
// const h1 = new Tag('h1', 'визначає найбільш важливі заголовки', 'align', 'Вирівнювання заголовку.', 'translate', 'Повідомляє браузеру переводити вказаний текст в елементі чи ні.' );
// console.log(h1);
//
// const span = new Tag('span', 'Тег <span> являє собою універсальний порожній контейнер, який необхідно заповнити будь-яким вмістом...', 'contextmenu', 'Контекстне меню для елемента', 'accesskey', 'Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш.');
// console.log(span);
//
// const input = new Tag('input', 'теґ <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. ', 'accept', 'Встановлює фільтр на типи файлів, які ви можете надіслати через поле завантаження файлів.', 'alt', 'Задає альтернативний текст для зображення (для type ="image").');
// console.log(input);
//
// const form = new  Tag('form', 'використовується для створення HTML форми на сторінці.', 'accept-charset', 'Вказує кодування даних які відправляються на сервер.', 'action', 'Вказує URL адресу обробника форми.');
// console.log(form);
//
// const option = new Tag('option', 'призначений для створення пункту списку для тега select чи datalist.', 'disabled', 'Відключає пункт списку.', 'label', 'Вказує короткий опис для пункту списку');
// console.log(option);
//
// const select = new  Tag('select', 'дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором.', 'autofocus', 'Встановлює фокус після завантаження сторінки.', 'disabled', 'Блокує доступ та зміну елемента.');
// console.log(select);


// 1) Створити карту користувача(User Card):
// Створити функцію «userCard» яка приймає число(будь-яке число) і повертає
// об’єкт з методами:
//     const card3 = userCard(3); // returns an object with methods
// User Card методи:
//     getCardOptions. Дана функція повертає об’єкт котрий містить інформацію про
// карту:
//     card3.getCardOptions(); // returns options object with card info
// Об’єкт має містити такі властивості:
//     • balance (по замовчуванням 100)
// • transactionLimit (по замовчуванням 100. Це ліміт коштів які ви можете взяти з
// карти)
// • historyLogs (масив об’єктів який містить інформацію про операції та трансакції
// данної карти)
// • key (число в діапазоні[1; 3] залежить від числа яке ви передали в userCard
// функції. Кожна карта повинна мати унікальний key)
// putCredits. Ця функція отримує певну кількість грошей і заповнює баланс
// карти:
// takeCredits. Ця функція отримує певну кількість грошей і віднімає ці кошти з
// баланса карти (протилежний за дією від метода putCredits):
// card3.takeCredits(100);
// Ви можете брати кошти з картки, якщо ліміт транзакцій та залишок коштів
// перевищують кількість коштів, які ви бажаєте взяти. Якщо ні, то слід записати
// відповідне повідомлення у консолі (скористайтеся console.error)
// setTransactionLimit.Ця функція приймає як аргумент число і встановлює його
// як ліміт транзакцій на картці
// card3.setTransactionLimit(5000);
// transferCredits.
//     Ця функція отримує два аргументи - кількість кредитів, які потрібно передати,
//     та карту одержувача (інший об’єкт, створений функцією `userCard` - card1):
// card3.transferCredits(50, card1);
// Кошти, які ви хочете передати, повинні обкладатися податками 0,5%.
// Не забудьте перед перерахуванням перевірити залишок балансу та ліміт
// транзакцій відправника кредитів (card3).Ви повинні відслідковувати тільки Put credits/Take credits/Transaction limit
// change операції і зберігайте history log. History log (Дивитись зображення 1)
// інформація має зберігатись в об’єктах з такими властивостями:
//     • operationType (стрічка яка описує здійснену операцію)
// • credits (кількість коштів)
// • operationTime (формат: "27/07/2018, 03:24:53". Час коли була здійснена операція)
let date = new Date();
let currDay = date.getDate()
let currMonth = date.getMonth() + 1;
let currYear = date.getFullYear();

let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
function UserCard(num) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: num,
    }
    return {
        getCardOptions: function () {
            return card;
        },
        putCredits: function (cash1) {
            card.balance = card.balance + cash1;
            return card;
        },
        takeCredits: function (cash2) {
            if (card.balance >= cash2 && card.transactionLimit >= cash2) {
                card.balance = card.balance - cash2;
                let transaction = {
                    operationType: 'Кошти перераховано',
                    credits: cash2,
                    operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.splice(0, 0, transaction);
            } else {
                console.error('Недостатньо коштів');
            }
            return card;
        },
        setTransactionLimit: function (cash3) {
            card.transactionLimit = cash3;
            let transaction = {
                operationType: `Кредитний ліміт змінено на ${cash3}`,
                credits: cash3,
                operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.splice(0, 0, transaction);
            return card;
        },
        transferCredits: function (credits, cards) {
            credits = credits + credits * 0.5 / 100;
            card.balance -= credits;
            cards.putCredits(credits);
            this.takeCredits(credits);
            console.log(cards.getCardOptions());
            return card;
            }
    }
    }
const card3 = new UserCard(3);
console.log(card3.getCardOptions());
// // console.log(card3.takeCredits(100));
// console.log(card3.setTransactionLimit(5000));
let card1 = new UserCard(1);
console.log(card3.transferCredits(50, card1));



//  ---------- UserAccount ------------
// 2) Створити UserAccount:
//     Створити класс `UserAccount` (для цього завдання можна використати ES6 класс
// або звичайну функцію):
// const user = new UserAccount('Bob');
// Класс має містити:
//     Властивості акаунту користувача:
//     - name (передати в конструкторі)
// - cards (Масив карток користувача. Масив не має бути довшим ніж 3)
// Методи акаунту користувача:
//     - addCard. Створює нову карту (використовуйте ‘userCard’ функцію) та додайте її до
// cards:
//     user.addCard();
// Користувач повинен мати <= 3 карти.
// - getCardByKey. Приймає число в діапазоні {1; 3} і повертає об’єкт карти
// /*
// * Повертає об’єкт {
// * key: 1,
// * balance: 150,
// * ...other card properties
// * }
// */
// user.getCardByKey(1);

class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        const card = UserCard().getCardOptions();
        this.cards.push(card);
    }

    getCardByKey(number) {
        const card=UserCard(number);
        card.getCardOptions().key=number;
        console.log(card.getCardOptions());
        return card;
    }
}

const user = new UserAccount('Bob');
user.addCard()
user.addCard()
// let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());