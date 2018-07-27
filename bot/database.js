// table: gym
// "type": "Gym",
// "geometry": {
//   "type": "Point",
//   "coordinates": [102.0, 0.5]
// },
// "properties": {
//   "alias": ""
//   "exelegible" : False,
//   "name" : "How are you doing"
// }

// table: raid_boss
// "gym": ObjectId(<hexadecimal>),
// "tier": 5,
// "boss": "unknown",
// "hatch_timestamp": 1532375419

// table: called_raids
// "raid": ObjectId(<hexadecimal>),
// "time": 1532375419,
// "raiders": ["redel","keisus"]


const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'lugia';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

function add_gym() {

}

function get_gym(){

}

function add_egg(){

}

function add_raid() {

}
