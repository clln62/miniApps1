// create an on click feature that will work for each square

let counter = 1;
// let storage = {};

function clicked (id) {
    let cell = document.getElementById(id);
    let wasClicked = 'clicked';
    // if (storage[id] !== wasClicked) {
        // if counter is odd 
        if (cell.style.color == 'red') {
            if (counter % 2 !== 0) {
                // display X
                cell.innerHTML = 'X';
                // increment counter
                counter++;
                cell.style.display = 'blocked';
            } else {
            // else
                // display O
                cell.innerHTML = 'O';
                // increment counter
                counter++;
            }
            cell.style.color = 'black';
        }
        // storage.id = wasClicked;
        // console.log(cell.wasClicked)
    // }
}

function newGame () {
    document.getElementById("table").innerHTML = '';
}