"use strict";

const Order = require('../models/order');
const guid = require('guid');

// Get orders
exports.get = async (request, response) => {
    const data = await Order.find({}, 'number status user items')
        .populate('user', 'name')
        .populate('items.product', 'title');
    response.send(data);
};

// Get orders
exports.getByUser = async (request, response) => {
    const data = await Order.find({user: request.params.userId})
    response.send(data);
};

// Create orders
exports.create = async (request, response) => {
    try {
        await Order.create(
            {
                user: request.body.user,
                number: guid.raw().substring(0,6),
                items: request.body.items
            }
        );
        response.status(201).send('Produto criado');
    } catch (error) {
        response.status(400).send(error);
    }
};

// Delete orders
exports.delete = async (request, response) => {
    try {
        Order.findByIdAndDelete(request.params.id)
        response.status(200).send("Order Deleted");
    } catch (error) {
        response.status(400).send(error);
    }
};