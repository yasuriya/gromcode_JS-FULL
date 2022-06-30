// input: string, string
// output: number

// make checks for undefined & empty inputs
// create an iterator
// transform string to array and use map method for check if text includes str
// increase iterator if true

const countOccurrences = (text, str) => {
  if (typeof text === 'undefined') {
    text = '';
  } else if (str.length === 0) {
    return null;
  }

  let iterator = 0;
  text.split(' ').map(el => {
    if (el.includes(str)) {
      iterator++;
    }
  });

  return iterator;
};

console.log(countOccurrences('object ob ob ob ob ', 'ob'));
