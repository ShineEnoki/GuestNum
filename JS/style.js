// displaying and givin id and value to Number
for(let i = 0; i < 1000; i++) {
    let element = document.querySelector(`#num${i+1}`);
    element.className = "num";
    if(i < 10) {
        element.textContent = "00" + i;
    } else if (i < 100){
        element.textContent = "0" + i; 
    } else {
    element.textContent = i;
    }
}


