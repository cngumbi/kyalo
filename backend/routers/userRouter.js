import express from 'express';
import User from '../models/userModel';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../util';

const UserRouter = express.Router();

UserRouter.get('/createadmin', expressAsyncHandler(async(req, res) => {
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
}));
UserRouter.post('/signin', expressAsyncHandler(async(req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (!signinUser) {
        res.status(401).send({
            message: 'Invalid Email or Password',
        });
    } else {
        res.send({
            _id: signinUser._id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: generateToken(signinUser),
        });
    }
}));
export default UserRouter;