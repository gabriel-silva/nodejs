var dbConnection = require('../../../config/dbConnection');

module.exports = function (app) {
    app.get('/noticias', function (req, res) {

        var connection = dbConnection();
        connection.connect();

        connection.query("select * from noticias;", function (error, result) {
            if(error){
                console.error("error connecting: "+error.stack);
            }
            res.render('noticias/noticias', {noticias: result});
        });

        connection.end();
    });
}