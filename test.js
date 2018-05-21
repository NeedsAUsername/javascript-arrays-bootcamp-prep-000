function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift();
}

var a = ['1','2','3']
destructivelyRemoveElementFromBeginningOfArray(a)

console.log(a)