const router = require('express').Router()
const newuser = require('../controller/userController');

router.post('/', newuser);

module.exports = router