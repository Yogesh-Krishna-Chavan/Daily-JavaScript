// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const tempratures = [3, -2, -6, 'error', 9, 13, 17, 15, 4, 5];

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(tempratures);
// console.log(amplitude);

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
