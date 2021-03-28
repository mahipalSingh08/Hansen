const express = require('express');
const router = express.Router();
const userModel = require('../controllers/user');
const errorModel = require('../controllers/error');

const extractFile = require("./../middleware/file");

router.post('/user', extractFile, userModel.addUser);
router.get('/user/:id', userModel.getUserById);
router.get('/user', userModel.getUsers);
router.put('/user', extractFile, userModel.updateUser);
router.delete('/user', userModel.deleteUser);
router.use('**', errorModel.error);

module.exports = router;


