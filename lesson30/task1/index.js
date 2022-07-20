const addImage = imgSrc => {
  const promise = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'calico cat');
    imgElem.setAttribute('src', imgSrc);

    const container = document.querySelector('.page');
    container.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => reject(new Error('Image load is failed')));
  });

  return promise;
};

const imgPromise = addImage(
  'https://i.pinimg.com/564x/90/94/e9/9094e99a64061f13e4739878b1881e6b.jpg',
);

imgPromise.then(data => console.log(data));
imgPromise.catch(error => console.log(error));

// const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };
