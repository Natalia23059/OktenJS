
//зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let url = new URL ('https://jsonplaceholder.typicode.com/users');
url.searchParams.get('id');

fetch(url)
    .then(value => value.json())
    .then(value => {
        let ulList = document.createElement('ul');
        for (const valueElement of value) {
            let li = document.createElement('li');
            let htmlA = document.createElement('a');
            htmlA.href = `https://jsonplaceholder.typicode.com/users/${valueElement.id}`
            htmlA.innerText = `href = user-details.html?id=${valueElement.id}`

            li.innerText = `Id : ${valueElement.id}.  User name : ${valueElement.name};`

            ulList.append(li, htmlA);
            document.body.appendChild(ulList);
        }

    })
