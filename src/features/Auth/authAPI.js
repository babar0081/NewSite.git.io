// A mock function to mimic making an async request for data
export function createUsers(userData) {
  return new Promise(async (resolve) =>{
    const respone = await fetch('http://localhost:8080/users',{
      method:'POST',
      body:JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    })
    const data = await respone.json()
    resolve({data})
  }
  );
}
