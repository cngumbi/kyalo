import express from 'express';
import cors from 'cors';
import data from './data';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import UserRouter from './routers/userRouter';
import OrderRouter from './routers/orderRouter';
import PlayerRouter from './routers/playerRouter';


//-----------------------------------------------------
//create a connection with the database
//-----------------------------------------------------
//main().catch(err => console.log(err));
//async function main() {
//    await mongoose.connect('database url');
//}
//------------------------------------------------------
mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true
}).then(() => {
    console.log('connected to mongodb.');
}).catch((error) => {
    console.log(error.reason);
});

//----------------------------------------------------------------------------------
//instentiate the express 
//----------------------------------------------------------------------------------
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', UserRouter);
app.use('/api/players', PlayerRouter);
app.use('/api/orders', OrderRouter);
app.get('/api/paypal/clientId', (req, res) => {
    res.send({ clientId: config.PAYPAL_CLIENT_ID });
});
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

app.listen(5000, () => {
    console.log('server at http://localhost:5000');
});
//----------------------------------------------------------------------------------------