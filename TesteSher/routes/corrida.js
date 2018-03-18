'use strict';
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/testeSher");
var db = mongoose.connection;
var SchemaEntidade = mongoose.Schema({
    motorista:
    {
        id: String,
        nome: String,
        dataNascimento: String,
        cpf: String,
        modeloCarro: String,
        status: String,
        sexo: String
    },
    passageiro:
    {
        id: String,
        nome: String,
        dataNascimento: String,
        cpf: String,
        sexo: String
    },
    valor: Number
});
var EntidadeModel = mongoose.model('corrida', SchemaEntidade);

router.get('/', function (req, res) {
    res.render('corrida', { title: 'Corrida' });
});

router.get('/listar', function (request, response) {
    EntidadeModel.find().exec(function (err, res) {
        if (err) {
            response.send(500, { error: err });
        } else {
            response.send(res);
        }
    });
});

router.post('/', function (req, res) {
    EntidadeModel.create(req.body.corrida, function (addError, corridaAdicionado) {
        if (addError) {
            res.send(500, { error: addError });
        } else {
            res.send({ success: true, entidade: corridaAdicionado });
        }
    });
});

module.exports = router;
