// ----------------------------------------------------------------------
// ------------------------- LEET CODE PROBLEMS -------------------------
// ----------------------------------------------------------------------

// 2. ADD TWO NUMBERS
// You are given two non - empty linked lists representing two non - negative 
// integers.The digits are stored in reverse order and each of their nodes 
// contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the 
// number 0 itself.

//     Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let currNode = dummy;
    let carry = 0;
    let node1 = l1;
    let node2 = l2;

    while (node1 || node2) {
        let x = 0;
        let y = 0;
        if (node1) x = node1.val;
        if (node2) y = node2.val;
        let sum = x + y + carry;
        carry = 0;
        if (sum >= 10) carry = 1;
        currNode.next = new ListNode(sum % 10);
        currNode = currNode.next;
        if (node1) node1 = node1.next;
        if (node2) node2 = node2.next;
    }

    if (carry === 1) currNode.next = new ListNode(1);
    return dummy.next;
};

// let a = new ListNode(2); 
// let b = new ListNode(4); 
// let c = new ListNode(3); 
// a.next = b;
// b.next = c;
// let d = new ListNode(5);
// let e = new ListNode(6);
// let f = new ListNode(4);
// d.next = e;
// e.next = f;

// console.log(addTwoNumbers(a, d));

// let a = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
// let b = [5, 6, 4];

const linkedListCreator = (arr) => {
    const list = [];
    let lastNode;

    while (arr.length > 0) {
        if (list.length > 0) lastNode = list[list.length - 1];
        let newNode = new ListNode(arr.shift());
        if (list.length > 0) lastNode.next = newNode;
        list.push(newNode);
    }

    return list;
};

// let list1 = linkedListCreator(a);
// let list2 = linkedListCreator(b);

// console.log(list1);
// console.log(list2);

// console.log(addTwoNumbers(list1[0], list2[0]));



// ----------------------------------------------------------------------
// ----------------------------------------------------------------------



// 3. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
// Given a string, find the length of the longest substring without repeating 
// characters.

//     Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function (s) {
    let longestSubCount = 0;
    let set = new Set();
    let i = 0;
    let j = 0;

    while (i < s.length && j < s.length) {
        if (!set.has(s[j])) {
            set.add(s[j]);
            j++;
            longestSubCount = Math.max(longestSubCount, j - i);
        } else {
            set.delete(s[i]);
            i++;
        }
    }

    return longestSubCount;
};

// console.log(lengthOfLongestSubstring("pwwkew")); // 3
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
// console.log(lengthOfLongestSubstring("bbbbb")); // 1



// ----------------------------------------------------------------------
// ----------------------------------------------------------------------



// 4. MEDIAN OF TWO SORTED ARRAYS
// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays.The overall run time complexity 
// should be O(log(m + n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// const nums1 = [1, 3];
// const nums2 = [2];

// The median is 2.0

// Example 2:

// const nums3 = [1, 2];
// const nums4 = [3, 4];

// The median is(2 + 3) / 2 = 2.5

// var findMedianSortedArrays = function (nums1, nums2) {
    
// };

// console.log(findMedianSortedArrays(nums1, nums2));
// console.log(findMedianSortedArrays(nums3, nums4));



// ----------------------------------------------------------------------
// ----------------------------------------------------------------------



// 7. REVERSE INTEGER
// Given a 32 - bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers 
// within the 32 - bit signed integer range: [−231, 231 − 1].For the purpose of 
// this problem, assume that your function returns 0 when the reversed integer 
// overflows.

var reverse = function (x) {
    let num;

    if (x < 0) {
        num = Math.abs(x).toString().split("").reverse().join("");
        num = -parseInt(num);
    } else {
        num = x.toString().split("").reverse().join("");
        num = parseInt(num);
    }

    if (Math.pow(2, 31) - 1 < num) return 0;
    if (Math.pow(-2, 31) > num) return 0;
    return num;
};

// console.log(reverse(123)); // 321
// console.log(reverse(-123)); // -321
// console.log(reverse(120)); // 21
// console.log(reverse(1534236469)); // 0



// ----------------------------------------------------------------------
// ----------------------------------------------------------------------



// 9. PALINDROME NUMBER
// Determine whether an integer is a palindrome.An integer is a palindrome when 
// it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it 
// becomes 121 -.Therefore it is not a palindrome.

// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.

var isPalindrome = function (x) {
    return x.toString() === x.toString().split("").reverse().join("");
};

// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false

// Follow up:
// Coud you solve it without converting the integer to a string ?

var isPalindrome2 = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    
    let inverted = 0;
    while (x > inverted) {
        inverted = inverted * 10 + x % 10;
        x /= 10;
    }

    return x === inverted || x === inverted / 10;
};

// console.log(isPalindrome2(121)); // true
// console.log(isPalindrome2(-121)); // false
// console.log(isPalindrome2(10)); // false



// ----------------------------------------------------------------------
// ----------------------------------------------------------------------



// 13. ROMAN TO INTEGER
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral, just two one's added 
// together. Twelve is written as, XII, which is simply X + II. The number 
// twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII.Instead, the number four is written 
// as IV. Because the one is before the five we subtract it making four. The 
// same principle applies to the number nine, which is written as IX. There are 
// six instances where subtraction is used:

// I can be placed before V(5) and X(10) to make 4 and 9.
// X can be placed before L(50) and C(100) to make 40 and 90.
// C can be placed before D(500) and M(1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer. Input is guaranteed to be 
// within the range from 1 to 3999.

// Example 1:

// Input: "III"
// Output: 3

// Example 2:

// Input: "IV"
// Output: 4

// Example 3:

// Input: "IX"
// Output: 9

// Example 4:

// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3.

// Example 5:

// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

var romanToInt = function (s) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let converted = map[s[0]];
    let i = 1;

    while (i < s.length) {
        let currNum = s[i];
        let prevNum = s[i-1];
        if (prevNum === "I" && currNum === "V") {
            converted += 3;

        } else if (prevNum === "I" && currNum === "X") {
            converted += 8;
        } else if (prevNum === "X" && currNum === "L") {
            converted += 30;
        } else if (prevNum === "X" && currNum === "C") {
            converted += 80;
        } else if (prevNum === "C" && currNum === "D") {
            converted += 300;
        } else if (prevNum === "C" && currNum === "M") {
            converted += 800;
        } else {
            converted += map[s[i]];
        }
        i++;
    }

    return converted;
};

// console.log(romanToInt("III")); // 3
// console.log(romanToInt("IV")); // 4
// console.log(romanToInt("IX")); // 9
// console.log(romanToInt("LVIII")); // 58
// console.log(romanToInt("MCMXCIV")); // 1994



// ----------------------------------------------------------------------
// ----------------------------------------------------------------------



// 14. LONGEST COMMON PREFIX
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower", "flow", "flight"]
// Output: "fl"

// Example 2:

// Input: ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a - z.

var longestCommonPrefix = function (strs) {
    let longestPre = "";
    let firstWord = strs.shift();

    for (let i = firstWord.length; i > 0; i--) {
        if (checkPre(strs, firstWord.slice(0, i))) {
            longestPre = firstWord.slice(0, i);
            break;
        }
    }

    return longestPre;
};

// TODO: ANY STRING CAN SHARE A PREFIX

const checkPre = (strings, pre) => {
    for (let i = 0; i < strings.length; i++) {
        if (!strings[i].includes(pre)) return false;
    }
    return true;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
// console.log(longestCommonPrefix(["great", "greg", "grow"])); // "gr"
// console.log(longestCommonPrefix(["strings", "string", "stringy", "stringly"])); // "gr"


var findMedianSortedArrays = function (nums1, nums2) {
    let searchArr = (nums1.length <= nums2.length) ? nums1 : nums2;
    let xSize = nums1.length;
    let ySize = nums2.length;

    let start = 0;
    let end = searchArr.length;

    while (start <= end) {
        let partitionX = (start + end) / 2;
        let partitionY = ((xSize + ySize + 1) / 2) - partitionX;

        let maxLeftX = (partitionX == 0) ? -Infinity : nums1[partitionX - 1];
        let minRightX = (partitionX == xSize) ? Infinity : nums1[partitionX];

        let maxLeftY = (partitionY == 0) ? -Infinity : nums2[partitionY - 1];
        let minRightY = (partitionY == ySize) ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((xSize + ySize) % 2 == 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            start = partitionX - 1;
        } else {
            end = partitionX + 1;
        }
    }
};

console.log(findMedianSortedArrays([1, 3], [2]));