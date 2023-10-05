import './Header.css'
import { FaCartShopping } from "react-icons/fa6";


function Header({action, action1, refs, cartPoductsLenght}) {
  return (
    <div className='row'>
        <nav className="navbar navbar-light justify-content-between px-5">
        <a className="navbar-brand">E-commerce</a>
       <div className='d-flex justify-content-center align-items-center'>
          <div className="form-inline me-5">
                <input ref={refs} onChange={action} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </div>
            <div className='cart-shopping-icon'>
                <span onClick={action1} className='shopping-icon'><FaCartShopping/></span>
                <span className='number-product-slected'>{cartPoductsLenght}</span>
            </div>
       </div>
        </nav>
    </div>
  )
}

export default Header