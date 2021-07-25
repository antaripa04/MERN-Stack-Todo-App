const User = require("../models/user.model");

module.exports = {
    saveEmail: async (req, res) => {
        try {
            await User.deleteMany({}); // collection cleanup
            let newEmail = new User(req.body);
            newEmail = await newEmail.save();
            res.status(201).json(newEmail);
        } catch (error) {
            next(error);
        }
    },
    getEmail: async (req, res) => {
        try {
            const userEmail = await User.find({});
            res.status(200).send(userEmail[0]);
//             console.log(userEmail);
        } catch (error) {
            next(error);
        }
    },
};
