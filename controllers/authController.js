const userModel = require('../models/userModel');

const signup = (req, res) => {
    res.json(
        {
            status: 'inprogress',
        })
}

module.exports = {
    signup
}