// function totalpurchase(purchaseAmount, discount) {
//   var purchaseAmount = 2000;
//   var discount = 500;
//     var totalBalance = purchaseAmount - discount;
//     console.log(totalBalance);
// }
// totalpurchase();

var totalPurchase = function () {
  var purchaseAmount = 2000;
  var discount = 500;
  var totalBalance = purchaseAmount - discount;
  return totalBalance;
};
console.log(totalPurchase());


//	Convert all the strings to title caps in a string array//
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
	        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
	    return str.join(' ');
	}
console.log(titleCase("full stack development"));
//
  