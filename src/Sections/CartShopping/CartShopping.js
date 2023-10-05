import { BodyShoppingCart, FooterShoppingCart, HeaderShoppingCart } from '../../Component'
import './CartShopping.css'



function CartShopping({products,subtotal, action, action1, action2, cartRef}) {
  return (
    <div ref={cartRef} className='cart-shopping-container'>
       <div className='cart-content'>
          <HeaderShoppingCart action={action2} productsLenght={products.length}/>
          <BodyShoppingCart action={action} action1={action1} products={products}/>
       </div>
        <div>
         <FooterShoppingCart subtotal={subtotal}/>
        </div>
    </div>
  )
}

export default CartShopping