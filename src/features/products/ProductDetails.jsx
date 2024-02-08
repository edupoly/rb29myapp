import React from 'react'
import { useGetProductDetailsByIdQuery } from '../../services/productsApi'

function ProductDetails(props) {
    var {data,isLoading}=useGetProductDetailsByIdQuery(props.id);
  return (
    <div>
        <h1>ProductDetails: {props.id}</h1>
        {!isLoading && JSON.stringify(data)}
    </div>
  )
}

export default ProductDetails