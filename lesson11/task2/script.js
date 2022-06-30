const contactList = [
  { name: 'Richard', phoneNumber: '767432' },
  { name: 'Ann', phoneNumber: '123132123' },
  { name: 'Paul', phoneNumber: '123123' },
  { name: 'Jim', phoneNumber: '71231237' },
  { name: 'Romario', phoneNumber: '33321' },
];

// input: (array, boolean)
// output: array

// check if is array
// sort contacts in ascending order (statement)
// reverse sort (descending order)

const sortContacts = (contactsArray, isAsc) => {
  if (!Array.isArray(contactsArray)) {
    return null;
  }
  const result = contactsArray.sort((a, b) => {
    return isAsc === false ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name);
  });
  return result;
};

console.log(sortContacts(contactList, false));
