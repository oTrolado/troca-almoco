const client = require('./../config/database.js');

const model = {};

model.listAll = (callback) => {
    client.connect().query('SELECT * FROM gaiaCardapios', callback);
}

model.listOne = (_id, callback) => {
    client.connect().query('SELECT * FROM gaiaCardapios WHERE _id =' + _id, callback);
}

model.create = (cardapio, callback) => {
    let insert = " INSERT INTO gaiaCardapios (pratoPrincipal, opcao1, opcao2, guarnicao1, guarnicao2, salada, sobremesa, data) VALUES('"+ cardapio.pratoPrincipal +"','"+ cardapio.opcao1 +"', '"+ cardapio.opcao2 +"', '"+ cardapio.guarnicao1 +"', '"+ cardapio.guarnicao2 +"', '"+ cardapio.salada +"', '"+ cardapio.sobremesa +"', '"+ cardapio.data +"')";
    client.connect().query(insert, callback);
}

model.update = (cardapio, callback) => {
    let update = "UPDATE gaiaCardapios SET pratoPrincipal = '" + cardapio.pratoPrincipal +"', opcao1 = '" + cardapio.opcao1 + "', opcao2 = '" + cardapio.opcao2 + "', guarnicao1 = '" + cardapio.guarnicao1 + "', guarnicao2 = '" + cardapio.guarnicao2 +"', salada = '" + cardapio.salada + "', sobremesa = '" + cardapio.sobremesa + "', data = '" + cardapio.data + "' WHERE _id = '" + cardapio._id + "'";
    client.connect().query(update, callback);
}

model.delete = (_id, callback) => {
    client.connect().query('DELETE FROM gaiaCardapios WHERE _id = ' + _id, callback);
}

module.exports = model;