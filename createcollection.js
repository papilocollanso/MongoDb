const MongoClient = require("mongodb").MongoClient;
const url  = "mongodb://localhost:27017//MongoDatabase";

MongoClient.connect(url, {useUnifiedTopology:true },function(err,db){
    const dbase=db.db("drinks");
    if (err) throw err;
    dbase.collection("drinks", function(err,res){
     
    if (err) throw err;
    console.log(res); 
    db.close();

 });


 

});