import { Category, Price, Color } from '../../Component'
import './SideBar.css'



function SideBar({action, inputRadioRef}) {
  return (
    <div className='col-lg-3 side-bar'>
        <Category inputRadioRef={inputRadioRef} action={action}/>
        <Price inputRadioRef={inputRadioRef} action={action}/>
        <Color inputRadioRef={inputRadioRef} action={action}/>
    </div>
  )
}

export default SideBar