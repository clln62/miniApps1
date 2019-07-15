// create an on click feature that will work for each square

let counter = 1;
// let storage = {};

function clicked (id) {
    let cell = document.getElementById(id);
    let wasClicked = 'clicked';

    if (cell.innerHTML == '') {
        if (counter % 2 !== 0) {
            cell.innerHTML = 'X';
            counter++;
        } else {
            cell.innerHTML = 'O';
            counter++;
        }
        // cell.style.color = 'black';
    }

    if 
}


function newGame () {
    document.getElementById("table").innerHTML = '';
}