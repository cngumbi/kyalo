const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./config/mongoConfig');
const bodyParser = require('body-parser');
const config = require('./config/config');
const UserRouter = require('./routers/userRouter');
const PlayerRouter = require('./routers/playerRouter');
//----------------------------------------------------------------------------------
//instentiate the express 
//----------------------------------------------------------------------------------
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', UserRouter);
app.use('/api/players', PlayerRouter);


//app.get('/api/products', (req, res) => {
//    res.send(data.products);
//});
//
//app.get('/api/products/:id', (req, res) => {
//    const product = data.products.find(x => x._id === req.params.id);
//    if (product) {
//        res.send(product);
//    } else {
//        res.status(404).send({ message: 'Product not found!' });
//    }
//
//});
//----------------------------------------------------
//conect the front end with the backend
//----------------------------------------------------
//----------------serving uploaded images--------------
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
//-----------------------------------------------------
app.use(express.static(path.join(__dirname, '/../frontend')));
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '/../frontend/index.html'));
});
//----------------------------------------------------
//error handling
//code to handle all errors in express instance
app.use((err, req, res, next) => {
    const status = (err.name && err.name === 'ValidationError') ? 400 : 500;
    res.status(status).send({ message: err.message });
})
//initialize the database and start the app
db.initDb((err, db)=>{
    if(err){
        console.log(err);
    }else{
        app.listen(config.PORT, () => {
            console.log(`server at http://localhost:${config.PORT}`);
        });
    }
})

//----------------------------------------------------------------------------------------