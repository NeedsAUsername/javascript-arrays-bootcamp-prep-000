var cities = ["New York", "San Francisco"]
 
var cities2 = "Philadelphia"


function addElementToBeginningOfArray(array, element) {
  newarray = [...array, `${element}`];
  return(newarray);
}


addElementToBeginninerofArray()
console.log(newarray)


function destructivelyaddElementToBeginningOfArray(array, element) {
  array = [...array, `${element}`]
  return array
}

console.log(array)