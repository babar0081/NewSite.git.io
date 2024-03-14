// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) =>{
    const respone = await fetch('http://localhost:8080/orders/?users.id='+userId)
    const data = await respone.json()
    resolve({data})
  }
  );
}
// A mock function to mimic making an async request for data
export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) =>{
    const respone = await fetch('http://localhost:8080/orders/?users='+userId)
    const data = await respone.json()
    resolve({data})
  }
  );
}


export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/users/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}