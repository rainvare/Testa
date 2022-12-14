/*test:
Compare y actualice el inventario almacenado en una matriz 2D con una segunda matriz 2D de una entrega nueva. 
Actualice las cantidades actuales de artículos de inventario existentes (en arr1). Si no se puede encontrar un artículo, 
agregue el nuevo artículo y la cantidad en la matriz de inventario. La matriz de inventario devuelta debe estar en orden alfabético por artículo.
*/

function updateInventory(arr1, arr2) {
  // Variable for location of product
  var index;

  // A helper method to return the index of a specified product (undefined if not found)
  var getProductIndex = function(name) {
    for (var i = 0; i < this.length; i++) {
      if (this[i][1] === name) {
        return i;
      }
    }
    return undefined;
  };

  // For each item of the new Inventory
  for (var i = 0; i < arr2.length; i++) {
    // Invoke our helper function using arr1 as this
    index = getProductIndex.call(arr1, arr2[i][1]);

    // If the item doesn't exist
    if (index === undefined) {
      // Push the entire item
      arr1.push(arr2[i]);
    } else {
      // Add the new quantity of the current item
      arr1[index][0] += arr2[i][0];
    }
  }

  // Sort alphabetically, by the product name of each item
  arr1.sort(function(a, b) {
    if (a[1] > b[1]) {
      return 1;
    }
    if (a[1] < b[1]) {
      return -1;
    }
    return 0;
  });

  return arr1;
}

// test here
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
