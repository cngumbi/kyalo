const mongodb = require('mongodb');
const config = require('./config');

mongodb.connect(config.MONGODB_URL).then( client=>{
    console.log('connected!');
    client.close();
}).catch(err => {
    console.log(err);
});
