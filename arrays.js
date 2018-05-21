var cities = ["New York", "San Francisco"]
 
var cities2 = "Philadelphia"


function addElementToBeginningOfArray(array, element) {
  newarray = [...array, `${element}`];
  return(newarray);
}

console.log(cities)


function destructivelyaddElementToBeginningOfArray(array, element) {
  array.unshift(`${element}`);
  return array
}

destructivelyaddElementToBeginningOfArray(cities,cities2)
console.log(cities)