const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

//router.post('/sign-up', authController.registerUser)
router.get('/:id',userController.getUserById);
router.get('/',userController.getAllUsers);
module.exports = router;