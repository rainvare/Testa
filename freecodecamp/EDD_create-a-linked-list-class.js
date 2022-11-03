/*
Creemos una linked list clase. Cada lista vinculada debe comenzar con algunas propiedades básicas:
 head(el primer elemento de su lista) 
y  length(número de elementos de su lista). 

A veces verá implementaciones de listas enlazadas que incorporan un tailpara el último elemento de la lista, 
pero por ahora nos quedaremos con estos dos.
Siempre que agreguemos un elemento a la lista vinculada, nuestra lengthpropiedad debe incrementarse en uno.

Querremos tener una forma de agregar elementos a nuestra lista vinculada, 
por lo que el primer método que queremos crear es el addmétodo.

Si nuestra lista está vacía, agregar un elemento a nuestra lista vinculada es bastante sencillo: 
simplemente envolvemos ese elemento en una Nodeclase y asignamos ese nodo al headde nuestra lista vinculada.

Pero, ¿y si nuestra lista ya tiene uno o más miembros? 
¿Cómo agregamos un elemento a la lista? Recuerde que cada nodo de una lista vinculada tiene una nextpropiedad. 
Para agregar un nodo a la lista, busque el último nodo de la lista y 
apunte la nextpropiedad de ese último nodo a nuestro nuevo nodo.
(Sugerencia: sabe que ha llegado al final de una lista vinculada cuando la nextpropiedad de un nodo es null).
*/


function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
var node= new Node(element);
 if (head){
   let current= head;
   while(current.next!=null){
     current=current.next
   }
   current.next=node;
 }
 else{
   head=node;
 }
 length++;
    // Only change code above this line
  };
}
