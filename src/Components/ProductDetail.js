import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function ProductDetail() {

    const { id } = useParams()
    const  {productsDetails, setProductDetails} = useState([])


    useEffect(() => {
       fetch(`https://fakestoreapi.com/products/${id}`)
       .then((res) => (
        res.json
       ))
       .then((data) =>(
        setProductDetails(data)
       ))
    })




  return (
    <div>
     <h2>we display product data - { id }</h2> 

     {
        productsDetails.map((productDetail)=>{
            <div key={id}>
            </div>
        })
     }
    </div>
  )
}

export default ProductDetail
