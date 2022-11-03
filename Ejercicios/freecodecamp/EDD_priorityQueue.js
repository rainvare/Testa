//Una cola prioritaria es un tipo especial de cola en la que los elementos pueden tener información adicional que especifica su prioridad.
/*Comenzamos a escribir un PriorityQueueen el editor de código. 
Deberá agregar un enqueue método para agregar elementos con prioridad,
un dequeue método para eliminar elementos, un size para devolver el número de elementos en la cola,
un front para devolver el elemento al frente de la cola y, finalmente, 
un isEmptyque volverá truesi la cola está vacía o falsesi no lo está.

El enqueuedebe aceptar artículos con el formato que se muestra arriba ( ['human', 1]),
donde 1representa la prioridad. El dequeuedebería devolver sólo el elemento actual, no su prioridad.
*/

function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // Only change code above this line
}
