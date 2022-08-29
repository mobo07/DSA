const print = console.log;
//Problem Statement

/* 
Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

If there are multiple combinations possible, you may return any single one.
*/

//Naive Approach
//m = target sum
//n = numbers length
//Time Complexity -> O(n^m * m)
//Space Complexity -> O(m)
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      //Time Complexity -> O(m)
      return [...remainderResult, num];
    }
  }
  return null;
};

print(howSum(7, [2, 3])); //[3,2,2]
print(howSum(7, [5, 3, 4, 7])); //[4,3]
print(howSum(7, [2, 4])); // null
print(howSum(8, [2, 3, 5])); // [2,2,2,2]

// Dynamic Approach using memoization
//m = target sum
//n = numbers length
//Time Complexity -> O(n*m^2)
//Space Complexity -> O(m^2)
const memoizedHowSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = memoizedHowSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      //Time Complexity -> O(m)
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

print(memoizedHowSum(300, [7, 14])); //null
