import React from 'react'
import { useGetAllCountriesQuery,useLazyGetCountryDetailsByNameQuery } from '../../services/countriesapi'

function Countries() {
    var {isLoading,data} = useGetAllCountriesQuery()
    var [details,setDetails] = React.useState({})
    var [getDetails]=useLazyGetCountryDetailsByNameQuery()
    function getCountry(name){
        getDetails(name).then(res=>setDetails({...res.data[0]}))
    }
  return (
    <div className='border border-5 border-success m-2 p-2 d-flex flex-wrap'>
        <div className='w-50 border border-5 border-info'>
            <h1>Countries</h1>
            {
                isLoading && (
                    <img width="100px" src='https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif'/>
                )
            }
            {
                data?.map((country)=>{
                    return <li onClick={()=>{getCountry(country.name.common)}}>{country.name.common}</li>
                })
            }
        </div>
        <div className='w-50 border border-5 border-danger'>
            {JSON.stringify(details)}
        </div>
        
    </div>
  )
}

export default Countries