// A mock function to mimic making an async request for data
export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) =>{
    const respone = await fetch('http://localhost:8080/orders/?user='+userId)
    const data = await respone.json()
    resolve({data})
  }
  );
}
// A mock function to mimic making an async request for data
export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) =>{
    const respone = await fetch('http://localhost:8080/orders/?user='+userId)
    const data = await respone.json()
    resolve({data})
  }
  );
}
