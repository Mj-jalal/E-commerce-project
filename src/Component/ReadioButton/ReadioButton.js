import './ReadioButton.css'



function ReadioButton({item, c, action, inneRef}) {
  return (
    <div>
         <input ref={inneRef} onChange={action} type="radio" id={item + c} name={c} value={item}/>
        <label htmlFor={item + c}>{item}</label><br></br>
    </div>
  )
}

export default ReadioButton