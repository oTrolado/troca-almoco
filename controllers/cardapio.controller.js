const Cardapio = require('../models/Cardapio') ();

const controller = {};

controller.get = function(req, res) {

    const id = req.params.id;

    Cardapio.findById(id).exec().then(

        function(cardapio) {
            if(cardapio) {
                res.json(cardapio).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.post = function(req, res) {

    Cardapio.create(req.body).then(

        function() {
            res.sendStatus(201).end();
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.put = function(req, res) {

    const id = req.body._id;

    Cardapio.findOneAndUpdate({_id: id}, req.body).exec().then(

        function(cardapio) {
            if(cardapio){
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

controller.delete = function(req, res) {

    const id = req.params.id;

    Cardapio.findOneAndDelete({_id: id}).exec().then(
        function(cardapio) {
            if(cardapio) {
                res.sendStatus(204).end();
            } else {
                res.sendStatus(404).end();
            }
        },

        function(e) {
            console.error(e);
            res.sendStatus(500).end();
        }
    );
}

module.exports = controller;