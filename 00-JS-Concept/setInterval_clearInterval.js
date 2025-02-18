//setInterval

// setInterval(function, milliseconds) method in JavaScript is used to repeatedly execute the function after every given time interval. It continues to call the function until clearInterval() method is called or the window is closed.

var interval = setInterval(fun, 2000);

//To increase number every 2 seconds
// num = 0;
// function fun() {
//   console.log(num);
//   num++;
// }

function fun() {
  let date = new Date().toLocaleTimeString();
  console.log(date);
}
setTimeout(() => {
  clearInterval(interval);
}, 10000);

// clearInterval
// clearInterval() method in JavaScript is used to stop the setInterval() method. It stops the intervals from calling the function again.   clearInterval() method takes the interval ID returned by setInterval() method.
// clearInterval(interval);
// clearInterval(intervalID) method stops the intervals from calling the function again. It takes the interval ID returned by setInterval() method.
