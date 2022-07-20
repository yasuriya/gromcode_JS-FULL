const getUserASAP = userId => {
  const getRandomNumber = (from, to) => from + Math.random() * (to - from);

  const servers = ['https://server.com/eu', 'https://server.com/us', 'https://server.com/au'];

  const request = url =>
    new Promise(resolve => {
      const randomDelay = getRandomNumber(1000, 3000);
      setTimeout(() => {
        resolve({
          userData: {
            name: 'Jack',
            age: 47,
          },
          source: url,
        });
      }, randomDelay);
    });

  const userUrls = servers.map(serverUrl => `${serverUrl}/${userId}`);
  const requests = userUrls.map(userUrl => request(userUrl));
  return Promise.race(requests);
};

getUserASAP('user-id-1').then(res => console.log(res));
