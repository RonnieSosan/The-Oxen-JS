/*Q2: Implement the removeProperty function which takes an object and property name, and does the following:
If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false
*/

//Function to confirm and remove property prop form object obj
function removeProperty(obj, prop) {
    // check if param:obj has a property 'prop' eith 'hasOwnProperty' Function
    if(obj.hasOwnProperty(prop)){

        // if so then delete prop form obj
        delete obj[prop]
        return true
    }

    // since there is no other execution return false anyway
    return false;
}


// Create a variable called hero
// initialize it with a property name with string value Batman
const objHero = {
    name: 'Batman'
  };

//Display heroes before
console.log(objHero)

// Call remove property function
boolIsPropertyRemoved = removeProperty(objHero, 'name')

//check return value
if(boolIsPropertyRemoved)
    console.log("Property removed")

else
    console.log("Property does not exist")


//Display Heroes after
console.log(objHero)

