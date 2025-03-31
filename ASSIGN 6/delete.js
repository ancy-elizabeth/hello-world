const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  const dbo = db.db("mydb"); // ✅ define it after connecting

  dbo.collection("customers").deleteMany({}, function(err, obj) {
    if (err) throw err;
    console.log("✅ Collection cleared");
    db.close(); // Don't forget to close
  });
});