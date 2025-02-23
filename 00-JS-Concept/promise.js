//Promise
/*
function fun(task) {
  return new Promise((resolve, reject) => {
    if (task) {
      resolve("Task is completed");
    } else {
      reject("Task is not completed");
    }
  });
}

let onResolve = (res) => {
  console.log(res);
};

let onReject = (err) => {
  console.log(err);
};

// fun(true).then(onResolve).catch(onReject);
fun(false).then(onResolve).catch(onReject);
*/

//Convert callback to promise

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
      reject("Not Fullfilled");
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

loadingData()
  .then(CollectingData)
  .then(approvingData)
  .then(sendingData)
  .catch((err) => {
    console.log(err);
  });
