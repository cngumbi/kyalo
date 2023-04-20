const express = require('express');
const multer = require('multer');
const { isAuth } = require('../util');

const storage = multer.diskStorage({
    destination(req, file, cd){
        cd(null, 'uploads/');
    },
    filename(req, file, cd){
        cd(null, `${Date.now()}.jpg`);
    }
});

const upload = multer({ storage });
const UploadRouter = express.Router();

uploadRouter.post('/', isAuth, upload.single('image'), (req, res)=>{
    res.status(201).send({ image: `/${req.file.path }` });
});

module.exports = UploadRouter;