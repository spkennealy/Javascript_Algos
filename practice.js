// Given two strings, how many copies of str1 do I need to make str2?
// str1="zyxwa", str2="xazyx" => 2

// const countCopies = (str1, str2) => {
//     const map = {};
//     for (let idx1 = 0; idx1 < str1.length; idx1++) {
//         let currentChar1 = str1[idx1];
//         if (map[currentChar1]) {
//             map[currentChar1].push(idx1);
//         } else {
//             map[currentChar1] = [idx1];
//         }
//     }

//     let cycles = 1;
//     let prevPos = -1;

//     for (let idx2 = 0; idx2 < str2.length; idx2++) {
//         let currentChar2 = str2[idx2];
//         if (!map[currentChar2]) return null;
    
//         for (let charIndex of str2) {
//             if (charIndex > prevPos) {
//                 prevPos = charIndex;
//                 break;
//             }
//         }


//     }
// };

// console.log(countCopies("abcdefc", "bcaef") === 2);
// console.log(countCopies("abd", "abdabd") === 2);
// console.log(countCopies("a", "bc") === -1);
// console.log(countCopies("aabcd", "acdaab") === 2);
// console.log(countCopies("aabcdaa", "acdaab") === 2);
// console.log(countCopies("aabfcdaa", "acdaabfff") === 4);
// console.log(countCopies("acdaabfff", "a") === 1);
// console.log(countCopies("qwertyu", "uytrewq") === 7); 

// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function absurdTimesAsync(numTimes, fnAsync, completionFn) {
//     let i = 0;

//     function loopStep() {
//         if (i == numTimes) {
//             // we're done, stop looping
//             completionFn();
//             return;
//         }

//         i++;

//         // fnAsync is an asynchronous function that takes a callback (in this case loopStep)
//         fnAsync(loopStep);
//     }

//     loopStep();
// }

// function addTwoNumbersAsync(callback) {
//     reader.question("Enter #1: ", function (numString1) {
//         reader.question("Enter #2: ", function (numString2) {
//             const num1 = parseInt(numString1);
//             const num2 = parseInt(numString2);

//             callback(num1 + num2);
//         });
//     });
// }

// let totalSum = 0;

// function addTwoNumbersAndIncrementAsync(callback) {
//     addTwoNumbersAsync(function (result) {
//         totalSum += result;

//         console.log(`Sum: ${result}`);
//         console.log(`Total Sum: ${totalSum}`);

//         callback();
//     });
// }

// function outputResultAndCloseReader() {
//     console.log(`All done! Total Sum: ${totalSum}`);
//     reader.close();
// }

// absurdTimesAsync(3, addTwoNumbersAndIncrementAsync, outputResultAndCloseReader);


// Array.prototype.myEvery = function (func) {
//     for (let i = 0; i < this.length; i++) {
//         if (!func(this[i])) return false;
//     }

//     return true;
// };


// const result = [1, 2, 3, 4, 5].myEvery(num => num < 3);
// console.log(result);



// const subsets = array => {
//     if (array.length < 1) return [[]];
//     let first = array[0];
//     const subs = subsets(array.slice(1));
//     return subs.concat(subs.map(el => el.concat([first])));
// };

// console.log(subsets([1, 2, 3]));
