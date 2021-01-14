import React from 'react'


function Country(props) {
    let country = props.country; 
    return (
        <tr>
            
                <td> {country.Country} <img src={"https://www.countryflags.io/"+country.CountryCode+"/flat/48.png"} alt=""/>  </td>
    <td className="cases"> {country.TotalConfirmed } <span> { "+" + country.NewConfirmed } </span> </td>
                <td className="recovered"> {country.TotalRecovered} <span> {"+" + country.NewRecovered} </span> </td>
    <td className="deaths"> {country.TotalDeaths } <span> { "+" + country.NewDeaths}</span> </td>
            
            
    </tr>
            
        
    )
}


export default Country;

