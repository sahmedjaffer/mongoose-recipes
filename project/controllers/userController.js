const User = require('../models/User.js');
//const { registerUser } = require('./authController');

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find().populate('recipes');

        const usersData = {
            first: user.first,
            last: user.last,
            picture: user.picture,
            recipe: user.recipes
        };

        res.render('./users/profile.ejs', { usersData });
    } catch (error) {
        console.error('an error has occurred finding users!', error.message)
    }
    
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).populate('recipes');

        const data = {
            first: user.first,
            last: user.last,
            picture: user.picture,
            recipe: user.recipes
        };

        res.render('./users/profile.ejs', { user });


    } catch (error) {
        console.error('an error has occurred finding user!', error.message)

    }

}



module.exports = {
    getUserById,
    getAllUsers
}