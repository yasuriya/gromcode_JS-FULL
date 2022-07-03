const splitText = (text, len = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  // if (len === undefined) {
  //   len = 10;
  // }

  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = text.substr(startPosition, len);

    if (chunk.length === 0) {
      break;
    }

    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr.join('\n');
};

// 1. 'abcdefg' , 4 => ['abcd' , 'efg'] => ['Abcd' , 'Efg']
// => 'Abcd/nEfg'

console.log(splitText('abcdefg', 4));
