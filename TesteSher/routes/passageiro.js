'use strict';
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/testeSher");
var db = mongoose.connection;
var SchemaEntidade = mongoose.Schema({
    nome: String,
    dataNascimento: String,
    cpf: String,
    sexo: String
});
var EntidadeModel = mongoose.model('passageiro', SchemaEntidade);

router.get('/', function (req, res) {
    res.render('passageiro', { title: 'Passageiro' });
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
    EntidadeModel.create(req.body.passageiro, function (addError, passageiroAdicionado) {
        if (addError) {
            res.send(500, { error: addError });
        } else {
            res.send({ success: true, entidade: passageiroAdicionado });
        }
    });
});

module.exports = router;
