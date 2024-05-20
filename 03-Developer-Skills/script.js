// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const tempratures = [3, -2, -6, 'error', 9, 13, 17, 15, 4, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);

//Function should receive 2 arrays of temp.
const calcTempAmplitudeNew = function (t1, t2) {
  //   const array1 = ['a', 'b', 'c'];
  //   const array2 = ['d', 'e', 'f'];
  //   const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 5, 4]);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());


//Debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 5, 4]);
console.log(amplitudeBug);
*/

//Challenge

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}℃ ... ... ${data1[1]}℃ ... ... ${data1[2]}℃ ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}℃ in ${i + 1} days ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
