
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

export function updateCart(update) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/cart?user='+update.id,{
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
      const response = await fetch('http://localhost:8080/cart?user='+itemId,{
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