import './Category.css'
import  {category } from "../../Data/Data"
import {ReadioButton} from '../../Component'


function Category({action, inputRadioRef}) {
    const Category = category.map((el, i)=> {
       return <ReadioButton inneRef={(element) => {inputRadioRef.current[i] = element}} action={action} key={el} c={'Category'} item={el}/>
    })
  return (
    <div className='mb-2'>
        <h5>Category</h5>
        {Category}
    </div>
  )
}

export default Category