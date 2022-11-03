/*La cola circular debe proporcionar enqueuey dequeuemétodos que le permiten leer y escribir en la cola.
La clase misma también debe aceptar un argumento entero que puede usar para especificar el tamaño de la cola cuando se crea.
Hemos escrito la versión inicial de esta clase para usted en el editor de código.
Cuando coloca elementos en la cola, el puntero de escritura debe avanzar y volver al principio una vez que llegue al final de la cola. 
Del mismo modo, el puntero de lectura debe avanzar hacia adelante a medida que retira elementos. 
No se debe permitir que el puntero de escritura pase más allá del puntero de lectura (nuestra clase no le permitirá sobrescribir datos que aún no haya leído) 
y el puntero de lectura no debería poder avanzar datos anteriores que haya escrito. 
Además, elenqueueEl método debería devolver el elemento que puso en cola si tiene éxito;
De lo contrario, volverá null. De manera similar, cuando retira un artículo, ese artículo debe devolverse y si no puede retirar un artículo, debe devolverlo null
*/

class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) this.write = 0;
      return item;
    }
    return null;
  }

  dequeue() {
    if (this.queue[this.read] != null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) this.read = 0;
      return item;
    }
    return null;
  }
}
