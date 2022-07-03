/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  Object.assign((obj[key] = value));
  return obj;
}

function addPropertyV3(obj, key, value) {
  const newObj = Object.assign({}, obj);
  newObj[key] = value;
  return newObj;
}

function addPropertyV4(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

// examples
const transaction = {
  value: 170,
};
addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(addPropertyV2(transaction, 'name', 'Jan'));
console.log(addPropertyV3(transaction, 'age', '77'));
console.log(addPropertyV4(transaction, 'boolean', 'true'));
console.log(transaction);
