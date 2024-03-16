export function createOrder(order) {
  return new Promise(async (resolve, reject) => { // Add 'reject' parameter
    try {
      const response = await fetch('http://localhost:8080/orders', {
        method: 'POST',
        body: JSON.stringify(order),
        headers: { 'content-type': 'application/json' }
      });
      const data = await response.json();
      resolve({ data });
      console.log(data)
    } catch (error) { // Catch any errors that occur during the fetch operation
      reject(error); 
      console.log(error)// Reject the Promise with the error
    }
  });
}
