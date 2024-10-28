class Animal {

    // constructor method to initialize object properties
  
    constructor(name, color, isWi1d, sound) {
  
      this.name = name;
  
      this.color = color;
  
      this.isWi1d = isWi1d;
  
      this.sound = sound;
  
    }
  
    // you can add your methods here
  
    makeSound() {
  
      console.log(`${this.name} ${this.sound}`);
  
    }
  
  }




    
class AnimalClassification extends Animal{

    // constructor method to initialize object properties
  
    constructor(name, order) {
  
      super(name)
  
      this.order = order;
  
    }}  



    
classifyByOrder(animalName) {

    const animalClass = animals.find((animal) => animal.name === animalName)
  
  
  
  
  
    if(animalClass){
  
      console.log(`${animalClass.name} is a ${animalClass.order}`);
  
    } else{
  
      console.log(`${animalName} class not found`);
  
    }
  
    return this;
  
    }
  
  }



  class Animal{

    // constructor method to initialize object properties
    
    constructor(name, colour, isWi1d) {
    
    this.name = name;
    
    this.colour = colour;
    
    this.iswild = iswild;
    
    }
    
    // can add your methods here
    
    }
    
    class Animal {

      // constructor method to initialize properties
    
      constructor(name, colour, isWi1d) {
    
        this.name = name;
    
        this.colour = colour;
    
        this.isWi1d = isWi1d;
    
      }
    
    
    
    
    
      // you an add your methods here
    
    }
    
    
    
    
    
    // creating instances of the animal class
    
    let animalOne = new Animal("dog", "black", false);
    
    console.log(animalOne);
    
    
    
    
    
    let animalTwo = new Animal("Lion", "gold", true);
    
    console.log(animalTwo);
    

    class Animal {

      // constructor method to initialize object properties
    
      constructor(name, color, isWi1d, sound) {
    
        this.name = name;
    
        this.color = color;
    
        this.isWi1d = isWi1d;
    
        this.sound = sound;
    
      }
    
      // you can add your methods here
    
      makeSound() {
    
        console.log(`${this.name} ${this.sound}`);
    
      }
    
    }





    class Animal {

      // constructor method to initialize object properties
      
      constructor (name, color, isWild, sound) {
      
      this.name = name;
      
      this.color = color;
      
      this.isWild = isWild;
      
      this.sound = sound;
      
      }
      
      // you can add your methods here
      
      makeSound(){
      
        console. log(`${this.name} ${this.sound}`)
      
      }
      
      aboutAnimal(){
      
        console.log(`the ${this.color} colored ${this.name} ${this.sound}`)
      
      }
      
      }
      
      const dog = new Animal("dog", "black", "true", "barks");
      
      const lion = new Animal("lion", "gold", "false", "roar");
      
      
      
      
      
      // dog
      
      dog.makeSound()
      
      dog.aboutAnimal();
      
      
      
      
      
      // lion
      
      lion.makeSound() ;
      
      lion.aboutAnimal();
      

      
      class Animal {

        // constructor method to initialize object properties
      
        constructor(name, color, isWild, sound) {
      
      this.name = name;    
      
      this.color = color;
      
            this.isWild = isWild;
      
            this.sound = sound;
      
        }
      
      
      
      
      
        // you can add your methods here
      
        makeSound() {
      
          console.log(`${this.name} ${this.sound}`);
      
        }
      
        aboutAnimal() {
      
          console.log(`the ${this.color} colored ${this.name} ${this.sound}`);
      
        }
      
      }
      
      const dog = new Animal("dog", "black", "true", "barks");
      
      const lion = new Animal("lion", "gold", "false", "roar");
      
      
      
      
      
      console.log(dog);
      
      console.log(lion);
      
      

      
      // THIS WOULD GIVE AN ERROR BECAUSE ITS DOESN'T FOLLOW THE ORDER! 
      
//We have this error because we are not returning the instance of the animal object (in this case, lion) inside the makeSound method. Without this access to that instance, we cannot perform another method on the object. Since the instance of the object is stored in this that is found in the constructor method, we need to return it (this) at the end of the method. What happens under the hood is that after the functionality stored inside the method is done, returning this grants us access to the instance of the particular object we created from the class.


