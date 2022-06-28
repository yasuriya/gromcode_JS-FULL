const filterNames = (arr, text) => arr.filter(el => el.length > 5).filter(el => el.includes(text));

console.log(filterNames(['abra', 'abram', 'cider', 'abdimension'], 'ab'));
