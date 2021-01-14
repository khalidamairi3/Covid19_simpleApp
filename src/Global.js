import React from 'react'




function Global(props) {
    let global = props.global;
    return (
        <div>
            <table >
                <thead>
                    <tr>
                    <th>New Cases</th>
                    <th>New Deaths</th>
                    <th>New Recovered</th>
                </tr>
                </thead>
                <tbody>
                
                <tr>
                    <td> {  global.NewConfirmed } </td>
                    <td>{global.NewDeaths }</td>
                    <td> {global.NewRecovered } </td>




                </tr>

                </tbody>
                


            </table>
            
        </div>
    )
}



export default Global

