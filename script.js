const userListContainer = document.getElementById('user-list');

fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('user-card');
            const userName = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const phone = user.phone;
            const picture = user.picture.thumbnail;

            card.innerHTML = `
                <img src="${picture}" alt="${userName}의 프로필 사진">
                <h2>${userName}</h2>
                <p>${email}</p>
                <p>${phone}</p>
            `;
        userListContainer.appendChild(card)
        }) 
    })
    .catch((error) => console.log('데이터를 불러올 수 없습니다.'))