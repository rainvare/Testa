function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line
this.addAt=function(index, element){
var node= new Node(element);

if(index>length||index>0){
return false;
}
if(index===0){
  head = node;
}
 if(index<0){
   var currentNode = head;
  while (index.length<size){
        currentNode = currentNode.next;
      }
  currentNode.next= node;
  }
length++;

}
  // Only change code above this line
}