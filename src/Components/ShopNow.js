import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'


function ShopNow() {

    const [products, setProducts] = useState([])
     const[searchTerm, setSearchTerm] =useState('')
    const [liked, setLiked] = useState(false)


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
        <div  className='moody'>
            <div className='firstshooter'>
                <img src='https://img.freepik.com/premium-vector/flash-sale-banner-social-media-sale-banner-promotion-template-discount-tag-limited-time-offer_1135545-529.jpg' alt='repeat' ></img>
            </div>

            <div className='firstshooter'>
                <img src='https://static.independent.co.uk/2021/08/27/07/05175500-40a2bdf8-8796-4430-8bd8-e11fea6342ea.jpg' alt='repeat' ></img>
            </div>

{/* <div className="container">uooo</div> */}

      
        <div className='shopnowimage'>
            <img className='yoimage' src='https://img.freepik.com/premium-vector/banner-template-offering-mega-sale-discount_419341-580.jpg' alt='yoo'></img>
        </div>
        </div>
        
        <div className='homesearch'> 

            <h2>Search your product</h2>
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


        <div  className='godzilla'>

        <div className='shopnowcategory'>
            <h2>Categories</h2>
            <ul>
                <li>
                    <Link>Mens wear</Link>
                </li>
                 <li>
                    <Link>Womens wear</Link>
                </li>
                <li>
                    <Link>Childrens wear</Link>
                </li>
            </ul>
            <h2>Clothing Style</h2>
            <ul>
             <li>
                    <Link>Opium</Link>
                </li>
             <li>
                    <Link>HipHop</Link>
                </li>
              <li>
                    <Link>Old Money</Link>
                </li>
            <li>
                    <Link>Old School</Link>
                </li>
             <li>
                    <Link>Official Suits</Link>
                </li>
            </ul>
        </div>


        <div className='gyrate'>
            {
                filteredproducts.map(product=>(
                    <div key={product.id} className='card'>
                        <Link to={`/details/${product.id}`}>

                                               <div className='heart'>
                            <i
                            className={`fa-heart ${liked ? "fa-solid liked" : "fa-regular"}`}
                            onClick={() => setLiked(!liked)}
                            ></i>
                        </div>
                        <div className='image-box'>
                            <Link to={`/details/${product.id}`}>
                                 <img className='productimg' src={product.image} alt='yoo'></img>
                            </Link>
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
                        </Link>
 
                     
                    </div>
                ))
            }

        </div>


        </div>
      
    </div>
  )
}

export default ShopNow
