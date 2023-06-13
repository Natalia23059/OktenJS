//   В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


fetch('https://jsonplaceholder.typicode.com/users')
    .then(value =>value.json())
    .then(users => {
        const wrap = document.getElementsByClassName('wrap')[0];
        for (const user of users) {
            const div = document.createElement('div');
            div.classList.add('box');
            const paragraph = document.createElement('p');
            paragraph.innerText = `Id: ${user.id} - Full name: ${user.name}`;
            div.appendChild(paragraph);
            wrap.appendChild(div);

            const button = document.createElement('button');
            button.innerText = 'User details';
            div.appendChild(button);

            button.onclick = () => {
                location.href = `user-details.html?id=${user.id}`;
            }
        }
})


