function recCycle(n) {
    let dividend = 1, res = "", hashmap = {}
    for (let x = 0; x < 1000; x++) {
        res += Math.floor(dividend/n)
        dividend = 10 * (dividend - Math.floor(dividend/n) * n)
        if (!hashmap.hasOwnProperty(dividend)) {
            hashmap[dividend] = 0
        }
        else {
            return x
        }
    }
    return -1
}

function binarySearch(arr, target) {
    let left = 0, right = arr.length-1, mid
    
    while (left <= right) {
        mid = Math.floor((left+right)/2)
        if (arr[mid] === target)
            return mid
        else if (arr[mid] < target)
            left = mid + 1
        else
            right = mid - 1
    }
    return -1
}

let arr = [1, 3, 5, 10, 20, 30, 500]
console.log(binarySearch(arr, 10))