/* Stack class
Escriba un método push(); que empuje un elemento a la parte superior de la pila,
un método pop(); que elimine y devuelva el elemento en la parte superior de la pila,
un peek(); que observe el elemento superior de la pila, 
un isEmpty();o que verifica si la pila está vacía ,
y un clear(); que elimina todos los elementos de la pila
*/

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
this.push=function(val) {
    return collection.push(val);
  };
this.pop=function() {
    return collection.pop();
};
this.peek = function() {
    return collection[collection.length - 1];
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
  this.clear = function() {
    collection.length = 0;
  };
}
