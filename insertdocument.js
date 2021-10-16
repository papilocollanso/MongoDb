const MongoClient = require("mongodb").MongoClient;
const url  = "mongodb://localhost:27017//MongoDatabase";

MongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
if (err) throw err;
const dbase = db.db("drinks");
const drink =[
    {
        name: 'yellow'
    },
    {
        name:'black'
    },
   {
       name: 'green'
   }
];

dbase.collection('drinks').insert(drink,(err, res)=>{
    if (err) throw err;
    console.log("Drink Inserted Successfully");
    db.close();

});

});