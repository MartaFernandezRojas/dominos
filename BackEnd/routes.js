var app = require('./app');
var pizzaController = require('./Controllers/projectController');

app.get('/pizzas', pizzaController.adminGet);
app.post('/pedido', pizzaController.userAdd);

module.exports=app;