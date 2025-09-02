import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >

      <div className='playa'>
        <h2>JPTA</h2>
        <div className='playatext'>
            <h2> <i className="fa-solid fa-phone-volume"></i>call center</h2>
            <h2><i className="fa-solid fa-truck-fast"></i> Shipping and returns</h2>
        </div>
      </div>


      <div className='superhuman'>
        <div className='benjamins'>
            <ul >
                <li>
                    <Link>Shoppp</Link>
                </li>

                 <li>
                    <Link>About</Link>
                </li>

                 <li>
                    <Link>Blog</Link>
                </li>
            </ul>
        </div>


        <div className='homesearch'> 
        <div class="input-group">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Enter text here" class="input-style" type="text"/>
         </div>
        </div>
        

        <div className='homeicons'>
            <ul>
                <li>
                    <i class="fa-regular fa-heart"></i>
                </li>
                <li>
                   <i class="fa-solid fa-cart-shopping"></i>
                </li>
                <li>
                   <i class="fa-regular fa-user"></i>
                </li>
            </ul>
        </div>

</div>



<div className='avalanchebody'>
    <div className='bodytext'>
        <h2>the</h2>
        <h2>SPORTYY</h2>
        <h2>LIFESTYLE</h2>
        <p>Be Yourself- feel special</p>

        <button className='shopbtn'>
           <Link to='/shopnow'>Shop now</Link> 
            </button> 
    </div>
    <div className='bodyimage'>
        <img src='https://image.made-in-china.com/202f0j00FpRcdaLShGgM/Active-Wear-Sets-for-Women-Workout-Clothes-Gym-Wear-Sports-Top-Yoga-High-Waist-Leggings-Crop-Top-3-Pieces-Set-Outfit.webp' alt='lil peep'></img>
    </div>
</div>
      
    </div>
  )
}

export default Home
