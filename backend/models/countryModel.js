import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
    countryName: { type: String, required: true },
    countryAbbr: { type: String, required: true },
    date: {
        type: Date,
        default: Date.now
    }
});
const Country = mongoose.model('Country', CountrySchema);
export default Country;