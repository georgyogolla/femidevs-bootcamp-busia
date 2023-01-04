// // A Promise is an object representing the eventual completion or failure of an asynchronous operation

// const buyMeADog = new Promise((resolve, reject) => {
//   const random = Math.random();
//   // refresh the browser everytime. i will return either a esolved or a rejected promise
//   if (random < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// //.then only runs when a Promise is successful
// buyMeADog.then(() => {
//   console.log('I GOT A BEAUTIFUL DOG!!');
// });

// // .catch runs if a promise fails
// buyMeADog.catch(() => {
//   console.log('NO DOG');
// });


// RETURNING A PROMISE

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    // refresh the browser everytime. i will return either a resolved or a rejected promise
    setTimeout(() => {
      if (random < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000)
  });
}

//.then only runs when a Promise is successful
makeDogPromise().then(() => {
    console.log('I GOT A BEAUTIFUL DOG!!');
  })

  // .catch runs if a promise fails
  .catch(() => {
    console.log('NO DOG');
  });


//RESOLVING AND REJECTING PROMISES WITH VALUES
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    //   const rand = Math.random();

    //   setTimeout(() => {
    //     if (rand < 0.3) {
    //       reject({
    //         status: 404
    //       });
    //     } else {
    //       resolve();
    //     }
    //   }, 3000)

    setTimeout(() => {
      const pages = {
        '/users': [{
            id: 1,
            username: 'kabambe'
          },
          {
            id: 2,
            username: 'ogolla'
          }
        ],
        '/about': 'This is the about page'
      };
      const data = pages[url];
      if (data) {
        resolve({
          status: 200,
          data
        });
      } else {
        reject({
          status: 404
        })
      }
    }, 1000)

  });
};

fakeRequest('/users').then((res) => {
  console.log('Status Code', res.status);
  console.log('Data', res.data);
}).catch((res) => {
  console.log(res.status);
  console.log('REQUEST FAILED');
});