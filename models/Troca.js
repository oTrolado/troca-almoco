const client = require('./../config/database.js');

const model = {};

model.list = (callback) => {
    client.connect().query('SELECT u.nome, u._id, c._id, c.data, t.pratoPrincipal FROM gaiaTrocas AS t INNER JOIN gaiaUsuarios AS u ON t.user = u._id INNER JOIN gaiaCardapios AS c ON t.cardapio = c._id', callback);
}

model.findOne = (_id, callback) => {
    client.connect().query('SELECT u.nome, u._id, c._id, c.data, t.pratoPrincipal FROM gaiaTrocas AS t INNER JOIN gaiaUsuarios AS u ON t.user = u._id INNER JOIN gaiaCardapios AS c ON t.cardapio = c._id WHERE t._id ='+ _id, callback);
}

model.findUser = (user, callback) => {
    console.log('model '+user);
    client.connect().query('SELECT u.nome, u._id, c._id, c.data, t.pratoPrincipal FROM gaiaTrocas AS t INNER JOIN gaiaUsuarios AS u ON t.user = u._id INNER JOIN gaiaCardapios AS c ON t.cardapio = c._id WHERE u._id ='+ user, callback);
}

model.create = (troca, callback) => {
    console.log(troca);
    let insert = " INSERT INTO gaiaTrocas (user, cardapio, pratoPrincipal) VALUES('"+ troca.user +"','"+ troca.cardapio +"', '"+ troca.pratoPrincipal +"')";
    client.connect().query(insert, callback);
}

model.update = (troca, callback) => {
    let update = "UPDATE gaiaTrocas SET user = '" + troca.user +"', cardapio = '" + troca.cardapio + "', pratoPrincipal = '" + troca.pratoPrincipal + "' WHERE _id = '" + troca._id + "'";
    client.connect().query(update, callback);
}

module.exports = model;
