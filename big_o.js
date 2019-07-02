// ---------------- find_missing_number ----------------
//
// Assume an array of non - negative integers. A second array is formed by 
// shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.
// Do this in linear time with constant memory use.

// Method Signature
// find_missing_number(array arr1, array arr2)

// Example input / output
//     > find_missing_number([8, 3, 5, 1], [1, 5, 3]) // = 8

//     > find_missing_number([1, 1, 1, 1], [1, 1, 1]) // = 1

//     > find_missing_number([3, 5, 4, 8, 7, 9], [7, 4, 3, 5, 9]) // = 8

const findMissingNumber = (arr1, arr2) => {
    const hash = {};
    arr1.forEach(num => {
        if (hash[num]) {
            hash[num] += 1;
        } else {
            hash[num] = 1;
        }
    });

    arr2.forEach(num => {
        if (!hash[num]) return num;
        if (hash[num]) hash[num] -=1;
    });

    for (let key in hash) {
        if (hash[key] > 0) return key;
    }
};

// console.log(findMissingNumber([8, 3, 5, 1], [1, 5, 3])); // = 8
// console.log(findMissingNumber([1, 1, 1, 1], [1, 1, 1])); // = 1
// console.log(findMissingNumber([3, 5, 4, 8, 7, 9], [7, 4, 3, 5, 9]));  // = 8


// ---------------- my_min ----------------
// 
// Given a list of integers find the smallest number in the list.


// Phase I
// First, write a function that compares each element to every other element 
// of the list. Return the element if all other elements in the array are larger.

const myMin = (list) => {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length; j++) {
            if (i !== j) {
                if (list[i] > list[j]) break;
                if ((j === list.length - 1) && list[i] <= list[j]) {
                    return list[i];
                }
            }
        }
    }
};

// Example
// const listEx = [0, 3, 5, 4, -5, 10, 1, 90];
// console.log(myMin(listEx)); // => -5

// What is the time complexity for this function? O(n^2)

// Phase II
// Now, rewrite the function to iterate through the list just once while 
// keeping track of the minimum.

const myMin2 = (list) => {
    let minNum = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] < minNum) {
            minNum = list[i];
        }
    }

    return minNum;
};

// Example
// const listEx2 = [0, 3, 5, 4, -5, 10, 1, 90];
// console.log(myMin2(listEx2)); // => -5

// What is the time complexity ? O(n)


// ------------- Largest Contiguous Sub - sum -------------
// You have an array of integers and you want to find the largest contiguous
// (together in sequence) sub - sum.Find the sums of all contiguous sub - arrays 
// and return the max.


// Phase I
// Write a function that iterates through the array and finds all sub - arrays 
//using nested loops. First make an array to hold all sub - arrays.
//Then find the sums of each sub - array and return the max.

const LargestCSubSum = (list) => {
    let subArray = [];

    for (let i=0; i < list.length; i++) {
        for(let j=i; j < list.length; j++) {
            subArray.push(list.slice(i,j+1));
        }
    }

    let maxSum;
    let currentSum = 0;

    subArray.forEach( sub => {
        sub.forEach(number => {
            currentSum += number;
        });
        
        if (!maxSum || currentSum > maxSum) {
            maxSum = currentSum; 
        }
        currentSum = 0;
    });

    return maxSum;
};

//     Example:
const list1 = [5, 3, -7];
// console.log(LargestCSubSum(list1));
//# => 8

// # possible sub - sums
// [5]# => 5
// [5, 3]# => 8 -- > we want this one
// [5, 3, -7]# => 1
// [3]# => 3
// [3, -7]# => -4
// [-7]# => -7
// Example 2:

const list2 = [2, 3, -6, 7, -6, 7];
// console.log(LargestCSubSum(list2));
//# => 8(from[7, -6, 7])
// Example 3:

const list3 = [-5, -1, -3];
// console.log(LargestCSubSum(list3));
// # => -1(from[-1])

// Discuss the time complexity of this solution.

// Phase II
// Let's make a better version. Write a new function using O(n) time with O(1) 
// memory. Keep a running tally of the largest sum.

const LargestCSubSum2 = (list) => {
    let maxSum = list[0];
    let currentSum = list[0];
    for (let i = 1; i < list.length ; i++) {
        const nextNum = list[i];
        if (currentSum < 0) currentSum = 0;
        currentSum += nextNum;
        if (currentSum > maxSum) maxSum = currentSum;
    }
    return maxSum;
};

//     Example:
// console.log(LargestCSubSum2(list1));
//# => 8

// # possible sub - sums
// [5]# => 5
// [5, 3]# => 8 -- > we want this one
// [5, 3, -7]# => 1
// [3]# => 3
// [3, -7]# => -4
// [-7]# => -7
// Example 2:

// console.log(LargestCSubSum2(list2));
//# => 8(from[7, -6, 7])
// Example 3:

// console.log(LargestCSubSum2(list3));
// # => -1(from[-1])

