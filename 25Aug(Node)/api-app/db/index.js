// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.DB_URI;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // // Send a ping to confirm a successful connection
//     // await client.db("admin").command({ ping: 1 });
//     // console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     const database = client.db("testDB");
//     const data  = database.collection("demo");
//     await data.insertOne({id:1, name: "demo", email: "demo@gmail.com"})
//   } finally {


//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// // run().catch(console.dir);

// module.exports = run;


const mongoose = require("mongoose");

async function run(){
    const client = await mongoose.connect(process.env.DB_URI)
    client.connection.db  = "productsB";
    console.log("connected to DB successfully")
}

module.exports = run;