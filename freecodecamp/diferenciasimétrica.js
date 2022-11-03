/*Cree una función que tome dos o más matrices 
y devuelva una matriz de su diferencia simétrica. 
La matriz devuelta debe contener solo valores únicos 
( sin duplicados ).*/

function sym() {
    var args = [];
    
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  
    function symDiff(arrayOne, arrayTwo) {
      var result = [];
  
      arrayOne.forEach(function(item) {
        if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      arrayTwo.forEach(function(item) {
        if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
          result.push(item);
        }
      });
  
      return result;
    }
  

    return args.reduce(symDiff);
  }