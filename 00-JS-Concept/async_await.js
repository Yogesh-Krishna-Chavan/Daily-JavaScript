//Async Await
//Async Await is a special syntax to work with promises in a more comfortable fashion. It's a special syntax to work with promises in a more comfortable fashion.
//It's a new way to write asynchronous code. It's built on top of promises, and it's non-blocking.
//Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises.
//Async functions always return a promise. If the return value of an async function is not explicitly a promise, JavaScript automatically wraps it in a promise.
//Async functions enable the use of await. The await keyword is used to pause and resume a promise. It can only be used inside an async function.
//Async functions can contain zero or more await expressions. Await expressions suspend progress through an async function, yielding control and subsequently resuming progress only when an awaited promise-based asynchronous operation is either fulfilled or rejected.

function loadingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. Loading Data...");
      resolve();
    }, 3000);
  });
}

function CollectingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. Collecting Data...");
      //   reject("Not Fullfilled");
      resolve();
    }, 2000);
  });
}

function approvingData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. Approving Data...");
      resolve();
    }, 4000);
  });
}

function sendingData() {
  console.log("4. Sending Data...");
}

async function process() {
  await loadingData();
  //   await CollectingData();
  await approvingData();
  await sendingData();
}

process()
  .then(CollectingData)
  .catch((err) => {
    console.log(err);
  });
