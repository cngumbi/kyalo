import mongoose from "mongoose";
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: {
        sirName: { type: String, required: true, minlength: 3, maxlength: 55 },
        firstName: { type: String, required: true, minlength: 3, maxlength: 55 },
        lastName: { type: String, required: true, minlength: 3, maxlength: 55 }

    },
    age: { type: Number, required: true, min: 4, max: 50 },
    DOB: { type: String, required: true },
    positionPlayed: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true },
    gender: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Player = mongoose.model('Player', playerSchema);
export default Player;