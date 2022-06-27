import express from 'express';
import User from '../models/userModel';

const UserRouter = express.Router();

UserRouter.get('/createadmin', async(req, res) => {
    try {
        const user = new User({
            name: 'admin',
            email: 'sofadmin@softcraze.com',
            password: 'kyalo',
            isAdmin: true
        });
        const createUser = await user.save();
        res.send(createUser);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});
export default UserRouter;