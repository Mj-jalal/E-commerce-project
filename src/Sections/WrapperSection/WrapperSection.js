import './WrapperSection.css'

function WrapperSection(props) {
  return (
    <div className='row body-container p-5'>
        {props.children}
    </div>
  )
}

export default WrapperSection