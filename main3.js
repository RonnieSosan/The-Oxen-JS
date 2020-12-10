/*Q3:	
Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). 
The parameter "userDate" and the return value are strings.
For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
*/

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    try{
        date = new Date(userDate);

        //STEP 1: Set day
        month = (date.getMonth() + 1).toString();

        //STEP 2: Set Month
        day = date.getDate().toString();

        //STEP 3: Set Year
        year = date.getFullYear().toString()
        
        // Concatenate date 
        strDate = year + month + day

        return strDate;
    }
    catch(err){
        
        console.log("Invalid date format");
    }
}

console.log(formatDate("12/31/2014"));
