const pinger = (count, period) => {
  console.log('Ping');
  let counter = count;
  const interval = setInterval(() => {
    if (--counter > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

pinger(5, 1000);
