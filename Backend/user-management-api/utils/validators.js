const { body } = require('express-validator');
exports.validateUserCreation = [ body('name').notEmpty(), body('email').isEmail() ];
exports.validateUserUpdate = [ body('email').optional().isEmail() ];