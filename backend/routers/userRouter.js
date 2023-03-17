const express = require('express');
//const User = require('../models/userModel');
const db = require('../config/mongoConfig');
const bcrypt = require('bcrypt');
const expressAsyncHandler = require('express-async-handler');
const { generateToken, isAuth } = require('../util');
 

const UserRouter = express.Router();

UserRouter.get('/createadmin', expressAsyncHandler(async(req, res) => {
    try {
        const user = new User({
            name: 'admin',
            email: 'softadmin@softcraze.com',
            password: 'kyalo2',
            isAdmin: true
        });
        const createdUser = await user.save();
        res.send(createdUser);
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
//post  register function
UserRouter.post('/register', expressAsyncHandler(async(req, res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, 12).then(hashedPassword => {
        db.getDb().collection('users')
        .insertOne({
            name: name,
            email: email,
            password: hashedPassword
        }).then(result=>{
            console.log(result);
            const token = generateToken();
            res.status(201).json({ token: token, user: {
                email: email,
            } });
        }).catch(err=>{
            console.log(err);
            res.status(500).json({message: 'Creating the user failed!!'});
        });
        
    }).catch(err=>{
        console.log(err);
        res.status(500).json({message: 'Creating the user failed!!'});
    });
    
}))
//UserRouter.post('/register', expressAsyncHandler(async(req, res) => {
//    const user = new User({
//        name: req.body.name,
//        email: req.body.email,
//        password: req.body.password,
//    });
//    const createdUser = await user.save();
//    if (!createdUser) {
//        res.status(401).send({
//            message: 'Invalid User Data',
//        });
//    } else {
//        res.send({
//            _id: createdUser._id,
//            name: createdUser.name,
//            email: createdUser.email,
//            isAdmin: createdUser.isAdmin,
//            token: generateToken(createdUser),
//        });
//    }
//}));
//update
UserRouter.put('/:id', isAuth, expressAsyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        res.status(404).send({
            message: 'No such User',
        });
    } else {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.password = req.body.password || user.password;
        const updatedUser = await user.save();
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser),
        });
    }
}));
module.exports = UserRouter;