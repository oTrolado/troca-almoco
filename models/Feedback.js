const client = require('./../config/database.js');

const model = {};

model.findAll = (callback) => {
    client.connect().query('SELECT * FROM gaiaFeedbacks', callback);
}

model.create = (feedback, callback) => {
    client.connect().query("INSERT INTO gaiaFeedbacks (user, tipo, mensagem) VALUES ('"+feedback.user+"', '"+feedback.tipo+"', '"+feedback.mensagem+"')", callback);
}

module.exports = model;

/*
const mongoose = require('mongoose');

module.exports = function() {
    const schema = mongoose.Schema({
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Usuario',
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        mensagem: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Feedback', schema, 'feedbacks');

}*/