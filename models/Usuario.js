const client = require('./../config/database.js');

const model = {};

model.findOne = (user, callback) => {
    client.connect().query('SELECT * FROM gaiaUsuarios WHERE user = "' + user +'"', callback);
}

model.create = (usuario, callback) => {
    console.log(usuario);
    let insert = " INSERT INTO gaiaUsuarios (user, nome, senha, email, admin) VALUES('"+ usuario.user +"','"+ usuario.nome +"', '"+ usuario.senha +"', '"+ usuario.email +"', "+ false +")";
    client.connect().query(insert, callback);
}

module.exports = model;