const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config');

let _db;
let client;
const uri = config.MONGODB_URL;
const options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1
};
const connect = async()=>{
   
    try{
        client = new MongoClient(uri, options)
        await client.connect();
        return client.db();
    }catch(err){
        throw new Error(`Could not connect to database: ${err.message}`);
    }
};
const initDb = callback =>{
    if(_db){
        console.log('Database is already initialized');
        return callback(null, _db);
    }
    connect().then(async(client) =>{
        _db = await connect();
        callback(null, _db);
    }).catch(err => {
        callback(err);
    })
};

const getDb = ()=>{
    if(!_db){
        throw Error('Database not Initialized');
    }
    return _db;
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

module.exports = { 
    initDb,
    getDb, 
    getCollection, 
    disconnect, 
    listDatabases 
};






