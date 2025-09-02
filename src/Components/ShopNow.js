import { useState,useEffect } from 'react'

function ShopNow() {

    const [products, setProducts] = useState([])
     const[searchTerm, setSearchTerm] =useState('')

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    }, [])


          const filteredproducts = products.filter(stock =>
  (stock.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
  (stock.description || "").toLowerCase().includes(searchTerm.toLowerCase())
);



  return (
    <div>
        
        <div className='homesearch'> 
        <div className="input-group">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Enter text here"
             value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             className="input-style"
             type="text"
            />
         </div>
        </div>


        <div className='gyrate'>
            {
                filteredproducts.map(product=>(
                    <div key={product.id} className='card'>
                        <div className='image-box'>
                        <img className='productimg' src={product.image} alt='yoo'></img>
                         </div>

                         <div className='producttext'>
                          <p>{product.title}</p>
                         <p>Usd: {product.price}.00</p>
                         </div>
                      
                          {/* <p>{product.description}</p>
                           <p>{product.category}</p>
                            <p><strong>Rating:</strong> {product.rating?.rate} ⭐</p>
                            <p><strong>Reviews:</strong> {product.rating?.count}</p>
 */}
                     
                    </div>
                ))
            }

        </div>
        
      
    </div>
  )
}

export default ShopNow
