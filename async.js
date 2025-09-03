export async function fetchUsersData() {
  const res = await fetch('https://randomuser.me/api/?results=20');
  if(!res.ok) throw new Error('네트워크 오류');
  const data = await res.json();
  return data.results;
}
