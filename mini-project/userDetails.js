
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//         6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = new URL (location.href).searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(value =>value.json())
    .then(user => {
        const wrap = document.getElementsByClassName('wrap')[0];

        const ul = document.createElement('ul');
        recursiveBuild(user, ul);

        const button = document.createElement('button');
        button.innerText = 'Post of current user';

        wrap.append(ul, button);

        button.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(posts => {
                const postMainDiv = document.createElement('div');
                postMainDiv.classList.add('postMainDiv');
                document.body.appendChild(postMainDiv);
                for (const post of posts) {
                    const postDiv = document.createElement("div");
                    postDiv.classList.add('title')
                    postDiv.innerText = `Post title: ${post.title}`
                    postMainDiv.appendChild(postDiv);
                    const postButton = document.createElement('button');
                    postButton.innerText = 'More';
                    postButton.classList.add('more');
                    postDiv.appendChild(postButton);

                    postButton.onclick = () => {
                        location.href = `post-details.html?id=${post.id}`;
                    }
                }
            })
    }});

function liCreat(key, value, parent) {
    const li = document.createElement('li');
    li.innerText = `${key}: ${value}`;
    parent.appendChild(li);
}

function ulCreat(key, object, parent) {
    const  li = document.createElement('li');
    const ul = document.createElement('ul');
    li.innerText = `${key}:`;
    parent.appendChild(li);
    li.appendChild(ul);
    recursiveBuild(object, ul);
}
function  recursiveBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
        ? ulCreat(key, object[key], parent)
            : liCreat(key, object[key], parent)
    }
}