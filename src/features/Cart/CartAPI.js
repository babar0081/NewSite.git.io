
export function addToCart(item) {
  return new Promise(async (resolve, reject) => { // Add 'reject' parameter
    try {
      const response = await fetch('http://localhost:8080/cart', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'content-type': 'application/json' }
      });
      const data = await response.json();
      resolve({ data });
    } catch (error) { // Catch any errors that occur during the fetch operation
      reject(error); // Reject the Promise with the error
    }
  });
}


export function fetchItemsByUserId(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart?user='+userId);
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

// export function fetchItemsByUserId(userId) {
//   const url = new URL('http://localhost:8080/cart');
//   url.searchParams.append('user', userId);

//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       resolve({ data });
//     } catch (error) {
//       reject(error);
//     }
//   });
// }
export function updateCart(update) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart/'+update.id,{
        method: 'PATCH',
        body: JSON.stringify(update),
        headers: { 'content-type': 'application/json' }
      });
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

export function deleteItemsFromCart(itemId) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart/'+itemId,{
        method: 'DELETE',
        headers: { 'content-type': 'application/json' }
      });
      const data = await response.json();
      resolve({ data: { id: itemId } });
    } catch (error) {
      reject(error);
    }
  });
} 
export function resetCart(userId) {
 
 return new Promise (async (resolve)=>{
  const response=  await fetchItemsByUserId(userId)
 const items = response.data;
 for(let item of items){
  await deleteItemsFromCart(item.id)
 }
 resolve({status:'success'})
 })

} 