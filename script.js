



function checkNum(){
    let inputNum = document.querySelector('#inputNum').value;
    let inputName = document.querySelector('#name').value;
    let inputPhNo = document.querySelector('#Ph-No').value;

    if(inputNum > 1000 || inputNum < 0) {
        alert("Please enter number only form '0'(zero) to '999'");
    }else if( !((inputNum%2) >= 0) ) {
        alert("Please enter only 'Number'")
    } else {
        let MongoClient = require('mongodb').MongoClient;
        let url = "mongodb+srv://MgThuRein:password2025@cluster0.9q9o8k2.mongodb.net/";

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            let numberCol = db.db("GuestNum").collection("number");
            let participantsCol = db.db("GuestNum").collection("participants");

            let addNum = inputNum;
            let addData = {_id : inputNum,
                            name : inputName,
                            PhoneNumber : inputPhNo,
                            number : inputNum}
            

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
    }
}