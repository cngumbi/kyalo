const express = require('express');
const cors = require('cors');
const database = require('./config/mongooseConfig');
const bodyParser = require('body-parser');
const config = require('./config/config');
const UserRouter = require('./routers/userRouter');
const PlayerRouter = require('./routers/playerRouter');


//-----------------------------------------------------
//create a connection with the database
//------------------------------------------------------
//mongoose.connect(config.MONGODB_URL, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//}).then(() => {
//    console.log('connected to mongodb.');
//}).catch((error) => {
//    console.log(error.reason);
//});

//----------------------------------------------------------------------------------
//instentiate the express 
//----------------------------------------------------------------------------------
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', UserRouter);
app.use('/api/players', PlayerRouter);


app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not found!' });
    }

});
//error handling
//code to handle all errors in express instance
app.use((err, req, res, next) => {
    const status = (err.name && err.name === 'ValidationError') ? 400 : 500;
    res.status(status).send({ message: err.message });
})

app.listen(config.PORT, () => {
    console.log(`server at http://localhost:${config.PORT}`);
});
//----------------------------------------------------------------------------------------