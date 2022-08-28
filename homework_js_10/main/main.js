
let wrap=document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);
fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(users => users.forEach(user => {

        let div = document.createElement('div');
        div.classList.add('user');
        let p = document.createElement('p');
        p.classList.add('p')
        div.appendChild(p);
        p.innerText = user.id + " - " + user.name;
        //p.style.color='white'

        let btn_info = document.createElement('div');
        btn_info.classList.add('user-details');
        btn_info.innerText = 'user details';
        btn_info.onclick = function () {
            location.href =`../user/user-details.html?id=${user.id}`;
        }
        div.appendChild(btn_info);
        wrap.appendChild(div);
    }))