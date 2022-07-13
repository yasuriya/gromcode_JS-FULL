const daysInWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const dayOfWeek = (date, days) => {
  const dayInit = new Date(date).getDate();
  const dateInit = new Date(date).setDate(dayInit + days);

  return daysInWeek[new Date(dateInit).getDay()];
};

console.log(dayOfWeek(new Date(1995, 10), 10));
