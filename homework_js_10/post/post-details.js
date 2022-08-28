location.href
let url = new URL(location.href);
let id = url.searchParams.get('id');

let wrapall = document.createElement('div');
wrapall.classList.add('wrapall');
document.body.appendChild(wrapall)

let postinf = document.createElement('div');
postinf.classList.add('postinf');
postinf.innerText = 'Post Info :';
wrapall.appendChild(postinf);
let wrap3 = document.createElement('div');
wrap3.classList.add('wrap3');
wrapall.appendChild(wrap3);
let comments = document.createElement('div');
comments.classList.add('comments');
comments.innerText = 'Comments :';
wrapall.appendChild(comments);
let wrap4 = document.createElement('div');
wrap4.classList.add('wrap4');
document.body.appendChild(wrap4);
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => {
        let div = document.createElement('div');
        div.classList.add('post_info_wrap')
        wrap3.appendChild(div);
        for (let postsKey in json) {
            let p = document.createElement('div');
            p.innerText = `${postsKey} : ${json[postsKey]}`;
            div.appendChild(p);
        }

    })


fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then(comments => {
        let div4 = document.createElement('div');
        div4.classList.add('post_3_block')
        wrap4.appendChild(div4);
        for (let commentKey of comments) {
            let comment = document.createElement('div');
            comment.classList.add('comment');
            comment.innerHTML = ` <p> Post Id : ${commentKey.postId}</p>
                                      <p>Comment id : ${commentKey.id}</p>
                                      <p> Name : ${commentKey.name}</p>
                                      <p> Email : ${commentKey.email}</p>
                                      <p>${commentKey.body}</p> `
            div4.appendChild(comment);
        }
    })