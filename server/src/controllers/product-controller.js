"use strict";

const Product = require('../models/product');

exports.getAll = async (request, response) => {
    const data = await Product.find({})
    response.send(data);
};

exports.getOne = async (request, response) => {
    const data = await Product.findById(request.params.id);
    response.send(data);
};

exports.create = async (request, response) => {
    try{
        await Product.create(request.body);
        response.status(201).send('Produto criado');
    } catch(err) {
        response.status(500).send(err);
    }
};

exports.update = async (request, response) => {
    try{
        await Product.findOneAndReplace(request.params.id, request.body);
        response.send('Produto alterado');
    } catch(err) {
        response.status(500).send(err);
    }
};

exports.delete = async (request, response) => {
    try{
        await Product.findByIdAndDelete(request.params.id);
        response.send('Produto deletado');
    } catch(err) {
        response.status(500).send(err);
    }
};
