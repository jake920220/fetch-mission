const userList = document.querySelector("#user-list");
const status = document.querySelector(".status");
const searchUser = document.querySelector(".search-user");
let users = [];

async function fetchUsers() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    users = data.results;
    renderUsers(users);
    // Loding... 텍스트 제거
    status.style.display = "none";
  } catch (e) {
    // error 발생 시 text 변경
    console.error(e);
    status.textContent = "데이터를 불러올 수 없습니다.";
  }
}

function renderUsers(userData) {
  userList.innerHTML = "";
  userData.forEach((user) => {
    // user-list 내부에 user-card 생성
    const card = document.createElement("div");
    card.classList.add("user-card");

    // user-card에 userData 추가
    card.innerHTML = `
      <img src = "${user.picture.thumbnail}" alt = "프로필 사진">
      <div class="text">
        <p class="name">${user.name.first} ${user.name.last}</p>
        <p class="email">${user.email}</p>
        <p class="phone">${user.phone}</p>
      </div>
    `;

    //userList에 자식으로 카드 추가
    userList.appendChild(card);
  });
}

searchUser.addEventListener("input", (e) => {
  const userName = e.target.value();
  const findUser = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`;
    return fullName.includes(userName);
  });
  renderUsers(findUser);
});

fetchUsers();
