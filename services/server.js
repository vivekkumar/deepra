const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;


const username = "vivekkumarbt";
const password = "pari123";
const dbUrl = `mongodb://${username}:${password}@ds217002.mlab.com:17002/dpradb`;
console.log(dbUrl)
mongoose.connect(dbUrl, { useNewUrlParser: true });


// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', () => {
	console.log("DBRA Opned!!");
})

app.get('/', (req, res) => {
  res.send('Hello from App Engine!'+db);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
