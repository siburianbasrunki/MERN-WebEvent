const mongoose = require("mongoose");
const { urlDb } = require("../config");

console.log(urlDb);


// mongoose.connect(urlDb);
mongoose.connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

mongoose.set('strictQuery', false);

const db = mongoose.connection;

module.exports = db;