//Having access to the instance allows us to chain method after method on our object. For our example, we will go on to add another method to our Animal class to get a better understanding of chaining methods on objects. First we have our updated animal class followed by an image of the instance created and the chaining of the methods
      
      class Animal {

      //   // constructor method to initialize object properties
      
      //   constructor(name, color, isWild, sound) {
      
      //       this.name = name;
      
      // this.color = color;
      
      //       this.isWild = isWild;
      
      //       this.sound = sound;
      
      //   }
      
      //   // you can add your methods here
      
      //   makeSound() {
      
      //     console.log(`${this.name} ${this.sound}`);
      
      //   }
      
      //   aboutAnimal() {
      
      //     console.log(`the ${this.color} colored ${this.name} ${this.sound}`);
      
      //   }
      
      // }
      
      // const dog = new Animal("dog", "black", "true", "barks");
      
      // const lion = new Animal("lion", "gold", "false", "roar");
      
      
      
      
      
      // lion.makeSound().aboutAnimal()
      
      



      class Animal {

        // constructor method to initialize object properties
      
        constructor(name, color, isWild, sound) {
      
          this.name = name;
      
          this.color = color;
      
          this.isWild = isWild;
      
          this.sound = sound;
      
        }
      
      
      
      
      
        // you can add your methods here
      
        makeSound() {
      
          console.log(`${this.name} ${this.sound}`);
      
          return this;
      
        }
      
      
      
      
      
        aboutAnimal() {
      
          console.log(`the ${this.color} colored ${this.name} ${this.sound}`);
      
          return this;
      
        }
      
      
      
      
      
        isDomestic() {
      
          if (this.isWi1d === "false") {
      
            console.log(`${this.name} is a domestic animal that ${this.sound}`);
      
            return this;
      
          } else {
      
            console.log(`${this.name} is a wild animal ${this.sound}`);
      
            return this;
      
          }
      
        }
      
      }
      
      
      

// our instances of the animal class

const dog = new Animal("dog", "black", "true", "barks");

const lion = new Animal("lion", "gold", "false", "roar");





// chaining our methods for the lion object

lion.makeSound().aboutAnimal().isDomestic()

console.log("\n");

// chaining our methods for the dog object

dog.makeSound().aboutAnimal().isDomestic();




// our instances of the animal class

const dog = new Animal("dog", "black", "true", "barks");

const lion = new Animal("lion", "gold", "false", "roar");

const goat = new Animal("goat", "black", "false", "bleats");

const mosquito = new Animal("mosquito", "black", "false", "buzz");





// an array of the animal objects created

const animal = [dog, lion, goat, mosquito];





// the subclass created from the Animal super class

class ListAllAnimals extends Animal {

  ListAllAnimalNameAndColors() {

    animals.map((animal) => {

      console.log(animal.name, animal.color);

    });

  }

}

// an instance of the ListAllAnimals class

const listAllAnimals = new ListAllAnimals();

// accessing the method created inside the ListAllAnimals class

listAllAnimals.ListAllAnimalNameAndColors();





// our instances of the animal class

const dog = new Animal("dog", "black", "true", "barks");

const lion = new Animal("lion", "gold", "false", "roar");

const goat = new Animal("goat", "black", "false", "bleats");

const mosquito = new Animal("mosquito", "black", "false", "buzz");





// an array of the animal objects created

const animal = [dog, lion, goat, mosquito];





// the subclass created from the Animal super class

class ListAllAnimals extends Animal {

  ListAllAnimalNameAndColors() {

    animals.map((animal) => {

      console.log(animal.name, animal.color);

    });

  }

}





// an instance of the ListAllAnimals class

const listAllAnimals = new ListAllAnimals();

// accessing the method created inside the ListAllAnimals class

listAllAnimals.ListAllAnimalNameAndColors();






Creating Subclasses with Constructors from the Superclass

Creating a subclass that possesses a constructor requires that the super keyword is used to access the properties from the parent class. In the example for this section, we will be extending the Animal class to create an AnimalClassification class. With this new class, we want to start with adding a function to classify an animal based on their order (carnivore, herbivore or insectivore). We will then extend our Animal class to take in an order property and then create the function to classify our animal objects in our extended class.


In the example below, we see that adding the order property while trying to access the name property caused an error.





class AnimalClassification extends Animal{

  // constructor method to initialize object properties

  constructor(order) {

    this.order = order;

  }

 

 classifyByOrder(animalName) {

  const animalClass = animals.find((animal) => animal.name === animalName)





  if(animalClass){

    console.log(`${animalClass.name} is a ${animalClass.order}`);

  } else{

    console.log(`${animalName} class not found`);

  }





  return this;

  }

}

const goat = new AnimalClassification("goat", "herbivore")

const dog = new AnimalClassification("dog", "herbivore")

const lion = new AnimalClassification("lion", "herbivore")

const mosquito = new AnimalClassification("mosquito", "herbivore")





// array of AnimalClassification objects

const animals = [dog, lion, goat, mosquito]





// create a classifier object from the AnimalClassification class

const classifier = new AnimalClassification()





// use the classifier object to get the order of the animal

classifier.classifyByOrder("mosquito")



To resolve this error, it must call super() in order to invoke the constructor of the superclass. This ensures the proper initialization of the properties of the superclass before properties are added for the subclass. We have the correction in the image below.





class AnimalClassification extends Animal{

  // constructor method to initialize object properties

  constructor(name, order) {

    super(name)

    this.order = order;

  }

 

 classifyByOrder(animalName) {

  const animalClass = animals.find((animal) => animal.name === animalName)





  if(animalClass){

    console.log(`${animalClass.name} is a ${animalClass.order}`);

  } else{

    console.log(`${animalName} class not found`);

  }

  return this;

  }

}

const goat = new AnimalClassification("goat", "herbivore")

const dog = new AnimalClassification("dog", "herbivore")

const lion = new AnimalClassification("lion", "herbivore")

const mosquito = new AnimalClassification("mosquito", "herbivore")





// array of AnimalClassification objects

const animals = [dog, lion, goat, mosquito]





// create a classifier object from the AnimalClassification class

const classifier = new AnimalClassification()





// use the classifier object to get the order of the animal

classifier.classifyByOrder("mosquito")


class AnimalClassification extends Animal{

  // constructor method to initialize object properties

  constructor(name, order) {

    super(name)

    this.order = order;

  }





  classifyByOrder(animalName) {

  const animalClass = animals.find((animal) => animal.name === animalName)





  if(animalClass){

    console.log(`${animalClass.name} is a ${animalClass.order}`);

  } else{

    console.log(`${animalName} class not found`);

  }





  return this;

  }

}

const goat = new AnimalClassification("goat", "herbivore")

const dog = new AnimalClassification("dog", "herbivore")

const lion = new AnimalClassification("lion", "herbivore")

const mosquito = new AnimalClassification("mosquito", "herbivore")





// array of AnimalClassification objects

const animals = [dog, lion, goat, mosquito]



// create a classifier object from the AnimalClassification class

const classifier = new AnimalClassification()





// use the classifier object to get the order of the animal

classifier.classifyByOrder("mosquito")

classifier.classifyByOrder("goat")

classifier.classifyByOrder("dog")

classifier.classifyByOrder("lion")



class Animal {

  // constructor method to initialize object properties

  constructor(name, color, isWild, sound) {

    this.name = name;

    this.color = color;

    this.isWild = isWild;

    this.sound = sound;

  }





  // you can add your methods here

  makeSound() {

    console.log(`${this.name} ${this.sound}`);

    return this;

  }





  aboutAnimal() {

    console.log(`the ${this.color} colored ${this.name} ${this.sound}`);

    return this;

  }





  isDomestic() {

    if (this.isWild === "false") {

      console.log(`${this.name} is a domestic animal that ${this.sound}`);

      return this;

    } else {

      console.log(`${this.name} is a wild animal that ${this.sound}`);

      return this;

    }

  }





  animalName() {

    console.log(`This is a/an ${this.name}`);

  }

}





class AnimalClassification extends Animal {

  // constructor method to initialize object properties

  constructor(name, order) {

    super(name);

    this.order = order;

  }





  classifyByOrder(animalName) {

    const animalClass = animals.find((animal) => animal.name === animalName);

    if (animalClass) {

      console.log(`${animalClass.name} is a/an ${animalClass.order}`);

    } else {

      console.log(`${animalName} class not found`);

    }

    return this;

  }





  animalIdentity() {

    super.animalName();

  }

}

const dog = new AnimalClassification("dog", "carnivore", "barks");

dog.animalIdentity();




function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}

