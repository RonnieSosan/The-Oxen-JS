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


//Function to format dat form to MM/DD/YYYY to API ready YYYYMMDD
function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    try{
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
        strDate = year + paddedMonth + paddedDay


        return strDate;
    }
    catch(err){
        
        //catch exception thrown by date formatting and log  error
        console.log(err);
    }
}

console.log(formatDate("2/1/14"));
