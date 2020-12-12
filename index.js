// Add your functions here
function map(array, fn) {
  let newArray = []

  for (const num of array) {
    newArray.push(fn(num))
  }
  return newArray
}

function reduce(array, fn, start) {
  let memo = true

  for(const num of array) {
    memo = fn(num, memo)
  }

  if (typeof memo == 'number') {
    memo -= 1
  }

  if (start == undefined) {
    return memo
  } else {
    return memo + start
  }
}
