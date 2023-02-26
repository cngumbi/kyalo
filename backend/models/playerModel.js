const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: {
        type: String, required: true, minlength: 3, maxlength: 255
    },
    age: { type: Number, required: true, min: 4, max: 50 },
    image: {type: String, required: true},
    DOB: { type: String, required: true },
    positionPlayed: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: Number, required: true },
    gender: { type: String, required: true },
},
{timestamps: true});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;