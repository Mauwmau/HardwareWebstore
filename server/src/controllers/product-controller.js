"use strict";

const Product = require('../models/product');

// Get all products
exports.getAll = async (request, response) => {
    const data = await Product.find({})
    response.send(data);
};

// Get one product specified by id
exports.getOne = async (request, response) => {
    const data = await Product.findById(request.params.id);
    response.send(data);
};

// Create a product
exports.create = async (request, response) => {
    try{
        await Product.create(request.body);
        response.status(201).send('Produto criado');
    } catch(err) {
        response.status(500).send(err);
    }
};

// Update a product specified by id, all the product info are required
exports.update = async (request, response) => {
    try{
        await Product.findOneAndReplace(request.params.id, request.body);
        response.send('Produto alterado');
    } catch(err) {
        response.status(500).send(err);
    }
};

// Delete a product specified by id
exports.delete = async (request, response) => {
    try{
        await Product.findByIdAndDelete(request.params.id);
        response.send('Produto deletado');
    } catch(err) {
        response.status(500).send(err);
    }
};
