// create an on click feature that will work for each square


function clicked () {
    let counter = 1;
    // if counter is odd 
    if (counter % 2 !== 0) {
        // display X
        document.getElementById("cell").innerHTML = 'X';
        // increment counter
        counter++;
    } else {
    // else
        // display O
        document.getElementById("cell").innerHTML = 'O';
        // increment counter
        counter++;

    }


}