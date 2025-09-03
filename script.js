const userListContainer = document.getElementById("user-list");
const searchInput = document.getElementById("search");

let users = [];

async function fetchUsers() {
  const res = await fetch("https://randomuser.me/api/?results=20");
  const data = await res.json();

  users = data.results;
  renderUsers(users);
}

function renderUsers(list) {
  userListContainer.innerHTML = "";
  if (list.length === 0) {
    return (userListContainer.innerHTML = "<p>일치하는 사용자가 없습니다.</p>");
  }

  list.forEach((user) => {
    const card = document.createElement("div");
    const { name } = user;
    const userFullName = `${name.first} ${name.last}`;
    card.className = "card";

    card.innerHTML = `
    <img
        src="${user.picture.large}"
        alt="user image"
    />
    <h2 class="name">${name.title} ${userFullName}</h2>
    <a href="mailto:${user.email}" class="user-email">${user.email}</a>
    <a href="tel:+${user.phone}" class="user-tel">${user.phone}</a>
    `;

    userListContainer.appendChild(card);
  });
}

fetchUsers();

searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value;
  const filteredList = users.filter((user) => {
    const { name } = user;
    const userFullName = `${name.first} ${name.last}`;
    return userFullName.includes(keyword);
  });
  renderUsers(filteredList);
});
