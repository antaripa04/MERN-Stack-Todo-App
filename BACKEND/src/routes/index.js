const { Router } = require('express');
const router = Router();
const User = require('../models/user.model');

router.use('/todos', require('./todo'));

router.use('/', require('./email'));

module.exports = router;
