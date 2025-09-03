import { fetchUsersData } from './async.js';

const userList = document.getElementById('user-list');
const statusEl = document.getElementById('status');
const searchInput = document.getElementById('search');

let allUsers = [];

// 데이터 가져오기
async function loadUsers() {
  statusEl.textContent = 'Loading...';
  userList.innerHTML = '';
  try {
    allUsers = await fetchUsersData();

    await new Promise(resolve => setTimeout(resolve, 2000));

    renderUsers(allUsers);
    statusEl.textContent = '';
  } catch (err) {
    console.error(err);
    statusEl.textContent = '데이터를 불러올 수 없습니다.';
  }
}

// 유저 렌더링
function renderUsers(users) {
  userList.innerHTML = '';
  if(users.length === 0){
    userList.innerHTML = '<p>검색 결과가 없습니다.</p>';
    return;
  }

  users.forEach(user => {
    userList.innerHTML += `
      <div class="card">
        <img src="${user.picture.thumbnail}" alt="${user.name.first}">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>${user.email}</p>
        <p>${user.phone}</p>
      </div>
    `;
  });
}

// 검색 기능
searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = allUsers.filter(u =>
    (u.name.first + " " + u.name.last).toLowerCase().includes(term)
  );
  renderUsers(filtered);
});

await new Promise(resolve => setTimeout(resolve, 2000));

// 초기 실행
loadUsers();
