import React from 'react'
import axios from 'axios'
import CountryDetails from './CountryDetails'
import { Link, Outlet } from 'react-router-dom'
function Countries() {
    var [countries,setCountries] = React.useState([])
    var [loader,setLoader] = React.useState(true)
    var [selectedCountry,setSelectedCountry] = React.useState({})

    React.useEffect(()=>{

        axios.get("https://restcountries.com/v3/all").then((res)=>{
            setCountries(res.data)
            setLoader(false)
        }).catch(()=>{})
    },[])

  return (
    <div className='mybox'>
        <h3>Countries</h3>
        {loader && <h2>Loading...</h2> }
        <div style={{display:'flex',flexWrap:'wrap'}}>
        <ul style={{width:'50%'}}>
            {
                countries.map((c)=>{
                    return <li>
                        <Link to={"countryDetails/"+c.name.common}>{c.name.common}</Link>
                    </li>
                })
            }
        </ul>
        <div style={{width:'40%'}}>
            <Outlet></Outlet>
        </div>
        </div>
        
    </div>
  )
}

export default Countries