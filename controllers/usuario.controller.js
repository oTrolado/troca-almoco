const md5 = require('md5');
const Usuario = require('../models/Usuario');
const emailService = require('../services/email.service');

const controller = {};

controller.logar = function(req, res) {

    const user = req.params.user;
    const senha = md5(req.body.senha + global.SALT_KEY);

    Usuario.findOne(user, (erro, result) => {
        if(erro){
            throw erro;
        } else {

            let resp = result[0]
            if(!resp.senha) return res.sendStatus(500).end();
            if (senha == resp.senha) {
                res.json(resp).end();
            } else {
                res.sendStatus(403).end();
            }
        }
    });
}

controller.post = function(req, res) {

    Usuario.create({
        nome: req.body.nome,
        user: req.body.user,
        email: req.body.email,
        senha: md5(req.body.senha + global.SALT_KEY)
    }, (erro, result) => {
        if(erro){
            throw erro;
        } else {
            res.sendStatus(201).end();
        }
    });
}

module.exports = controller;