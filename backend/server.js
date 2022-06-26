import express from 'express';
import cors from 'cors';
import data from './data';
import mongoose from 'mongoose';
import config from './config';
import UserRouter from './routers/userRouter';

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

const app = express();
app.use(cors());

app.use('/api/users', UserRouter);

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

app.listen(5000, () => {
    console.log('server at http://localhost:5000');
});