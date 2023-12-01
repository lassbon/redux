import { store } from '../store'
import { useSelector } from 'react-redux'
import {CartIcon} from '../icons'


 const Navbar = () => {
    const { itemCount } = useSelector((state) => state.cart)    

 

  return (
    <nav>
      <div className='nav-center'>
        <h3>Mini Jumia</h3>
        <div className='nav-container'>
         <CartIcon />
          <div className='amount-container'>
           
            <p className='total-amount'>{itemCount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
