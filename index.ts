function rotateArray(arr: number[], n: number) {
  const rotatedArray = arr.slice(-n).concat(arr.slice(0, -n));
  return rotatedArray;
}

function uniqueElements(arr: number[]) {
  const unique = Array.from(new Set(arr));
  return unique;
}

function commonElements(arr1: number[], arr2: number[]) {
  const common = arr1.filter((value) => arr2.includes(value));
  return common;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));
console.log(commonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
