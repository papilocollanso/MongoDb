const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017//MongoDatabase";

MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    if(err) throw err;
    const dbase =db.db("drinks");
// value used for sorting in ascending order
    const query ={name:1}
   
    dbase.collection('drinks').find().sort(query).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
        db.close();

    });
    
     //value used for sorting in descending order
     const query1 ={name:-1}
    dbase.collection('drinks').find().sort(query1,(err,res)=>{
        if(err) throw err;
        console.log(res);
        db.close();

    });
  
});