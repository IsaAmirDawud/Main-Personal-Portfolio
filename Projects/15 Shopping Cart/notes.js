/*JavaScript has a class. In JavaScript, a class is like a blueprint for creating objects.
It allows you to define a set of properties and methods, and instantiat (or create) new objects with
those properties and methods.*/

// The class keyword is used to declare a class. 

class Laptop {}; 

/*Classes hava a special constructor method, which is called when a new instance of the class
is created. The constructor method is a great place to initialize properties of the class*/

class Iphone {
    constructor() {}
}

/* The this keyword in JavaScript is used to refer to the current object. Depending on where 
this is used, what it references changes. In the case of a class, it refers to the instance of 
the object being constructed. You can use the this keyword to set the properties of the object 
being instantiated.*/ 

class Computer {
    constructor() {
      this.ram = 16;
    }

    addRam(amount) {
        this.ram += amount;
    }
  }

//instantiate a new ShoppingCart object
const myComputer = new Computer(); 

/*Because of the way computers store and work with numbers, calculations involving decimal 
numbers can result in some strange behavior. For example, 0.1 + 0.2 is not equal to 0.3. This 
is because computers store decimal numbers as binary fractions, and some binary fractions 
cannot be represented exactly as decimal fractions.

We want to clean up the number result from your calculation. Wrap your calculation in 
parentheses (don't include the return statement!) and call the .toFixed() method on it. Pass 
the .toFixed() method the number 2 as an argument. This will round the number to two decimal 
places and return a string.*/

/*The issue with .toFixed() returning a string is that you want to be able to perform 
calculations with the tax rate. To fix this, you can pass the .toFixed() call (including the 
calculation) to the parseFloat() function. This will convert the fixed string back into a 
number, preserving the existing decimal places.*/ 

/*Browsers have a built-in confirm() function which displays a confirmation prompt to the user.
confirm() accepts a string, which is the message displayed to the user. It returns true if the 
user confirms, and false if the user cancels.*/ 