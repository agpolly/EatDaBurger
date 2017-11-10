var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection("mysql://lw6c3q9za92y0y31:f6f2g0owx7ksv220@yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hi83mi64ajg4h8sk");
} else {
    connection = mysql.createConnection({
    host:'localhost',
    user:'lw6c3q9za92y0y31',
    password:'f6f2g0owx7ksv220',
    database:'burgers_db'
});
};

connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadId);
});

module.exports = connection;