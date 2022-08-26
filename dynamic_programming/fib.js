const print = console.log;

//Brute Force Approach
//Time complexity -> O(2^n)
//Space complexity -> O(n)
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

print(fib(7)); //13

//Dynamic Approach using memoization
//Time complexity -> O(n)
//Space complexity -> O(n)
const memoizedFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
};

print(memoizedFib(50)); //12586269025
