import React from 'react'
import axios from 'axios'
function Countries() {
    var [countries,setCountries] = React.useState([])
    var [loader,setLoader] = React.useState(true)
    

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
        <ul>
            {
                countries.map((c)=>{
                    return <li>{c.name.common}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Countries