const dog = new Animal("dog", "black", false, "barks");

console.log(dog);





function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}

const dog = new Animal("dog", "black", false, "barks");

console.log(dog);






It is important to note that nothing changes about the way we create a new instance of that class. We still make use of the new keyword.


Methods can also be created inside of the function that now represents our object class. Creating method here is a little different from how we have previously created it. To create a method:



It is started of with a this keyword

using a dot, we bind the name of the method we want to create to the this keyword

Finally, we assign a function (created with the function keyword) to the previous step using the assignment operator (=).





function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

  // adding a method

  this.aboutAnimal = function () {

    return `the ${this.color} colored ${this.name} ${this.sound}`;

  };

}

const dog = new Animal("dog", "black", false, "barks");

console.log(dog.aboutAnimal());



While adding methods like this works, it is usually much better to attach methods to objects like this using the prototype object property.




When looking at using the prototype method, we use the function keyword to create our object to serve as a constructor function which now represents our class object. To create the constructor function:



We type out the function keyword, then the name of the object with a capital letter

then we add parentheses [()]

The properties needed to construct the object are passed as parameters to the parentheses.

and finally, the curly braces [{}] where we will go ahead to add all the necessary properties.


We will see an example of this still using our Animal class.



function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

  // adding a method

  this.aboutAnimal = function () {

    return `the ${this.color} colored ${this.name} ${this.sound}`;

  };

}

