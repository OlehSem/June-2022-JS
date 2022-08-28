
let url = new URL(location.href);
let id = url.searchParams.get('id');
let wrap1=document.createElement('div');
wrap1.classList.add('wrap1');
document.body.appendChild(wrap1);
let userinf = document.createElement('div');
userinf.classList.add('userinf');
userinf.innerText= 'User Info :';
wrap1.appendChild(userinf);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let div = document.createElement('div');
        div.classList.add('user-info')
        wrap1.appendChild(div);
        for (const userKey in user) {
            if (typeof user[userKey] !== 'object') {
                let p = document.createElement('div');
                p.innerText = `${userKey} : ${user[userKey]}`;
                div.appendChild(p);
            } else {
                let c = user[userKey];
                for (const cElement in c) {
                    if (typeof c[cElement] !== 'object') {
                        let c1 = document.createElement('div');
                        c1.innerText = `${cElement} : ${c[cElement]}`;
                        div.appendChild(c1);
                    } else {
                        let f = c[cElement];
                        for (const fKey in f) {
                            if (typeof f[fKey] !== 'object') {
                                let f1 = document.createElement('div');
                                f1.innerText = `${fKey} : ${f[fKey]}`;
                                div.appendChild(f1);
                            }

                        }
                    }

                }
            }
        }
    })


fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(posts => {
        let btn_title = document.createElement('div');
        btn_title.classList.add('btn_post');
        btn_title.innerText = 'Click to posts of current user';
        document.body.appendChild(btn_title);
        let wrap_posts = document.createElement('div');
        wrap_posts.classList.add('wrap_posts');


        for (let postsKey of posts) {
            let div2 = document.createElement('div');
            div2.classList.add('posts');
            wrap_posts.appendChild(div2);
            let p = document.createElement('div');
            p.classList.add('one-post');
            p.innerText = postsKey.title;
            div2.appendChild(p);


            btn_title.onclick = function () {
                document.body.appendChild(wrap_posts);
            }

            let btn_info1 = document.createElement('div');
            btn_info1.classList.add('post-details');
            btn_info1.innerText = 'post-details';
            btn_info1.onclick = function () {
                location.href = `../post/post-details.html?id=${postsKey.id}`;

            }
            div2.appendChild(btn_info1);
        }


    })