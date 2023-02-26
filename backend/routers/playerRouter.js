const express = require('express');
const Player = require('../models/playerModel');
const expressAsyncHandler = require('express-async-handler');

const PlayerRouter = express.Router();

PlayerRouter.post('/addplayer', expressAsyncHandler(async(req, res) => {
    const player = new Player({
        name: req.body.name.name,
        positionPlayed: req.body.positionPlayed,
        age: req.body.age,
        DOB: req.body.DOB,
        height: req.body.height,
        weight: req.body.weight,
        gender: req.body.gender

    });
    const createdPlayer = await player.save();
    if (!createdPlayer) {
        res.status(401).send({
            message: 'INvalid Player Data'
        });
    } else {
        res.send({
            _id: createdPlayer._id,
            name: createdPlayer.name,
            positionPlayed: createdPlayer.positionPlayed,
            age: createdPlayer.age,
            DOB: createdPlayer.DOB,
            height: createdPlayer.height,
            weight: createdPlayer.weight,
            gender: createdPlayer.gender
        });
    }
}));

module.exports = PlayerRouter;