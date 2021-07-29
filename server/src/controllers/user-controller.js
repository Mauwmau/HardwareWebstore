"use strict";

const User = require('../models/user');

// Get all users
exports.getAll = async (request, response) => {
    const data = await User.find({})
    response.send(data);
};

// Get one user specified by id
exports.getOne = async (request, response) => {
    const data = await User.findById(request.params.id);
    response.send(data);
};

// Create a user
exports.create = async (request, response) => {
    try{
        await User.create(request.body);
        response.status(201).send('Usuario criado');
    } catch(err) {
        response.status(400).send(err);
    }
};

// Update a user specified by id, all the user info are required
exports.update = async (request, response) => {
    try{
        await User.findOneAndReplace(request.params.id, request.body);
        response.send('Informaçõe do usuario foram alteradas');
    } catch(err) {
        response.status(400).send(err);
    }
};

// Delete a user specified by id
exports.delete = async (request, response) => {
    try{
        await User.findByIdAndDelete(request.params.id);
        response.send('Usuario deletado deletado');
    } catch(err) {
        response.status(400).send(err);
    }
};
