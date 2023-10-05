import './FooterShoppingCart.css'

function FooterShoppingCart({subtotal}) {
  return (
    <div className='footer-shopping-cart'> 
        <div className='d-flex justify-content-between mb-5'>
            <h6 className='subtotal'>SUBTOTAL</h6>
            <span className='subtotal-price'>$ {subtotal? subtotal: "0.00"}</span>
        </div>
        <div>
            <button className='subtotal-btn' type='button'>CHECKOUT</button>
        </div>
    </div>
  )
}

export default FooterShoppingCart