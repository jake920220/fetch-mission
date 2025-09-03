import { getUser } from "./script.js";

const userListEl = document.getElementById("user-list");

function userProfile(usr) {
    const { name, email, phone, picture } = usr;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${picture.medium}" alt="${name.first}">
        <h3>${name.first} ${name.last}</h3>
        <p>${email}</p>
        <p>${phone}</p>
    `;
    userListEl.appendChild(card);
}

async function main() {
    try {
        const users = await getUser();
        users.forEach(userProfile);
    } catch (err) {
        console.error(err);
    }
}

main();