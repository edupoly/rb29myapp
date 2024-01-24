import axios from 'axios';
import React, { useState } from 'react'
import { useParams,useLocation,useNavigate, Link } from 'react-router-dom'

function CountryDetails(props) {

    var params = useParams();
    var navig = useNavigate();
    const [details, setDetails] = useState({})
    
    React.useEffect(()=>{
        axios.get(`https://restcountries.com/v3.1/name/${params.cname}`)
        .then((res)=>{
            console.log(res)
            setDetails({...res.data[0]})
        })
    },[params])
  function gototodolist(){
    navig("/todolist")
  }
  return (
    <div className='mybox'>
        <h1>CountryDetails:{details?.name?.common}</h1>
        <button onClick={gototodolist}>lets see todolist</button>
    </div>
  )
}

export default CountryDetails