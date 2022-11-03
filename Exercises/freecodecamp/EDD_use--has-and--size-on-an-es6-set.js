function checkSet(arrToBeSet, checkValue){

   // change code below this line
   var set = new Set(arrToBeSet);
   var hasTwo = set.has(checkValue);
   var howBig = set.size;
   return [hasTwo,howBig]
   // change code above this line

}

checkSet([ 1, 2, 3], 2); // Should return [ true, 3 ]
