import './Button.css'
 
 function Button({company, action, inneRef}) {
   return (
     <>
     <input className='recommendedBtn' ref={inneRef} onClick={action} type='button' value={company}/>
     </>
   )
 }
 
 export default Button