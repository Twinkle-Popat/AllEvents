import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        return next(err);
    }

    if (!users) {
        return res.status(404).json({ message: 'Could not find users' });
    }

    return res.json(users);
}