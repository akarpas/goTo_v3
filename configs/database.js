/*jshint esversion: 6*/
require("dotenv").config();
const mongoose = require("mongoose");
const dbName = 'goto-database';

// mongoose.connect("mongodb://localhost/goto-database");
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to the ${dbName} database`);
});
