
const message = "Test"

function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
};

delayTwoSeconds(() => {
  console.log(message)
})

const resolvePromise = new Promise(resolve => resolve(1));
resolvePromise.then(result => console.log(result));


const rejectedPromise = new Promise((_, reject) =>
  reject(new Error("Promise failed"))
);
rejectedPromise.catch(err => console.log(err.message));

function promiseNumber(number) {
  return new Promise(resolve => resolve(number));
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(results => results.forEach(result => console.log(result)));

  Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(results => results.forEach(({status, value}) =>
    console.log(`Status: ${status}, Value: ${value}`)
  ));

  async function handleAll() {
    try {
      const results = await Promise.all([
        promiseNumber(1),
        promiseNumber(2),
        promiseNumber(3)
      ]);
      results.forEach(result => console.log(result));
    } catch (error) {
      console.error(error);
    }
  }
  handleAll();


  async function handleAllSettled() {
    try {
      const results = await Promise.allSettled([
        promiseNumber(1),
        promiseNumber(2),
        promiseNumber(3)
      ]);
      results.forEach(({status, value}) =>
        console.log(`Status: ${status}, Value: ${value}`)
      );
    } catch (error) {
      console.error(error);
    }
  }
  handleAllSettled();