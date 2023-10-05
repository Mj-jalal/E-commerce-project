import './RecommendedBtn.css'
import { company } from '../../Data/Data'
import {Button} from "../../Component"

function RecommendedBtn({action, refe}) {
    const btn = company.map((el, i)=>{
        return <Button inneRef={(element) => {refe.current[i] = element}} key={el} action={action} company={el}/>
    })
  return (
    <div>
        <h4 className='mb-4'>Recommended</h4>
        <div>
            {btn}
        </div>
    </div>
  )
}

export default RecommendedBtn