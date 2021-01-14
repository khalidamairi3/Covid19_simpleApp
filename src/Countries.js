import React from 'react'
import PropTypes from 'prop-types'
import Country from './Country'
function Countries(props) {
    return (
        <div>
            <table id="covid">
                <tbody>
                    <tr> 
                        <th>Country</th>
                        <th>Cases </th>
                        <th>Recovered</th>
                        <th> Deaths </th>
    
                    </tr>
                    { props.countries.map((country) => { 
                        return <Country country = {country} key={country.CountryCode} ></Country>
                    }) }

                </tbody>
            </table>
            
        </div>
    )
}



export default Countries

