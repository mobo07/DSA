const print = console.log;
//Problem Statement

/* 
Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.

The function should return a boolean indicating whether or not the `target` chan be constructed by concatenating elements of the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.
*/

//Naive Approach
//m = target.length
//n = wordBank.length
//Time Complexity -> O((n^m)*m)
//Space Complexity -> O(m^2)

const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      //Time Complexity -> O(m)
      //Space Complexity -> O(m)
      let suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) return true;
    }
  }
  return false;
};

print(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
print(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false
print(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); //true;

// Dynamic Approach using memoization
//m = target.length
//n = wordBank.length
//Time Complexity -> O(n*m^2)
//Space Complexity -> O(m^2)

const memoizedCanConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (memoizedCanConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

print(
  memoizedCanConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); //false;
