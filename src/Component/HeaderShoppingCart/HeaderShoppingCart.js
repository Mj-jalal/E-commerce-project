import './HeaderShoppingCart.css'
import { FaCartShopping } from "react-icons/fa6";

import React from 'react'

function HeaderShoppingCart({productsLenght, action}) {
  return (
    <div className='header-shopping-cart'>
         <div className='cart-shopping-icon mx-2'>
            <span className='shopping-icon'><FaCartShopping/></span>
            <span className='number-product-slected'>{productsLenght}</span>
        </div>
        <h4 className='mx-2'>Cart</h4>

        <button onClick={action} className='close-shopping-cart' type='button'>X</button>
    </div>
  )
}

export default HeaderShoppingCart