const mysql = require("mysql");

//Allows connection to the sql database deployed through Heroku. 


/** Section below expose secrets, indicating private information regarding database for CHALLENGE PURPOSES ONLY. In real world application */
/** Database information would not be leaked and would go through numerous security protocols to establish proper information hiding.  **/
var mysqlConnection = mysql.createConnection({
    host: "us-cdbr-east-05.cleardb.net",
    user : "b4f9cbdbdd2e28" ,
    password: "696167d8",
    database: "heroku_ed3215afa8ad2ca",
    multipleStatements: true
});


mysqlConnection.connect((err) => {
    if(!err)
    {
        console.log("Connected");
    }
    else 
    {
        console.log(err);
        console.log("Connection Failed");
    }



})

module.exports = mysqlConnection;