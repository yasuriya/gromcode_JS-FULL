// ? input: object, object
// ? output: string

//! algo
//! 1.get time in milliseconds
//! 2.calculate difference between argument dates in milliseconds (make it absolute number)
//! 3.divide milliseconds on 1000 to calculate difference in seconds
//! 4.convert seconds to days/hours/minutes/seconds with remainder
//! 5.return template string

const getDiff = (startDate, endDate) => {
  const start = startDate.getTime();
  const end = endDate.getTime();

  const millisecDiff = Math.abs(end - start) / 1000;

  const days = Math.floor(millisecDiff / 60 / 60 / 24);
  const hours = Math.floor((millisecDiff / 60 / 60) % 24);
  const minutes = Math.floor((millisecDiff / 60) % 60);
  const seconds = Math.floor(millisecDiff % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(1995, 7, 7, 13, 43, 22), new Date(1995, 10, 21, 22, 11, 56)));
