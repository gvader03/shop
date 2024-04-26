import styles from './Nav.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faShirt } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

function Nav() {

  const { cart } = useContext(CartContext)
  let number =  cart.reduce(
    (total, item) => total + item.quantity,0
  );

    return (
      <>
        <div className={styles.nav}>
          <Link to='/' className={styles.link}><FontAwesomeIcon icon={faHouse} /></Link>
          <Link to='/' className={styles.link}><FontAwesomeIcon icon={faShirt} /></Link>
          <div className={styles.cart}>
            <Link to='/cart' className={styles.link}><FontAwesomeIcon icon={faCartShopping} /><p className={styles.number}>{number}</p></Link>
          </div>
        </div>
      </>
    )
  }
  
  export default Nav