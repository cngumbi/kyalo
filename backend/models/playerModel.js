import mongoose from "mongoose";
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: {
        sirName: { type: String, required: true, minlength: 3, maxlength: 55 },
        firstName: { type: String, required: true, minlength: 3, maxlength: 55 },
        lastName: { type: String, required: true, minlength: 3, maxlength: 55 }

    },
    age: { type: Number, required: true, min: 4, max: 50 },
    DOB: {
        date: { type: Number, required: true },
        month: { type: String, required: true },
        year: { type: Number, required: true }
    },
    positionPlayed: { type: String, required: true },
    height: { type: String, required: true },
    weight: { type: String, required: true },
    gender: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Player = mongoose.model('Player', playerSchema);
export default Player;