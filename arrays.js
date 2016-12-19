var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars;
var foo; var myarray = ["entry0", "entry1"];
function addElementToBeginningOfArray(myarray, foo) { 
    var myarray = [`foo`, ...myarray];
    myarray;
    }
addElementToBeginningOfArray(myarray, 1); 
function destructivelyAddElementToBeginningOfArray(myarray, foo) {  
    var myarray = [`foo`, ...myarray];
    myarray;
    }
destructivelyAddElementToBeginningOfArray(myarray, 1);
function destructivelyAddElementToEndOfArray(myarray, foo) {
  myarray = [...myarray, `foo`];
  myarray;
  }
destructivelyAddElementToEndOfArray(myarray, 1);
function addElementToEndOfArray(myarray, foo) {
  var myarray = [...myarray, `foo`];
  var mynewarray = myarray;
  mynewarray;
}
addElementToEndOfArray(myarray, 1);