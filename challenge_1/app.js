// create an on click feature that will work for each square


function clicked (id) {
    let counter = 1;
    let cell = document.getElementById(id);
    // if counter is odd 
    if (counter % 2 !== 0) {
        // display X
        cell.innerHTML = 'X';
        // increment counter
        counter++;
    } else {
    // else
        // display O
        cell.innerHTML = 'O';
        // increment counter
        counter++;
    }


}