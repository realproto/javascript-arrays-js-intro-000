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
    var myarray2 = [foo, ...myarray2];
    var myarrayNew = myarray2;
    myarrayNew;
}
destructivelyAddElementToBeginningOfArray(myarray2, 'foo');
function addElementToEndOfArray() {

  
}
addElementToEndOfArray();
function destructivelyAddElementToEndOfArray() {

}
destructivelyAddElementToEndOfArray;