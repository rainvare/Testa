/*Creemos la funcionalidad básica de una tabla hash. Hemos creado una función de hash ingenua para que la uses. 
Puede pasar un valor de cadena a la función hashy devolverá un valor hash que puede usar como clave para el almacenamiento. 
Almacene elementos basados ​​en este valor hash en el this.collectionobjeto. Crear estos tres métodos: add, remove, y lookup. 
El primero debe aceptar un par clave-valor para agregar a la tabla hash. El segundo debería eliminar un par clave-valor cuando se le pasa una clave. 
El tercero debe aceptar una clave y devolver el valor asociado o nullsi la clave no está presente."
*/
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
this.add = function(key, val) {
    var theHash = hash(key);
    if (!this.collection.hasOwnProperty(theHash)) {
      this.collection[theHash] = {};
    }
    this.collection[theHash][key] = val;
  }

  this.remove = function(key) {
    var hashedObj = this.collection[hash(key)];
    if (hashedObj.hasOwnProperty(key)) {
      delete hashedObj[key];
    }
    if (!Object.keys(hashedObj).length) {
      delete this.collection[hash(key)];
    }
  }

  this.lookup = function(key) {
    var theHash = hash(key);
    if (this.collection.hasOwnProperty(theHash)) {
      return this.collection[theHash][key];
    }
    return null
  }
  // change code above this line
};
