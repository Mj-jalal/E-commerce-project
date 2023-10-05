import './Price.css'
import  {price } from "../../Data/Data"
import {ReadioButton} from '../../Component'


function Price({action, inputRadioRef}) {
    const Price = price.map((el, i)=> {
        return <ReadioButton inneRef={(element) => {inputRadioRef.current[i+6] = element}} action={action} key={el} c={'Price'} item={el}/>
     })
  return (
    <div className='mb-2'>
         <h5>Price</h5>
         {Price}
    </div>
  )
}

export default Price