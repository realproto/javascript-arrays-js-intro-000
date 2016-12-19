var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
chocolateBars;
var foo; var myarray1 = ["entry0", "entry1"];
function addElementToBeginningOfArray(myarray1, foo) { 
    var myarray1 = [`foo`, ...myarray1];
    var mynewarray = myarray1;
    return mynewarray;
}
addElementToBeginningOfArray(myarray1, "foo"); 
var foo; var myarray2 = ["entry0", "entry1"];
function destructivelyAddElementToBeginningOfArray(myarray2, foo) { 
    var myarray2[0] = [foo];
    var myarrayNew = myarray2;
    myarrayNew;
}
destructivelyAddElementToBeginningOfArray(myarray2, 'foo');
var foo; var myarray3 = ["entry0", "entry1"];
function destructivelyAddElementToEndOfArray(myarray3, foo) {
  var myarray3 = [myarray3..., `foo`];
  var mynewarray = myarray3;
  return mynewarray;

}
destructivelyAddElementToEndOfArray(myarray3, 'foo');
var foo; var myarray4 = ["entry0", "entry1"];
function addElementToEndOfArray(myarray4, foo) {
  var myarray4 = [myarray4..., `foo`];
  var mynewarray = myarray4;
  return mynewarray;
}
addElementToEndOfArray(myarray4, 'foo');
