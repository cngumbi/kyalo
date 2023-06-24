const db = require('./backend/config/mongoConfig');

async function example() {
  await db.connect();
  //await db.listDatabases();
  const collection = db.getCollection('test', 'players');
  collection.insertOne();
  await db.disconnect();
}

example().catch((error) => {
  console.error('Error runnig example:', error);
});
