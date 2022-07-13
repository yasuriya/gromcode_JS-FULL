// ? input: none
// ? output: object

//! get Object.entries() for localStorage
//! reduce properties to new object (initial value is a new empty object)
//! use JSON.parse() to values

localStorage.clear();
localStorage.setItem('user', JSON.stringify({ name: 'Peter' }));
localStorage.setItem('age', JSON.stringify(44));
localStorage.setItem('driverLicense', JSON.stringify(true));
const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return { ...acc, [key]: newValue };
  }, {});
};
getLocalStorageData();
console.log(getLocalStorageData());