const dog = new Animal("dog", "black", false, "barks");

console.log(dog);




function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

  // adding a method

  this.aboutAnimal = function () {

    return `the ${this.color} colored ${this.name} ${this.sound}`;

  };

}

const dog = new Animal("dog", "black", false, "barks");

console.log(dog.aboutAnimal());



While adding methods like this works, it is usually much better to attach methods to objects like this using the prototype object property.


function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

  // adding a method

  this.aboutAnimal = function () {

    return `the ${this.color} colored ${this.name} ${this.sound}`;

  };

}

const dog = new Animal("dog", "black", false, "barks");

console.log(dog);




From the image, we see that the method is now stored inside of the prototype object property is like a map for the object it is found in, it contains all the properties and methods associated with that object. New instances of an object class will inherit the property and method from a prototype. This will enable us to work with the concept of prototype inheritance.


function Animal(name, color, isWild, sound) {

    this.name = name;

    this.color = color;

    this.isWild = isWild;

    this.sound = sound;

}





Animal.prototype.aboutAnimal = function(){

	return `the ${this.color} colored ${this.name} ${this.sound}`;

}

const dog = new Animal("dog", "black", false, "barks");

console.log(dog);

console.log(dog.aboutAnimal());



Adding a Property Using Prototype

Previously, we had added methods using prototypes. We can also add properties too using the prototype object property.


To create it, like in the method, we need to type out the parent class and get the prototype using the dot notation: Animal.prototype then go ahead to add the properties that we'd like to add to our already created class and finally assign a variable to it. For our example, we will be adding a property called order.





From the result, it is apparent that the method and the property added this way is stored on the prototype object property. What we have done so far is to define the order property and aboutAnimal method on the prototype of the dog object. This is a great deal for methods since we no longer have to define it inside of the parent class after the constructor function. The prototype of the new instance is going to point to the Animal class prototype. In our case, the dog instance inherits the order property and the aboutAnimal method from the prototype of the parent class. We also access the property of an object from a prototype the same way it is done with the method.


function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}

// adding a METHOD using the prototype object method

Animal.prototype.aboutAnimal = function () {

  return `the ${this.color} colored ${this.name} ${this.sound}`;

};





// adding a PROPERTY using the prototype object method

Animal.prototype.order = "carnivore";





const dog = new Animal("dog", "black", false, "barks");





console.log(dog);





// accessing the property

console.log(dog.order);






It is important to note that we cannot add properties or methods to the new instances of our Animal class using the prototype object. This is because the instances of the class do not have a prototype property directly accessible like constructor functions keyword. Instead, the prototype property is associated with the class itself.





function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}

// adding a METHOD using the prototype object method

Animal.prototype.aboutAnimal = function () {

  return `the ${this.color} colored ${this.name} ${this.sound}`;

};





// adding a PROPERTY using the prototype object method

Animal.prototype.order = "carnivore";





// an instance of the class

const dog = new Animal("dog", "black", false, "bark");

dog.prototype.habitat = "country";




In some code, you will see prototypes added using proto as shown in the code snippet below


Animal.__proto__.order = "carnivore";

Inheriting the Properties from Parent Object

