function swap(arr, pos1, pos2) {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]]
  return arr;
}

function print(arr) {
  console.log(arr)
}

function heapsAlgorithm(arr, len) {
  if (len === 1)
    print(arr)
  else {
    for (let x = 0; x < len; x++) {
      heapsAlgorithm(arr, len-1)
      if (len%2 == 0) {
        swap(arr, 0, len-1)
      }
      else {
        swap(arr, 0, len-1)
      }
    }
  }
}

heapsAlgorithm(['a','b','c'], 3)