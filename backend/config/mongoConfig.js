const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config');

let client;

const connect = async()=>{
    const uri = config.MONGODB_URL;
    client = new MongoClient(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1
    })
    await client.connect();
}

const getCollection = ({dbName,collectionName})=>{
    return client.db(dbName).collection(collectionName);
}

const disconnect = async()=>{
    await client.close();
}

module.exports = { connect, getCollection, disconnect };






