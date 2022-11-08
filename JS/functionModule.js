

function Length(arr) {
    for (let i = 0; i < Infinity; i++){
        if (arr[i] == undefined) {
            return i;
        }
    }
}



function test() {
    console.log("Connecting to functionModule is success");
}


function addPlayerDataToMongo(){
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb+srv://MgThuRein:password2025@cluster0.9q9o8k2.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("database connected")
    
    let inputNum = document.querySelector('#inputNum').value;
    let inputName = document.querySelector('#name').value;
    let inputPhNo = document.querySelector('#Ph-No').value;

    let numberCol = db.db("GuestNum").collection("number");
    let participantsCol = db.db("GuestNum").collection("participants");

    let addNum = {  _id : inputNum,
                    number : inputNum};
    let addData = { _id : inputNum,
                    name : inputName,
                    PhoneNumber : inputPhNo,
                    number : inputNum}
        
    console.log("This is just testing");
    numberCol.insertOne(addNum, function(err, res) {
        if (err) throw err;
        console.log("1 number is inserted");
        db.close();
    });

    participantsCol.insertOne(addData, function(err, res) {
        if (err) throw err;
        console.log("1 participant data is inserted");
        db.close();
    });
});
};



function checkAvailabile(){
    let MongoClient = require('mongodb').MongoClient;
    let url = "mongodb+srv://MgThuRein:password2025@cluster0.9q9o8k2.mongodb.net/";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let dbo = db.db("GuestNum");
        
        dbo.collection("participants").find({}).toArray(function(err, result) {
            if (err) throw err;

            let inputNum = document.querySelector('#inputNam').value;
            for (let i = 0; i < Length(result); i++){
                if(inputNum == result[i].number) return true;
                break;
            }  
            
            db.close();
            
        });
    });

}
console.log(checkAvailabile());

 module.exports = {test, addPlayerDataToMongo, Length}