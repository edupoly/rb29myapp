import React from 'react'
import { useGetAllProductsQuery } from '../../services/productsApi'
import ProductDetails from './ProductDetails'

function Products() {
    var {data,isLoading}=useGetAllProductsQuery()
    const [title, settitle] = React.useState('')
    const [id, setid] = React.useState(null)
  return (
    <div className='border border-5 border-danger m-2 p-2 d-flex flex-wrap'>
        <div className='w-50 p-4'>
            <h1>Products</h1>
            {
                isLoading && <h4>Loading....</h4>
            }
            {
                data?.map((product)=>{
                    return <li onClick={()=>{setid(product.id)}}>{product.title}</li>
                })
            }
        </div>
        {
            id && (<div className='w-50 p-4 border border-2'>
                        <ProductDetails id={id}></ProductDetails>
                    </div>)
        }
        

        
    </div>
  )
}

export default Products