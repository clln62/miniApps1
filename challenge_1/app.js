// create an on click feature that will work for each square

let counter = 1;
let storage = [ [0, 0, 0], 
                [0, 0, 0], 
                [0, 0, 0]];

function clicked (id) {
    let cell = document.getElementById(id);
    let i = id[0];
    let d = id[1];

    if (cell.innerHTML == '') {
        if (counter % 2 !== 0) {
            cell.innerHTML = 'X';
            counter++;
            storage[i][d] = 'X';
        } else {
            cell.innerHTML = 'O';
            counter++;
            id.spl
            storage[i][d] = 'O';
        }
        // cell.style.color = 'black';
        storage.map ( (element) => {
            let holder = [];
            let counter = 1;
            if (element[0] === element[1] && element[0] === element[2] && element[0] !== 0) {
                document.getElementById(id).style.color = 'red';
            }
    //         function helper (array) {
    //             for (let i = 0; i < array.length; i++) {
    //                 if (!holder.includes(array[i])) {
    //                     holder.push(array[i]);
    //                 } 
    //                 if (holder.includes(array[i])) {
    //                     holder.push(array[i]);
    //                     counter++;
    //                 }
    //                 if (counter === 3) {
    //                     document.getElementById(id).style.color = 'red';
    //                 }
    //             }
    //         }
    //         return helper (element)
        })
    }

}


function newGame () {
    document.getElementById("table").innerHTML = '';
}