In this skill, we will be extending the Animal class that we created in the previous lesson. This will enable us to understand prototype inheritance. This extended class will have all the properties of the parent class. To do that, we create a function that will be called DogLocation, which will simply tell us the habitat of the dog. It is created just as the previous class with the function keyword and the name of the constructor in capital letters.


In order to inherit the properties from the parent object, we use a rest parameter(...) inside of the parentheses of the extended class. This will take in the different properties provided and put them in an array. This array can then be accessed inside of the body (which is the curly braces) of the extended class as shown below:





The rest parameter for our example is …props.


function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}





// adding a PROPERTY using the prototype object method

Animal.prototype.order = "carnivore";





// an instance of the class

const dog = new Animal("dog", "black", false, "bark");





function DogLocation(...props) {

  console.log(props);

}





const dogHabitat = new DogLocation("dog", "black", false, "bark");




Now that we are able to access the properties using the rest parameter, we can go ahead to call the parent function (Animal), which will take all the properties and will apply it to the child object (dogHabitat). To do so, the function name is added to the body of the child object and then use the method, ‘.apply’ on the parent function name. The apply method takes in 2 parameters, the content of the parent object using this keyword and the actual arguments (which will be an array, …props) we receive when creating a new instance of our child object. What this does is that it lets us select what properties that we would like to inherit instead of inheriting all of it. To see this action, we will just inherit just the name and the colour property and add the property that we will like for dogLocation to have using this keyword.





We can see now that the location property has been applied. A closer look at prototype object property, we see that the methods were not inherited.


function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}

// adding a PROPERTY using the prototype object method

Animal.prototype.order = "carnivore";





// an instance of the class

const dog = new Animal("dog", "black", false, "bark");





function DogLocation(...props) {

  Animal.apply(this, props);

  // adding a new property

  this.location = "city";

}

const dogHabitat = new DogLocation("dog", "brown");

console.log(dogHabitat);



Inheriting the Methods from Parent Object
The child object couldn’t effectively inherit the methods of the parent object because the methods were added using the prototype method. What this means is that the prototype created after the parent object, belongs only to that object. In this case, our extended or child object is going to have its own method. We really don’t want to break the DRY (Do not Repeat Yourself) principle by writing out all the methods from the parent object on the child object, we want to just inherit it from the parent object.

To achieve this, we use the Object.create method which is a way to create an object in JavaScript. This is possible because the prototype property in itself is an object. We want to create a new object for the dogLocation prototype which is based on the prototype of the parent object, Animal.



From our example, we can see that we have successfully inherited the method from our parent object.

function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}



// adding a PROPERTY using the prototype object method

Animal.prototype.order = "carnivore";





// an instance of the class

const dog = new Animal("dog", "black", false, "bark");





function DogLocation(...props) {

  Animal.apply(this, props);





  // adding a new property

  this.location = "city";

}





// inheriting the Animal prototype

DogLocation.prototype = Object.create(Animal.prototype);





const dogHabitat = new DogLocation("dog", "brown");





console.log(dogHabitat);



Adding Methods to Child Object

We can add additional methods to the child object. For this, we can add a method for dog owners.


We have been able to add a new method to our child object. When we check the parent object, we will notice that this new method created does not exist on the parent object.




function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}





// adding a PROPERTY using the prototype object method

Animal.prototype.order = "carnivore";





// an instance of the class

const dog = new Animal("dog", "black", false, "bark");





function DogLocation(...props) {

  Animal.apply(this, props);

  // adding a new property

  this.location = "city";

}





// inheriting the Animal prototype

DogLocation.prototype = Object.create(Animal.prototype);

// adding methods to the Child object

DogLocation.prototype.dogOwner = function () {

  console.log("Steve");

};

const dogHabitat = new DogLocation("dog", "brown");

console.log(dogHabitat);


Adding Methods to Child Object

We can add additional methods to the child object. For this, we can add a method for dog owners.


We have been able to add a new method to our child object. When we check the parent object, we will notice that this new method created does not exist on the parent object.




function Animal(name, color, isWild, sound) {

  this.name = name;

  this.color = color;

  this.isWild = isWild;

  this.sound = sound;

}





// adding a PROPERTY using the prototype object method

Animal.prototype.order = "carnivore";





// an instance of the class

const dog = new Animal("dog", "black", false, "bark");





function DogLocation(...props) {

  Animal.apply(this, props);

  // adding a new property

  this.location = "city";

}





// inheriting the Animal prototype

DogLocation.prototype = Object.create(Animal.prototype);

