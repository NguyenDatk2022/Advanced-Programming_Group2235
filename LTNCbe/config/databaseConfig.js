const mysql = require('mysql2');

// Kết nối đến cơ sở dữ liệu
const myDatabase = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#Wb34hi25$',
    database: 'LTNC'
});

module.exports = myDatabase;