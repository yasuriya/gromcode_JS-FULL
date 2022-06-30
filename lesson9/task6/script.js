const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(el => Object.values(el))
    .flat();

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

getPeople(rooms);

//! const getPeople = obj => {
//!   console.log(
//!     Object.values(obj).flat(),
//!       .map(el => el.name),
//!   );
//! };
