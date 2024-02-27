// A mock function to mimic making an async request for data
export function createUsers(userData) {
  return new Promise(async (resolve) =>{
    const respone = await fetch('http://localhost:8080/Auth/signup',{
      method:'POST',
      body:JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    })
    const data = await respone.json()
    resolve({data})
  }
  );
}
export function checkUser(loginInfo) {
  return new Promise(async (resolve,reject) =>{
    // const email = loginInfo.email
    // const password = loginInfo.password
   try{
    const respone = await fetch('http://localhost:8080/Auth/login',{
      method:'POST',
      body:JSON.stringify(loginInfo),
      headers:{'content-type':'application/json'}}
      )
      const data = await respone.json()
      console.log({data})
      resolve({data})  
   }
   catch(err){
    reject(err)
   }
    
  
  
})
}
