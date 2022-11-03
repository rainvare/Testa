function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line
this.removeAt=function(index){
var currentNode= head;
var previus= head;
var count=0;
if(index>=length||index<0){
   return null;
};
if(index===0){
  var removed= head.element;
  head= currentNode.next;
} else{
    while(count<index){
      previus=currentNode;
      currentNode=currentNode.next;
      count++;
    }
    var removed=previus.next.element;
    previus.next=currentNode.next;
}
length--;
return removed;
}
  // Only change code above this line
}
