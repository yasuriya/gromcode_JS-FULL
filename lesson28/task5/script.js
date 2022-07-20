// ? input: date
// ? output: date

//! 1. create variable for result date
//! 2. create calculator object
//! 3. create methods for add and subtract (use date-methods)
//! 4. create result method
//! 5. return calculator

const shmoment = date => {
  let resDate = new Date(date);

  const calculator = {
    add(time, value) {
      const result = {
        milliseconds: value => resDate.setMilliseconds(resDate.getMilliseconds() + value),
        seconds: value => resDate.setSeconds(resDate.getSeconds() + value),
        minutes: value => resDate.setMinutes(resDate.getMinutes() + value),
        hours: value => resDate.setHours(resDate.getHours() + value),
        days: value => resDate.setDate(resDate.getDate() + value),
        months: value => resDate.setMonth(resDate.getMonth() + value),
        years: value => resDate.setFullYear(resDate.getFullYear() + value),
      };
      resDate = new Date(result[time](value));
      return calculator;
    },

    subtract(time, value) {
      const result = {
        milliseconds: value => resDate.setMilliseconds(resDate.getMilliseconds() - value),
        seconds: value => resDate.setSeconds(resDate.getSeconds() - value),
        minutes: value => resDate.setMinutes(resDate.getMinutes() - value),
        hours: value => resDate.setHours(resDate.getHours() - value),
        days: value => resDate.setDate(resDate.getDate() - value),
        months: value => resDate.setMonth(resDate.getMonth() - value),
        years: value => resDate.setFullYear(resDate.getFullYear() - value),
      };

      resDate = new Date(result[time](value));
      return calculator;
    },

    result() {
      return resDate;
    },
  };
  return calculator;
};

console.log(
  shmoment(new Date(2022, 6, 13, 22, 4, 2)).add('minutes', 8).subtract('days', 2).result(),
);
