/*Cree un método add que agregue un valor único a la colección establecida
y devuelva true si el valor se agregó con éxito y de lo contrario false .

Cree un método remove que acepte un valor y verifique si existe en el conjunto.
Si lo hace, este método debería eliminarlo de la colección establecida y volver true.
De lo contrario, debería devolver false. Cree un método size que devuelva el tamaño de 
la colección establecida.*/

class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set as an array
  values() {
    return Object.keys(this.dictionary);
  }

  // change code below this line
  
  // this method will add an element to the set
  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = true;
      this.length++;
      return true;
    }

    return false;
  }
  // this method will remove an element from a set
  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }
  // this method will return the size of the set
  size() {
    return this.length;
  }
  // change code above this line
}
