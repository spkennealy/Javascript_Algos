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