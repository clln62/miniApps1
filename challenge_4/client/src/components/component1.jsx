import React from 'react';

const Table = props => {
    return (
        <div>
            <table border="1" align="center">
                <thead>
                    <tr>
                        <th colSpan="7">CONNECT FOUR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td height="100" width="100" className="column1" id="00"></td>
                        <td height="100" width="100" className="column2" id="10"></td>
                        <td height="100" width="100" className="column3" id="20"></td>
                        <td height="100" width="100" className="column4" id="30"></td>
                        <td height="100" width="100" className="column5" id="40"></td>
                        <td height="100" width="100" className="column6" id="50"></td>
                        <td height="100" width="100" className="column7" id="60"></td>
                    </tr>
                    <tr>
                        <td height="100" width="100" className="column1" id="01"></td>
                        <td height="100" width="100" className="column2" id="11"></td>
                        <td height="100" width="100" className="column3" id="21"></td>
                        <td height="100" width="100" className="column4" id="31"></td>
                        <td height="100" width="100" className="column5" id="41"></td>
                        <td height="100" width="100" className="column6" id="51"></td>
                        <td height="100" width="100" className="column7" id="61"></td>
                    </tr>
                    <tr>
                        <td height="100" width="100" className="column1" id="02"></td>
                        <td height="100" width="100" className="column2" id="12"></td>
                        <td height="100" width="100" className="column3" id="22"></td>
                        <td height="100" width="100" className="column4" id="32"></td>
                        <td height="100" width="100" className="column5" id="42"></td>
                        <td height="100" width="100" className="column6" id="52"></td>
                        <td height="100" width="100" className="column7" id="62"></td>
                    </tr>
                    <tr>
                        <td height="100" width="100" className="column1" id="03"></td>
                        <td height="100" width="100" className="column2" id="13"></td>
                        <td height="100" width="100" className="column3" id="23"></td>
                        <td height="100" width="100" className="column4" id="33"></td>
                        <td height="100" width="100" className="column5" id="43"></td>
                        <td height="100" width="100" className="column6" id="53"></td>
                        <td height="100" width="100" className="column7" id="63"></td>
                    </tr>
                    <tr>
                        <td height="100" width="100" className="column1" id="04"></td>
                        <td height="100" width="100" className="column2" id="14"></td>
                        <td height="100" width="100" className="column3" id="24"></td>
                        <td height="100" width="100" className="column4" id="34"></td>
                        <td height="100" width="100" className="column5" id="44"></td>
                        <td height="100" width="100" className="column6" id="54"></td>
                        <td height="100" width="100" className="column7" id="64"></td>
                    </tr>
                    <tr>
                        <td height="100" width="100" className="column1" id="05"></td>
                        <td height="100" width="100" className="column2" id="15"></td>
                        <td height="100" width="100" className="column3" id="25"></td>
                        <td height="100" width="100" className="column4" id="35"></td>
                        <td height="100" width="100" className="column5" id="45"></td>
                        <td height="100" width="100" className="column6" id="55"></td>
                        <td height="100" width="100" className="column7" id="65"></td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}


export default Table;