// adding methods to the Child object

DogLocation.prototype.dogOwner = function () {

  console.log("Steve");

};

const dogHabitat = new DogLocation("dog", "brown");

console.log(dogHabitat);





Introduction to Object-Oriented JavaScript:



JavaScript supports object-oriented programming paradigm.

Objects are instances of classes, and they encapsulate data and behavior.


Classes:



Classes in JavaScript provide a blueprint for creating objects with shared properties and methods.

Introduced in ECMAScript 2015 (ES6), classes offer syntactical sugar over JavaScript's existing prototype-based inheritance.


Class Methods:



Class methods are functions defined within a class that can be called on instances of that class.

They are defined using the methodName() {} syntax within the class definition.


Class Inheritance:



Class inheritance allows a class (subclass/child class) to inherit properties and methods from another class (superclass/parent class).

Subclasses can extend the functionality of their parent classes by adding new methods or overriding existing ones.

In JavaScript, inheritance is achieved using the extends keyword.


Prototype:



Every JavaScript object has a prototype.

Prototype is like a map for the object it is found in, containing methods and properties associated with that object.

It acts as a fallback mechanism for property access if the property does not exist directly on the object.


Prototype Inheritance:



Prototype inheritance refers to the process by which objects inherit properties and methods from their prototype.

In JavaScript, objects inherit properties and methods from their prototype chain, which includes the prototype of the object's constructor and its constructor's prototype, and so on.

This mechanism allows for code reusability and promotes the concept of "inheritance".





OOP (Object-Oriented Programming in JavaScript)

Checkpoint OOP

Unlocked
What You're Aiming For

For this checkpoint, you will be recreating the shopping cart created in the superskill, JavaScript and the DOM. This time, the code previously written will be rewritten using the Object Oriented JavaScript (OOJ) approach. 


Instructions

Create an object class for the product to store the properties for id, name and price of the product.
Create an object class for the shopping cart item to store the properties for product and its quantity.
To the preceding object class, add the method to calculate the total price of the item.
Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 
To the shopping cart object, add the following methods.
Add the methods to: 
Get the total of items inside the cart
Add items
Remove items
Display cart items
Go on to test the ability of our objects to:
Create products
Create a shopping cart
Add items to the cart
Display the cart
Remove an item from the cart




//SPECIAL CODE TO CHECK LATER!



// Product Class to store product properties
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem Class to represent an item in the cart, with a product and quantity
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price of the item based on quantity
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart Class to represent the shopping cart with an array of ShoppingCartItem instances
class ShoppingCart {
  constructor() {
    this.items = []; // Array to hold ShoppingCartItem instances
  }

  // Method to add an item to the cart
  addItem(product, quantity) {
    const existingItemIndex = this.items.findIndex(
      (item) => item.product.id === product.id
    );

    if (existingItemIndex !== -1) {
      // Update quantity if product already exists in the cart
      this.items[existingItemIndex].quantity += quantity;
    } else {
      // Otherwise, add a new ShoppingCartItem
      const cartItem = new ShoppingCartItem(product, quantity);
      this.items.push(cartItem);
    }
  }

  // Method to remove an item from the cart by product ID
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method to calculate the total cost of all items in the cart
  getTotalCost() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method to display all items in the cart
  displayCartItems() {
    if (this.items.length === 0) {
      console.log("The cart is empty.");
    } else {
      this.items.forEach((item, index) => {
        console.log(
          `${index + 1}. ${item.product.name} - Quantity: ${item.quantity}, Total: $${item.getTotalPrice()}`
        );
      });
      console.log(`Total Cost: $${this.getTotalCost()}`);
    }
  }
}

// --- Testing the Shopping Cart Functionality ---

// Create product instances
const product1 = new Product(1, 'Laptop', 1200);
const product2 = new Product(2, 'Headphones', 100);
const product3 = new Product(3, 'Keyboard', 50);

// Initialize a new shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // Adding 1 Laptop
cart.addItem(product2, 2); // Adding 2 Headphones
cart.addItem(product3, 3); // Adding 3 Keyboards

// Display the cart
console.log("Displaying Cart Items:");
cart.displayCartItems();

// Remove an item from the cart
console.log("Removing item with ID 2 (Headphones) from the cart:");
cart.removeItem(2);

// Display the cart again to confirm item removal
console.log("Cart after removing an item:");
cart.displayCartItems();

