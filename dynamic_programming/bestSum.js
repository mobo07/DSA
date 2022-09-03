const print = console.log;
//Problem Statement

/*
Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any one of the shortest.
*/

//Naive Approach
//m = target sum
//n = numbers length
//Time Complexity -> O(n^m * m)
//Space Complexity -> O(m^2)

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers);
    if (remainderResult !== null) {
      const combination = [...remainderResult, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};

print(bestSum(7, [5, 3, 4, 7])); // [7]
print(bestSum(8, [2, 3, 5])); // [3,5] || [5,3]
print(bestSum(8, [1, 4, 5])); // [4,4]

// Dynamic Approach using memoization
//m = target sum
//n = numbers length
//Time Complexity -> O(n*m^2)
//Space Complexity -> O(m^2)

const memoizedBestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  if (targetSum in memo) return memo[targetSum];
  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = memoizedBestSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      const combination = [...remainderResult, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

print(memoizedBestSum(100, [1, 2, 5, 25]));
