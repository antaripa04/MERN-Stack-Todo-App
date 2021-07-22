const { Router } = require('express');
const router = Router();
const User = require('../models/user.model');

router.use('/todos', require('./todo'));

// This routes contains information about to whom the email need to be sent
router.post('/save-email', async (req, res) => {
    await User.deleteMany({}); // collection cleanup
    let newEmail = new User(req.body);
    newEmail = await newEmail.save();
    res.status(201).json(newEmail);
});

module.exports = router;
