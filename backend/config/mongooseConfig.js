const mongoose = require('mongoose');
const config = require('./config');


mongoose.set('useNewUrlParser', 'useUnifiedTopology', true);
mongoose.connect(config.MONGODB_URL);

//acquire the connection
const database = mongoose.connection;

database.on('error', console.error.bind(console, 'connection error'));
database.once('open', function(){
    console.log('Success db connection');
});