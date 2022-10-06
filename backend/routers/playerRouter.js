import express from 'express';
import Player from '../models/playerModel';
import expressAsyncHandler from 'express-async-handler';

const PlayerRouter = express.Router();

PlayerRouter.post('/addplayer', expressAsyncHandler(async(req, res) => {
    const player = new Player({
        sirName: req.body.name.sirName,
        fistName: req.body.name.fistName,
        lastName: req.body.name.lastName,
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
            sirName: createdPlayer.sirName,
            firstName: createdPlayer.firstName,
            lastName: createdPlayer.lastName,
            positionPlayed: createdPlayer.positionPlayed,
            age: createdPlayer.age,
            DOB: createdPlayer.DOB,
            height: createdPlayer.height,
            weight: createdPlayer.weight,
            gender: createdPlayer.gender
        });
    }
}));

export default PlayerRouter;