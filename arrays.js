var cities = ["New York", "San Francisco"];
 
var cities2 = "Philadelphia";


function addElementToBeginningOfArray(array, element) {
  newarray = [...array, `${element}`];
  return(newarray);
}

addElementToBeginningOfArray(cities,cities2);
console.log(cities);
console.log(newarray)


function destructivelyaddElementToBeginningOfArray(array, element) {
  array.unshift(`${element}`);
  return array;
}

destructivelyaddElementToBeginningOfArray(cities,cities2);
console.log(cities);