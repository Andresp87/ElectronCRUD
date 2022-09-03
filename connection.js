const { MongoClient } = require("mongodb");

async function main() {
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.3vaz4li.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    console.log("connected!!!!!!!!!!");

    // await listDatabases(client);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

// async function listDatabases(client){
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// async function createClient(){}

function getConnection() {
  return main;
}

module.exports = { getConnection };
