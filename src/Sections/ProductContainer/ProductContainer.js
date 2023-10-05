import { RecommendedBtn } from '../../Component'
import Products from '../Products/Products'
import './ProductContainer.css'


function ProductContainer({products, action,action1, refe}) {
  return (
    <div className='col-lg-9'>
        <RecommendedBtn action={action} refe={refe}/>
        <Products action={action1} products={products}/>
    </div>
  )
}

export default ProductContainer