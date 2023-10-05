import './Color.css'
import  {color } from "../../Data/Data"
import {ReadioButton} from '../../Component'


function Color({action, inputRadioRef}) {
    const Color = color.map((el, i)=> {
        return <ReadioButton inneRef={(element) => {inputRadioRef.current[i+12] = element}} action={action} key={el} c={'Color'} item={el}/>
     })
  return (
    <div>
        <h5>Color</h5>
        {Color}
    </div>
  )
}

export default Color