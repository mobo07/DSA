const print = console.log;

//Problem Statement
/* 
Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are non-negative.
*/

//Naive Approach
//m = target sum
//n = numbers length
//Time Complexity -> O(n^m)
//Space Complexity -> O(m)
const canSum = (target, numbers) => {
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if (canSum(remainder, numbers) === true) return true;
  }
  return false;
};

print(canSum(7, [2, 3])); //true
print(canSum(7, [5, 3, 4, 7])); //true
print(canSum(7, [2, 4])); //false
print(canSum(8, [2, 3, 5])); //true

//Dynamic Approach using memoization
//m = target sum
//n = numbers length
//Time Complexity -> O(m*n)
//Space Complexity -> O(m)

const memoizedCanSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    const remainder = target - num;
    if (memoizedCanSum(remainder, numbers, memo) === true) {
      memo[target] = true;
      return true;
    }
  }
  memo[target] = false;
  return false;
};

print(memoizedCanSum(300, [7, 14])); //false;
