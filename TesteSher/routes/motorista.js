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
    modeloCarro: String,
    status: Boolean,
    sexo: String
});
var EntidadeModel = mongoose.model('motorista', SchemaEntidade);

router.get('/', function (req, res) {
    res.render('motorista', { title: 'Motorista' });
});

router.get('/listar', function (request, response) {
    var status = {};
    if (request.query.status) {
        status = { "status": request.query.status };
    }
    EntidadeModel.find(status).exec(function (err, res) {
        if (err) {
            response.send(500, { error: err });
        } else {
            response.send(res);
        }
    });
});

router.post('/', function (req, res) {
    EntidadeModel.create(req.body.motorista, function (addError, motoristaAdicionado) {
        if (addError) {
            res.send(500, { error: addError });
        } else {
            res.send({ success: true, entidade: motoristaAdicionado });
        }
    });
});

router.post('/alterar', function (req, res) {
    EntidadeModel.findByIdAndUpdate(req.body._id, req.body, function (addError, motoristaEditado) {
        if (addError) {
            res.send(500, { error: addError });
        } else {
            res.send({ success: true, entidade: motoristaEditado });
        }
    });
});

module.exports = router;
