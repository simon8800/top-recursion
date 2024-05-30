function mergeSort(unsorted) {
  if (unsorted.length == 1) {
    return unsorted;
  }

  let midpoint = Math.floor(unsorted.length / 2);
  let leftHalf = unsorted.slice(0, midpoint);
  let rightHalf = unsorted.slice(midpoint);

  leftHalf = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);

  let l = 0;
  let r = 0;
  let k = 0;

  while (l < leftHalf.length && r < rightHalf.length) {
    if (leftHalf[l] < rightHalf[r]) {
      unsorted[k] = leftHalf[l];
      l++;
      k++;
    } else {
      unsorted[k] = rightHalf[r];
      r++;
      k++;
    }
  }

  while (l < leftHalf.length) {
    unsorted[k] = leftHalf[l];
    l++;
    k++;
  }
  while (r < rightHalf.length) {
    unsorted[k] = rightHalf[r];
    r++;
    k++;
  }

  return unsorted;
}

let arr1 = [1, 3, 2, 10, 8, 3];
let arr2 = [100, 29, 30, 209, 40];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
