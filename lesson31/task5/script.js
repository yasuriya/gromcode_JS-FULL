const delay = period =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('Done');
    }, period);
  });

delay(3000).then(data => console.log(data));
