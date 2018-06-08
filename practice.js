function printPerson () {
  return {
    name: 'Jack Belly'
  };
}

console.log(printPerson);  //prints function name

console.log(printPerson.toString()); // prints function

console.log(console.log); // prints that it's bound to another function
//1st class citizen function

//**********************************************************//

var funcName = 'multiply';
console.log(funcName + " ", basicMath[funcName](10, 20));
//OR
var funcName = 'add';
console.log(funcName + " ", basicMath[funcName](10, 20));

//******************************************************//

//basic math functions
function add (a, b) {
  return a + b;
}

function multiple (a, b) {
  return a * b;
}

console.log('add', add(10, 20));
console.log(multiply, multiple(10, 20));

// ******************************************************* //

// modules allow us to import a function from an outside file to use
//within our current file.

var basicMath = {

  add: function add(a, b) {
    return a + b;
  },
  multiply: function multiply(a,b) {
    return a * b;
  },
  PI: {
    value: 22/7,
    type: 'fractional'
  }
}


module.exports = basicMath;  //basicMath is name of current file

var basicMath = require('./basicMath.js');  // this is what you write
//in the folder you are importing the file to.

console.log('add', basicMath['add'](10, 20));
console.log('multiply', basicMath['multiply'](10, 20));

///can also write functions like this:

var basicMath = {

};

basicMath.add = function add(a, b) {}

// ************************************************** //

new project: git init // git repo initialized
npm init // creates package.json file
touch git.ignore //
npm install //creates node modules

// **************************************************** //

//Mocha used for testing - packing need to install globally
//npm install --global
//install mocha inside vagrant (if not already installed)

//TO use mocha: need to import it
//need to install it locally so we can run commmand 'mocha' even if it's globally installed

var mocha = requires('mocha')
//assert - used to tell what you think will happen, it's a package






























































