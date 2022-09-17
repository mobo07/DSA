//Returns the index of the search key if found in the list
//Only works for a sorted array

function binary_search(list, key) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (list[mid] === key) return mid;
    else if (list[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

let arr = [];

for (let i = 1; i <= 10000; ++i) {
  arr.push(i);
}

console.log(binary_search(arr, 9995));
