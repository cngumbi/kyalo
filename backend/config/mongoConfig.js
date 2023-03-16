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
};

const getCollection = (dbName, collectionName )=>{
    return client.db(dbName).collection(collectionName);
};

const disconnect = async()=>{
    await client.close();
};

const listDatabases = async()=>{
    const databaseslist = await client.db().admin().listDatabases();
    console.log("databaes");
    databaseslist.databases.forEach(db => {
        console.log(`-${db.name}`);
    });
}

module.exports = { connect, getCollection, disconnect, listDatabases };






