let data = 0;

export function add(number) {
  data = number + data;
}

export function decrease(number) {
  data = data - number;
}

export function reset(number) {
  data = 0;
}

export function getMemo(number) {
  return data;
}
