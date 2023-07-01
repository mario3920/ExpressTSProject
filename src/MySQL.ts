const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_db'
})

connection.connect()

// connection.end()

export default connection