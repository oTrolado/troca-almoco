const express = require('express');
const router = express.Router();
const controller = require('../controllers/troca.controller');

router.get('/:id', controller.get);
router.get('/', controller.getAll);
router.post('/user', controller.getUser);
router.post('/', controller.post);
router.put('/', controller.put);


module.exports = router;