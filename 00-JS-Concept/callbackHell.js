//Callback Hell

function loadingData(Callback) {
  setTimeout(() => {
    console.log("1. Loading Data...");
    Callback();
  }, 3000);
}

function CollectingData(Callback) {
  setTimeout(() => {
    console.log("2. Collecting Data...");
    Callback();
  }, 2000);
}

function approvingData(Callback) {
  setTimeout(() => {
    console.log("3. Approving Data...");
    Callback();
  }, 4000);
}

function sendingData() {
  console.log("4. Sending Data...");
}

loadingData(function () {
  CollectingData(function () {
    approvingData(function () {
      sendingData();
    });
  });
});

//With multiple callback it becomes in sequence and it is called as callback hell
//To avoid callback hell we can use promises
//Its difficult to read and understand the code
//It becomes difficult to maintain the code
//It becomes difficult to debug the code
//It becomes difficult to test the code
//It becomes difficult to scale the code
//It becomes difficult to share the code
//It becomes difficult to reuse the code
