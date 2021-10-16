var MongoClient = require ('mongodb').MongoClient
 const url = "mongodb://localhost:27017//MongoDatabase";

 MongoClient.connect(url,{useUnifiedTopology: true}, function(err,db){
     if (err) throw err;
     console.log("Database Created");
     db.close();
 })