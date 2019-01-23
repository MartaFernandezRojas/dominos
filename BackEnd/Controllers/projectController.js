var con = require('../config');

var controller = {
    adminGet: function (req, res) {
        let sql = 'SELECT * from Pizzas';
        con.query(sql, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);

            }
        });
    }, 

    userAdd: function (req, res) {
        let sql = `INSERT INTO Pedidos (name,imagen,info,precio,arrayIngrediente) VALUES ('${req.body.name}','${req.body.imagen}','${req.body.info}','${req.body.precio}','${req.body.arrayIngrediente}')`;
        con.query(sql, function (err, result) {
            if (err) {
                return res.send(err);
            }
            else {
                let Pedidos = {
                    id: result.insertId,
                    name:req.body.name,
                    imagen: req.body.imagen,
                    info: req.body.info,
                    precio: req.body.precio,
                    arrayIngrediente: req.body.arrayIngrediente
                }
                return res.send(Pedidos);
            }
        });
    }
};

module.exports = controller;