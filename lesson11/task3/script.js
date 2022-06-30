const splitString = (textString, len) => {
  if (typeof textString !== 'string') {
    return null;
  }
  if (len === undefined) {
    len = 10;
  }

  const strArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = textString.substr(startPosition, len);

    if (chunk.length === 0) {
      break;
    }

    strArr.push(chunk.slice(0));
    startPosition += len;
  }
  return strArr.map(el => (el.length < len ? el + '.'.repeat(len - el.length) : el));
};

console.log(splitString('abcdefgaaaaaa', 3));
