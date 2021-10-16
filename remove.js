const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017//MongoDatabase";

MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    if(err) throw err;
    const dbase = db.db("drinks");
   
    // you can remove a record or recors using remove()
    dbase.collection('drinks').remove({coke:'black'},err,res=>{
    if (err) throw err;
    console.log("records(s) deleted successfully");
    db.close();
    });

     // you can remove the entire collection by using drop();
    dbase.collection('drinks').drop(err,res=>{
        if (err) throw err;
        console.log("collections or documents deleted successfully");
        db.close();
        });
  
});