
//Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let userInfo = document.getElementById('userInfo');
let form1 = document.forms['form1'];

form1.onsubmit = function (ex) {
    ex.preventDefault();
    let user = {
        name: this.firstname.value,
        surname: this.surname.value,
        age: this.age.value}
    let jsonUser = JSON.stringify(user);
    let div = document.createElement('div');
    div.innerText = `${jsonUser}`
    document.body.appendChild(div);
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
const count = localStorage.getItem('count') || 0;
let block = document.getElementById('number');
const newCount = (+count + 1).toString();
block.innerText = newCount;
localStorage.setItem('count', newCount);

// ==========================