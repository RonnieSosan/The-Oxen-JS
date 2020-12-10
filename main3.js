/*Q3:	
Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). 
The parameter "userDate" and the return value are strings.
For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
*/

//Function to Pad string
function pad(strValue) {  
    // always returns a string
    //Check the place value of the string and pad if its not in tens
        return (strValue < 10 ? '0' : '') + strValue;    
}

//fucntion to check valid date
function isValidDate(date){
    //check if its a date instance and not "not a number"
    return !isNaN(date);
}

//Function to format dat form to MM/DD/YYYY to API ready YYYYMMDD
function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    try{
                
        //if its not a valid date throw an exception
        if(!isValidDate(Date.parse(userDate))){
            throw 'Invalid Date Specified: ' + userDate;
        }
        
        date = new Date(userDate);


        //STEP 1: Set Month
        month = (date.getMonth() + 1).toString();
        
           
        //Step 1.1: Pad month to complete string of 2 characters e.g to change 1 to 01
        paddedMonth = pad(month, 2);

        //STEP 2: Set Day
        day = date.getDate().toString();

        //Step 2.1: Pad day to complete string of 2 characters e.g to change 1 to 01
        paddedDay = pad(day, 2);

        //STEP 3: Set Year
        year = date.getFullYear().toString();

        
        // Concatenate date to YYYYMMDD
        strDate = year + paddedMonth  + paddedDay;

        //return new date format
        return strDate;
    }
    catch(err){
        //catch exception thrown by date formatting and log  error
        console.log(err);
    }
}

// format M/D/YYYY 
console.log(formatDate("12/31/2014"));
