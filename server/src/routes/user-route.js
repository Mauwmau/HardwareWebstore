const express = require('express');
const router = express.Router();
const controller = require('../controllers/user-controller');

// READ ALL
router.get('/', controller.getAll);

// READ ONE
router.get('/:id', controller.getOne);

// CREATE
router.post('/', controller.create);

// UPDATE
router.put('/:id', controller.update);

// DELETE
router.delete('/:id', controller.delete);

module.exports = router;