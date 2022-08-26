const print = console.log;
//Problem Statement

/*
Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m * n?

Write a function `gridTraveler(m, n)` that calculates this.
*/

//Naive Approach
//Time Complexity -> O(2^(n+m))
//Space Complexity -> O(n+m)
const gridTraveler = (m, n) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

print(gridTraveler(1, 1)); //1
print(gridTraveler(2, 3)); //3
print(gridTraveler(3, 2)); //3
print(gridTraveler(3, 3)); //6

//Dynamic Approach using memoization
//Time Complexity -> O(n*m)
//Space Complexity -> O(n+m)
const memoizedGridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;
  memo[key] =
    memoizedGridTraveler(m - 1, n, memo) + memoizedGridTraveler(m, n - 1, memo);
  return memo[key];
};

print(memoizedGridTraveler(18, 18)); //2333606220
