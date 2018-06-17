const express = require("express");
const path = require("path");

const app = express();
// Getting out POSTS routes
const posts = require("./server/routes/posts");
const port = process.env.port || 4600;

// Using middleware
app.use(express.static(path.join(__dirname, "dist")));
app.use("/posts", posts);

// Catch all other route requests and return it to the index
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/AngularNodePracticeApp/index.html"));
});

app.listen(port, (req, res) => { 
    console.log(`RuNNing on ${port}`);
});