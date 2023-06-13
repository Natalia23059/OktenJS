// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = new URL (location.href).searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(value => value.json())
    .then(post => {
        console.log(post);
        const details = document.getElementsByClassName('details')[0];
        const ul = document.createElement('ul');
        details.appendChild(ul);
        for (const postKey in post) {
            const li = document.createElement('li');
            li.innerText = `${postKey}: ${post[postKey]}`
            ul.appendChild(li);
        }
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(value => value.json())
    .then(comments => {
        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('box');
        const h = document.createElement('h2')
        h.innerText = 'Comments'
        document.body.appendChild(h);
        document.body.appendChild(commentsDiv);


        for (const comment of comments) {
            const divOfComment = document.createElement('div');
            divOfComment.classList.add('comment')
            commentsDiv.appendChild(divOfComment);
            const ul = document.createElement('ul');
            divOfComment.appendChild(ul);

            for (const commentKey in comment) {
                const li = document.createElement('li');
                li.innerText = `${commentKey}: ${comment[commentKey]}`;
                ul.appendChild(li);
            }
        }

    });