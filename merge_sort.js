function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function merge_sort(a) {
  if (a.length <= 1) return a;
  let mid = Math.floor(a.length / 2);
  let left = a.splice(0, mid);
  let right = a;
  return merge(merge_sort(left), merge_sort(right));
}

console.log(
  merge_sort([3, 9, 10, 48, 98, 77, 23, 0, 12, 5, 4, 2, 90, 100, 1, 24])
);
