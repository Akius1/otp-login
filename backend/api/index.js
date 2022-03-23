


const express = require('express');
const user = require('./controller')

const router = express.Router();

router.post('/access', user.login);
router.post('/user/verify', user.verify);

module.exports =  router;