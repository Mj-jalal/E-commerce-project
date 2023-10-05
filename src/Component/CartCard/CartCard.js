import './CartCard.css'


function CartCard({card, action, action1}) {
  return (
    <div className='cart-card-conatiner'>
        <div className='left-content-card'>
            <img className='left-content-card-img' src={card.img}/>
            <div className='left-content-card-text'>
                <h5>{card.title}</h5>
                <p>{card.category}</p>
                <span>Quantity: {card.Quantity}</span>
            </div>
        </div>
        <div id={card.id} className='right-content-card'>
            <button type='button'  onClick={action} className='close-btn'>X</button>
            <p className='cart-price'>$ {card.price}</p>
            <div className='right-content-card-btn'>
                <button onClick={action1} type='button' name='down'>-</button>
                <button onClick={action1} type='button' name='up'>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartCard