/*Q1: Implement the ensure function so that it throws an error if called without arguments or the argument is undefined. 
      Otherwise it should return the given value.
*/

//Ensure function to check param:value definition
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
    //Call ensure function
    definedValue = ensure("Value");

    //Log result value
    console.log(definedValue);
} 
catch(err) {
    //Catch exception thrown by ensure function and logg error message
    console.log(err);
    }

    