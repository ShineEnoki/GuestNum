const mod = require('./functionModule')

document.querySelector("#add").addEventListener( "click", checkNum());

function checkNum(){
    

    if(inputNum > 1000 || inputNum < 0) {
        alert("Please enter number only form '0'(zero) to '999'");
    }else if( !((inputNum%2) >= 0) ) {
        alert("Please enter only 'Number'")
    } else {
        addPlayerDataToMongo();
    }
}

