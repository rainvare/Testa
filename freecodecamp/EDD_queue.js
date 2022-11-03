/*
Escriba un enqueuemétodo que empuje un elemento a la cola de la cola, un dequeuemétodo que elimine y devuelva el elemento frontal,
un frontmétodo que nos permita ver el elemento frontal, 
un sizemétodo que muestre la longitud y un isEmptymétodo para verificar si la cola es vacío

*/

function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
this.enqueue = function(val) {
    collection.push(val);
  };
  this.dequeue = function() {
    return collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
  // Only change code above this line
}
