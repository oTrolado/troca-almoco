const Cardapio = require('../models/Cardapio');

const controller = {};

controller.get = function(req, res) {

    const id = req.params.id;

    Cardapio.listOne(id, (erro, result) => {
        if(erro){
            res.sendStatus(400).end();
            console.log(erro);
            //throw erro;
        } else {
            res.json(result).end();
        }
    })
}

controller.getAll = function(req, res) {
    Cardapio.listAll((erro, resultCardapios)=>{
        if(erro){
            throw erro;
        } else{
            res.json(resultCardapios).end();
        }
    });
}

controller.post = function(req, res) {

    const cardapio = req.body;
    console.log(cardapio);
    Cardapio.create(cardapio, (erro, result) => {
        if(erro){
            res.sendStatus(400).end();
            throw erro;
        } else {
            res.sendStatus(201).end();
        }
    });
}

controller.put = function(req, res) {

    const cardapio = req.body;
    console.log(cardapio);
    Cardapio.update(cardapio, (erro, result) => {
        if(erro){
            res.sendStatus(400).end();
            throw erro;
        } else {
            res.sendStatus(200).end();
        }
    });
    
}

controller.delete = function(req, res) {

    const _id = req.params.id;
    Cardapio.delete(_id, (erro, result) =>{
        if(erro){
            console.log(erro);
            res.sendStatus(400).end();
            throw erro;
        } else {
            res.sendStatus(200).end();
        }
    })
    
}

module.exports = controller;