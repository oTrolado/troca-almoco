const Feedback = require('../models/Feedback');

const controller = {};

controller.get = function(req, res) {

    const id = req.params.id;

    res.sendStatus(404).end();
}

controller.getAll = function(req, res) {

    Feedback.findAll((erro,result) => {
        if(erro){
            throw erro;
            res.sendStatus(500).end();
        } else {
            res.json(result).end();
        }
    });
}

controller.post = function(req, res) {

    Feedback.create(req.body, (erro, result) => {
        if(erro){
            throw erro;
        } else {
            res.sendStatus(201).end();
        }
    });
}

controller.put = function(req, res) {

    res.sendStatus(404).end()
}

controller.delete = function(req, res) {

    const id = req.params.id;

    Feedback.delete();
}

module.exports = controller;