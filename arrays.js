var cities = ["New York", "San Francisco"]
 
var cities2 = "Philadelphia"


function addcities(array, element) {
  var newarray = [...array, `${element}`];
  return(newarray);
}


console.log(addcities(cities,cities2))