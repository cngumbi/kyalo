const express = require('express');
const multer = require('multer');
const { isAuth, isAdmin } = require('../util');

const storage = multer.diskStorage({
    destination(req, file, cd){
        cd(null, 'uploads/');
    },
    filename(req, file, cd){
        cd(null, `${Date.now()}.jpg`);
    }
});

const upload = multer({ storage });
const uploadRouter = express.Router();

uploadRouter.post('/', isAuth, isAdmin, upload.single('image'), (req, res)=>{
    res.status(201).send({ image: `/${req.file.path }` });
});

module.exports = uploadRouter;