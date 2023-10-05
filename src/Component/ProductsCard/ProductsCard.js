import './ProductsCard.css'
 
 function ProductsCard({product, action}) {
   return (
   <div className='col-lg-3'>
        <div className='card-container'>
            <img src={product.img}/>
            <h6 className='py-2'>{product.title}</h6>
            <div className='rate-container pb-2'><div className='star-container'>{product.star}{product.star}{product.star}</div><span>{product.reviews}</span></div>
            <div className='price-container'><div><span className='old-price'>{product.prevPrice}</span> <span className='new-price'>{product.price}</span></div><button id={product.id} onClick={action}>Add</button></div>
        </div>
   </div>
   )
 }
 
 export default ProductsCard