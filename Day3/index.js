//getting output from JSON
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v3.1/all", true);
// xhr.onload = function () {
//   //console.log("XMLHTTPRequest -status", xhr.status);
//   var countries = JSON.parse(xhr.responseText);
//   //countries.forEach((country) => {
//   //console.log(country.name.common + ":" + country.flag);
//   for (i = 0; i < countries.length; i++) {
//     console.log(countries[i].name.common + " " + countries[i].flag);
//     console.log("region:", countries[i].region);
//     console.log("subregion:", countries[i].subregion);
//     console.log("population:", countries[i].population);
//   }
// };

// xhr.send();

//
//compare same objects in JSON
let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };
function areObjectsEqual(obj1, obj2) {
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (var i = 0; i < key1.length; i++) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
  console.log(areObjectsEqual(obj1, obj2));
}

//console.log("obj1 keys:", Object.keys(obj1));
//console.log("obj2 keys:", Object.keys(obj2));
