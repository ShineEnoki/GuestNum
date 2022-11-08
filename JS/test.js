// console.log("a"%2)


let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://MgThuRein:password2025@cluster0.9q9o8k2.mongodb.net/GuestNum";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("database connected");
    data = {name: "Mg Mg"}
    console.log(db.number);
});

