const $userList = document.querySelector("#user-lists");
const $isLoading = document.querySelector('.hidden');
const $isSearch = document.querySelector('#search-bar');

// let userInput = []; 
const BASE_URL = "https://randomuser.me/api/?results=20"

const getRandomUser = async () => {
  try {
    $isLoading.classList.remove('hidden');
    const res = await fetch(BASE_URL);
    const body = await res.json();
    // userInput = body;
    return body;
  } catch (err) {
    alert("데이터를 불러올 수 없습니다.")
    location.href = "https://www.codeit.kr/"
  } finally {
    $isLoading.classList.add('hidden');
  }
};

async function userCardAdd() {
  const users = await getRandomUser();
  
    users.results.forEach((user) => {
      // const ul = document.createElement("ul");
      // const userAvatar = document.createElement("img");
      // ...
    
      const userCard = `
        <div class="user-list">
              <img class="user-avatar" src="${user.picture.large}" alt="유저 이미지">
              <div class="user-item-list">
                <h2 class="user-name">${user.name.title}.${user.name.first} ${user.name.last}</h2>
                <a class="user-email" href="mailto:${user.email}">${user.email}</a>
                <a class="user-phone-number" href="tel:${user.phone}">${user.phone}</a>
             </div>
        </div> 
      `;

      /** @see https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML */
      $userList.insertAdjacentHTML("beforeend", userCard);
    });

} 

userCardAdd();
