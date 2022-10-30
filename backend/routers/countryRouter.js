import express from "express";
import Country from "../models/countryModel";
import expressAsyncHandler from "express-async-handler";

const CountryRouter = express.Router();

CountryRouter.get('/country', expressAsyncHandler(async(req, res) => {
    try {
        const countries = await Country.find();
        res.send(countries);
    } catch (err) {
        res.status(500).send({ message: err.message })

    }
}));
CountryRouter.post('/', expressAsyncHandler(async(req, res) => {
    try {
        const country = new Country({
            name: req.body.countryName,
            abbreviation: req.body.countryAbbr,
        });
        const createdCountry = await Country.save();
        res.status(201).send({ message: 'New Counrty Created', country: createdCountry });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}));
/*CountryRouter.get('/:id', async(req, res) => {
    const country = await Country.findById(req.params.id);
    try {
        if (!country) {
            res.status(404).send({
                message: 'No Such Country in the Database',
            });
        } else {
            country.name = req.body.countryName;
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});*/
export default CountryRouter;