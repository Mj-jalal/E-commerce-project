import {CartCard }from '../../Component'
import './BodyShoppingCart.css'



function BodyShoppingCart({products, action, action1}) {
  const card = products.map(item=>{
      return <CartCard key={item.id} action={action} action1={action1} card={item}/>
  })
  return (
    <div className='body-shopping-cart'>
        {card}
    </div>
  )
}

export default BodyShoppingCart