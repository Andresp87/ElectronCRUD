const { MongoClient } = require("mongodb");
require("dotenv").config();

// const user = process.env.MONGO_USER;
// const password = process.env.MONGO_PASSWORD;

function queriesFunction(receivenFunction, dataToQuery) {}

async function main() {
  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    // Insert data into MongoDb
    await insertData(client, {
      name: "clientsname",
      weight: 123,
      comment: "alllallakkksd",
    });

    // Find data from MongoDB by name
    // await findData(client, "clientsname");

    console.log("connected!!!!!!!!!!");

    // await listDatabases(client);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

// Insert data into MongoDb
async function insertData(client, newData) {
  const result = await client
    .db("exampleElectronCRUD")
    .collection("clients")
    .insertOne({ name: newData });

  console.log(`inserted IDzzzzzz: ${result.insertedId}`);
  // console.log(result);
}

// Find data from MongoDB by name
// async function findData(client, dataToFind) {
//   const result = await client
//     .db("exampleElectronCRUD")
//     .collection("clients")
//     .findOne({ name: dataToFind });

//   if (result) {
//     console.log("nombre encontrado");
//     console.log(result);
//   } else {
//     console.log(`no se encontro el nombre "${dataToFind}"`);
//   }
// }

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
