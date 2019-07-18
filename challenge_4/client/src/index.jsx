import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../../style.css';

let connect = [ [0, 0, 0, 0, 0, 0, 0], //column 1
                [0, 0, 0, 0, 0, 0, 0], //column 2
                [0, 0, 0, 0, 0, 0, 0], //column 3
                [0, 0, 0, 0, 0, 0, 0], //column 4
                [0, 0, 0, 0, 0, 0, 0], //column 5
                [0, 0, 0, 0, 0, 0, 0]]; //column 6

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {

        }
        this.rowClicked = this.rowClicked.bind(this)

    }


    rowClicked (clickedId, clickedClass) {
        let cell = document.getElementById(clickedId);
        let column = document.getElementsByClassName(clickedClass)
        let i = clickedId[0];
        let d = clickedId[1];

        if (column === 'column1') {
            loop(connect[0]);
        }
        if (column === 'column2') {
            loop(connect[1]);
        }
        if (column === 'column3') {
            loop(connect[2]);
        }
        if (column === 'column4') {
            loop(connect[3]);
        }
        if (column === 'column5') {
            loop(connect[4]);
        }
        if (column === 'column6') {
            loop(connect[5]);
        }
        if (column === 'column7') {
            loop(connect[6]);
        }
        
        function loop (array) {
            if (array.length-1 === 0) {
                array[array.length-1] = 'X';
                cell.innerHTML = 'X';
            }
            for (let j = d; j < array.length; j++) {
                if (array[j] !== 0) {

                }
            }
        }
    };





    render () {
        return (
            <div> 
                {/* <link rel="stylesheet" type="text/css" href="../../"> */}
                <table border="1" align="center">
                    <thead>
                        <tr>
                            <th colspan="7">CONNECT FOUR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td type="button" height="100" width="100" class="column1" id="00" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column2" id="10" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column3" id="20" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column4" id="30" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column5" id="40" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column6" id="50" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column7" id="60" onClick={this.rowClicked(id, class)}></td>
                        </tr>
                        <tr>
                            <td height="100" width="100" class="column1" id="01" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column2" id="11" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column3" id="21" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column4" id="31" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column5" id="41" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column6" id="51" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column7" id="61" onClick={this.rowClicked(id, class)}></td>
                        </tr>
                        <tr>
                            <td height="100" width="100" class="column1" id="02" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column2" id="12" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column3" id="22" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column4" id="32" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column5" id="42" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column6" id="52" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column7" id="62" onClick={this.rowClicked(id, class)}></td>
                        </tr>
                        <tr>
                            <td height="100" width="100" class="column1" id="03" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column2" id="13" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column3" id="23" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column4" id="33" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column5" id="43" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column6" id="53" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column7" id="63" onClick={this.rowClicked(id, class)}></td>
                        </tr>
                        <tr>
                            <td height="100" width="100" class="column1" id="04" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column2" id="14" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column3" id="24" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column4" id="34" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column5" id="44" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column6" id="54" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column7" id="64" onClick={this.rowClicked(id, class)}></td>
                        </tr>
                        <tr>
                            <td height="100" width="100" class="column1" id="05" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column2" id="15" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column3" id="25" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column4" id="35" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column5" id="45" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column6" id="55" onClick={this.rowClicked(id, class)}></td>
                            <td height="100" width="100" class="column7" id="65" onClick={this.rowClicked(id, class)}></td>
                        </tr>

                    </tbody>
                </table>
                {/* <Component1 />
                <Component2 />
                <Component3 /> */}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));