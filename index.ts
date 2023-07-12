function rotateArray(arr: number[], n: number) {
  const rotatedArray = arr.slice(-n).concat(arr.slice(0, -n));
  return rotatedArray;
}

function uniqueElements(arr: number[]) {
  const unique = Array.from(new Set(arr));
  return unique;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5]));
