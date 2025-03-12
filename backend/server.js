require("dotenv").config();
const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Define Mongoose Schema
const DataSchema = new mongoose.Schema({
    postId: Number,
    id: Number,
    name: String,
    email: String,
    body: String
});
const DataModel = mongoose.model("Data", DataSchema);

// Configure Multer for File Uploads
const upload = multer({ dest: "uploads/" });

// Upload CSV Route
app.post("/upload", upload.single("file"), async (req, res) => {
    const results = [];
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", async () => {
            await DataModel.insertMany(results);
            fs.unlinkSync(req.file.path);
            res.json({ message: "File uploaded and data saved!" });
        });
});

// List Uploaded Data with Pagination
app.get("/data", async (req, res) => {
    const { page = 1, limit = 10, search = "" } = req.query;
    const filter = search ? { name: new RegExp(search, "i") } : {};
    const data = await DataModel.find(filter).limit(limit * 1).skip((page - 1) * limit);
    const count = await DataModel.countDocuments(filter);
    res.json({ data, totalPages: Math.ceil(count / limit) });
});


if (process.env.NODE_ENV !== "test") {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
