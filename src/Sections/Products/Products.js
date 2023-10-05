import { ProductsCard } from '../../Component'
import './Products.css'


function Products({products, action}) {

  const card = products.map(product=>{
  return  <ProductsCard action={action} key={product.id} product={product}/>
  })
  return (
    <div className='cards-container row'>
      {card}
    </div>
  )
}

export default Products