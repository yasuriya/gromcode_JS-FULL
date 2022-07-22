const baseUrl = 'https://62da76989eedb699636eee99.mockapi.io/api/v1/users';
function getUsersList() {
  return fetch(baseUrl).then(response => response.json());
}

// function getUserById(userId) {
//   return fetch(`${baseUrl}/${userId}`).then(response => response.json());
// }

// export function createUser(userData) {
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(userData),
//   });
// }
// createUser(newUserData).then(() => {
//   console.log('User created');
// });
// function deleteUser(userId) {
//   return fetch(`${baseUrl}/${userId}`, {
//     method: 'DELETE',
//   });
// }

// function updateUser(userId, userData) {
//   return fetch(`${baseUrl}/${userId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(userData),
//   });
// }

// examples
getUsersList().then(users => {
  console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
});

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

//  email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,

// updateUser('11', updatedUserData).then(() => {
//   console.log('User updated');
// });

// deleteUser('10').then(() => {
//   console.log('User updated');
// });
