// A mock function to mimic making an async request for data
export function createUsers(userData) {
  return new Promise(async (resolve) =>{
    // will use for live backend server 
    const response = await fetch('http://localhost:8080/auth/signup',{
    // const response = await fetch('http://localhost:8080/users',{
      method:'POST',
      body:JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    })
    const data = await response.json()
    resolve({data})
  }
  );
}
export function updateUser(update) {
  return new Promise(async (resolve) =>{
    // will use for live backend server 
    const response = await fetch('http://localhost:8080/user/'+update.id,{
    // const response = await fetch('http://localhost:8080/users',{
      method:'PATCH',
      body:JSON.stringify(update),
      headers:{'content-type':'application/json'}
    })
    const data = await response.json()
    resolve({data})
  }
  );
}



// will use this for backend live server 
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

// export function checkUser(loginInfo) {
//   return new Promise(async (resolve,reject) =>{
//      const email = loginInfo.email
//     const password = loginInfo.password
   
//     const data = await response.json()
    
//     const response = await fetch('http://localhost:8080/users?email='+email,{
//       method:'POST',
//       body:JSON.stringify(loginInfo),
//       headers:{'content-type':'application/json'}}
//       );

//       if(password===data[0].password){

//         console.log({data})
//         resolve({data})  
//       }
//       else{
//         const error = await response.json();
//         reject({message:'wrong credentials'})
//         console.log(error)
//       }

   
   
//     reject({message:'user not exists'})
   
    
  
  
// })
// }