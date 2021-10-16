const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017//MongoDatabase";

MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    if(err) throw err;
    const dbase =db.db("drinks");

    //filter using Regular Expression
    const query ={coke:/^b/}
    dbase.collection('drinks').find(query).toArray((err,res)=>{
        if(err) throw err;
        console.log(res);
        db.close();

    });
 
    // filter with key name
    const query1 ={fanta:'yellow'}
    dbase.collection('drinks').findOne(query1,(err,res)=>{
        if(err) throw err;
        console.log(res);
        db.close();

    });
  
});