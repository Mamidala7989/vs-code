const MongoClient = require('mongodb').MongoClient;//importing mongodb connector library
//const url = 'mongodb://localhost:27017'; //call the URL from MongoDB with port number
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'SRIT_STUDENTS';//CALLING DATABASE

async function run() {
    let client;

    try {
        // Connect to the MongoDB server
        client = await MongoClient.connect(url);
        console.log("Connected to MongoDB");
        
        //Calling DB
        const db = client.db(dbName);
        const collection = db.collection('Students');

        // Create
        const insertResult = await collection.insertOne({ name: "Lakshmana", age: 28 });
        console.log("Document inserted:", insertResult.insertedId);

        // Read
        const docs = await collection.find({ age: { $gt: 25 } }).toArray();
        console.log("Documents found:", docs);

        // // Update
        // const updateResult = await collection.updateOne({ name: "Rama" }, { $set: { age: 31 } });
        // console.log("Document updated:", updateResult.modifiedCount);

        // // Delete
        // const deleteResult = await collection.deleteOne({ name: "Rama" });
        // console.log("Document deleted:", deleteResult.deletedCount);

    } catch (err) {
        console.error("An error occurred:", err);
    } finally {
        // Ensure the client will close when you finish/error
        if (client) {
            await client.close();
            console.log("MongoDB connection closed");
        }
    }
}

// Run the CRUD operations
run();