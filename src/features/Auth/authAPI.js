// A mock function to mimic making an async request for data
export function createUsers(userData) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/auth/signup',{
      method:'POST',
      body:JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    })
    const data = await response.json()
    resolve({data})
  }
  );
}
export function checkUser(loginInfo) {
  return new Promise(async (resolve,reject) =>{
    // const email = loginInfo.email
    // const password = loginInfo.password
   try{
    const response = await fetch('http://localhost:8080/auth/login',{
      method:'POST',
      body:JSON.stringify(loginInfo),
      headers:{'content-type':'application/json'}}
      );

      if(response.ok){

        const data = await response.json()
        console.log({data})
        resolve({data})  
      }
      else{
        const error = await response.json();
        reject(error)
        console.log(error)
      }

   }
   catch(err){
    reject(err)
   }
    
  
  
})
}
