module.exports = function (app) {
    app.get('/noticias', function (req, res) {

        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'portal_noticias',
            socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
        });
        connection.connect();

        connection.query("select * from noticias;", function (error, result) {
            if(error){
                console.error("error connecting: "+error.stack);
            }
            res.send(result);
        });

        connection.end();
        //res.render('noticias/noticias');
    });
}