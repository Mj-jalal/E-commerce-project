import './WrapperContainer.css'



function WrapperContainer(props) {
  return (
    <div className='container-fluid overflow-x-hidden position-relative'>
        {props.children}
    </div>
  )
}

export default WrapperContainer