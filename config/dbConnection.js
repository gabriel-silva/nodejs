var mysql = require('mysql');

module.exports = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    });
}