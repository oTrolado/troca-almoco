const Troca = require('../models/Troca');

const controller = {};

controller.get = function(req, res) {

    const id = req.params.id;

    Troca.findOne(id, (erro, result) => {
        if (erro) {
            throw erro;
        } else {
            console.log("get "+result);
            res.json(result).end();
        }
    }); 
}

controller.getUser = function(req, res) {
    
    Troca.findUser(req.body.user, (erro, result) => {
        if(erro){
            throw erro;
        } else {
            console.log("getUser " + result);
            res.json(result).end();
        }
    });
}

controller.getAll = function(req, res) {
    Troca.list((erro, result) => {
        if(erro){
            throw erro;
        } else {
            console.log("get all "+ result["0"]);
            resposta = [];
            Object.keys(result).map(item => resposta.push(result[item]));

            console.log(resposta);
            res.json(resposta).end();
        }
    });
}
controller.post = function(req, res) {

    Troca.create({user: req.body.user,
                            cardapio: req.body.cardapio,
                            pratoPrincipal: req.body.pratoPrincipal}, (erro, result) => {
                                if(erro){
                                    throw erro;
                                } else {
                                    console.log("post "+ result);
                                        res.sendStatus(201).end();
                                }
                            });
       
    
}

controller.put = function(req, res) {
    let troca = req.body;
    Troca.update({user: req.body.user,
                  cardapio: req.body.cardapio,
                  pratoPrincipal: req.body.pratoPrincipal,
                  _id: req.body._id}, (erro, result) => {
        if(erro){
            throw erro;
            console.log(erro);
        } else {
            console.log("put "+result);
            res.sendStatus(201).end();
        }
    });
}

module.exports = controller;
