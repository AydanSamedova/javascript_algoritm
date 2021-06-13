const arr = [1, 2, 3, 4, 9]
const first = arr[0]
const last = arr[arr.length - 1]
arr[0] = last
arr[arr.length - 1] = first
console.log(arr)