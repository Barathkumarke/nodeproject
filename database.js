console.log("hi")

const { createPool } = require('mysql')

const pool = createPool({
    host: 'localhost',     // host for connection
    port: 3306,            // default port for mysql is 3306
    database: 'test',      // database from which we want to connect our node application
    user: 'root',          // username of the mysql connection
    password: 'pass'       // password of the mysql connection
})

pool.query(`select * from btable`, function(err, result, fields) {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})