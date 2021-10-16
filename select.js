const MongoClient = require('mongodb').MongoClient;
const url  = "mongodb://localhost:27017//MongoDatabase";
MongoClient.connect(url, { useUnifiedTopology: true },function(err,db){
    const dbase =db.db("drinks");
 if (err) throw err;
 // find or select all records
 dbase.collection('drinks').find({}).toArray((err,res)=>{
   if (err) throw err;
   console.log(res);
   db.close();
 });
 
 // find or select one record
 dbase.collection('drinks').findOne({},(err,res)=>{
  if (err) throw err;
  console.log(res);
  db.close();
});

});