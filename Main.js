/*Q1: Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. 
      Otherwise it should return the given value.
*/

function ensure(value) {

    //checks if param:value is null and undefined simultaneously
    if(value == null){
        
        // Throws an error for the undefined value
        throw "value not defined";
    }
    
    // The rest of the code should run otherise so no need for an else statement
    return value;
}

try {

    definedValue = ensure("Value");
    console.log(definedValue);
} 
catch(err) {
    console.log(err);
    }

    