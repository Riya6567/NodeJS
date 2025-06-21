const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = "BWU";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// DB connection function
async function dbConnection() {
    await client.connect();
    const db = client.db(dbName);
    return db.collection("todos");
}

// Home route - list all tasks
app.get("/", async (req, res) => {
    const collection = await dbConnection();
    const todos = await collection.find().toArray();
    res.render("index.ejs", { todos });
});

// Add task
app.post("/add", async (req, res) => {
    const collection = await dbConnection();
    const { task } = req.body;
    await collection.insertOne({ task, status: "Not Done" });
    res.redirect("/");
});

// Edit task
app.post("/edit/:id", async (req, res) => {
    const collection = await dbConnection();
    const { task, status } = req.body;
    await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { task, status } }
    );
    res.redirect("/");
});

// Delete task
app.post("/delete/:id", async (req, res) => {
    const collection = await dbConnection();
    await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.redirect("/");
});

// Start server
app.listen(5050, () => {
    console.log("Server running at http://localhost:5050");
});
