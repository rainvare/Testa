/* tipos de matrices escritas disponibles y el tamaño en bytes para cada elemento en esa matriz.

Tipo =	Cada tamaño de elemento en bytes
Int8Array	=1 [0]
Uint8Array =	1
Uint8ClampedArray	= 1
Int16Array	= 2 {0,0]
Uint16Array=	2
Int32Array	=4 
Uint32Array	=4 [0,0,0,0]
Float32Array	=4 
Float64Array	=8 [0,0,0,0,0,0,0,0]

Formas de crear una matriz escrita:
a) directamente
var i8 = new Int16Array(3);
console.log(i8); // Returns [0, 0, 0]
b) con un buffer.
Para crear matrices escritas utilizando buffers, debe asignar el número de bytes para que sea un múltiplo de los bytes enumerados anteriormente.
ejm:
// Create same Int16Array array differently
var byteSize = 6; // Needs to be multiple of 2
var buffer = new ArrayBuffer(byteSize);
var i8View = new Int16Array(buffer);
buffer.byteLength; // Returns 6
i8View.byteLength; // Returns 6
console.log(i8View); // Returns [0, 0, 0]

*/


var byteSize=64; //multiplo de 2
var buffer=new ArrayBuffer(byteSize); // crear buffer
var i32View= new Int32Array(buffer);

buffer.byteLength; // Returns 64
i32View.byteLength; // Returns 64
console.log(i32View);
