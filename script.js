// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1
/* We work for a company building a smart home
thermometer. Our most recent task is this: "Given an
array of temperatures of one day, calculate then
temperature amplitude. Keep in mind that sometimes there might be
a sensor error."
 */

/* const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [-15, 2, 1, -16];

// 1) Undestanding the problem
// - What is temp amplitude? Answer: difference between
// highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? and what to do=

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max(amplitude) and return it

//Using a debugger
const calcTempAmplitudeBug = function (temps1, temps2) {
  const temps3 = temps1.concat(temps2);
  console.log(temps3);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps3.length; i++) {
    const curTemp = temps3[i];

    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  //   console.log(`max ${max} and min ${min}`);
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);
// const amplitudeBug = calcTempAmplitudeBug(temperatures, temperatures2);
// console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) undestanding the problem
// - with 2 arrays, should we implement funcionality
// twice? NO! Just merge two arrays into

//2) Breaking up into sub-problems
// - How to merge 2 arrays?

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //C) FIX
    // value: Number(prompt('Degrees celsius :')),
    value: 10,
    //value: prompt('Degrees celsius:'),
  };

  //B) FIND
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin()); */

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
- Data 1: [17, 21, 23]
- Data 2: [12, 5, -5, 0, 4] 
*/

/* 1) Undestanding the problem
- Print forecasted maximum temperatures. Array tranformed to string, separated by ... and print 
- What is the x days? Answer: index +1;

2) Breaking up into sub-problems
- Transform array into string
- Transform each element to string with °C
- Strings need to contain day (index + 1)
- Add ... between elements and start and end of string.
- Log string to console

 */

const array1 = [17, 21, 23];
const array2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue;

    str += `... ${arr[i]}°C in ${i + 1} days`;

    // console.log(`... ${arr[i]}°C in ${i + 1} days ...`);
  }
  console.log(str);
};

// printForecast(array2);
printForecast(array1);
