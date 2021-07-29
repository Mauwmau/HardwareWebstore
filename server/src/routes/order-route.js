const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');

// READ ALL
router.get('/', controller.get);

// READ ALL RELATED TO USER
router.get('/:userId', controller.getByUser);

// CREATE
router.post('/', controller.create);

// DELETE
router.delete('/:id', controller.delete);

module.exports = router;