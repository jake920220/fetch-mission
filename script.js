
export async function getUser() {
    try {
        const res = await fetch("https://randomuser.me/api/?results=20");
        const data = await res.json();
        return data.results; 
    } catch{
        console.log ('데이터를 불러올 수 없습니다.')
        return null
    } 
}
