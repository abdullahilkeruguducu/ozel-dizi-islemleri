function rotateArray(arr: number[], n: number) {
  const rotatedArray = arr.slice(-n).concat(arr.slice(0, -n));
  return rotatedArray;
}

console.log(rotateArray([1, 2, 3, 4, 5], 1));
