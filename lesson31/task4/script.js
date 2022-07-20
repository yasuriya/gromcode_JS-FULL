const serverResponsePromise = new Promise(resolve => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve({
        name: 'John',
        age: 20,
      });
    },
  };
  resolve(serverResponse);
});

serverResponsePromise
  .then(response => {
    console.log(response.json());
    return response.json();
  })
  .then(result => {
    console.log(result); // { name: 'John', age: 20 }
  });
