const { MongoClient } = require("mongodb");
require("dotenv").config();

// async function getAllData() {
//   const uri = process.env.MONGO_URI;

//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     const result = await client
//       .db("exampleElectronCRUD")
//       .collection("clients")
//       .find();

//     return result.cursor;
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// }

async function insertData(data) {
  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri);

  try {
    await client.connect();

    // Insert data into MongoDb
    await client
      .db("exampleElectronCRUD")
      .collection("clients")
      .insertOne(data);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
}

// async function findData(data) {
//   const uri = process.env.MONGO_URI;

//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     const result = await client
//       .db("exampleElectronCRUD")
//       .collection("clients")
//       .findOne({ name: data });

//     if (result) {
//       console.log("nombre encontrado");
//       console.log(result);
//     } else {
//       console.log(`no se encontro el nombre "${data}"`);
//     }
//   } catch (error) {
//     console.log(error);
//   } finally {
//     await client.close();
//   }
// }

insertData().catch(console.error);
// findData().catch(console.error);

module.exports = { insertData };
