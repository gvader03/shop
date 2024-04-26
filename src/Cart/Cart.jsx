import styles from './Cart.module.css';
import Header from '../Header/Header';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

function Cart() {

    const { cart, setCartItems } = useContext(CartContext)
    const total = cart.reduce(
        (total, item) => total + item.price * item.quantity,0
      );
    const items = cart.reduce(
        (total, item) => total + item.quantity,0
      );
    
      const increment = (event) => {
        const item = event.target.parentNode.parentNode.parentNode.id;
      setCartItems(
       cart.map(
          (
            cartItem 
          ) =>
            cartItem.name === item
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
        )
      );

      }

      const decrement = (event) => {
        const item = event.target.parentNode.parentNode.parentNode.id;
      setCartItems(
       cart.map(
          (
            cartItem
          ) =>
            cartItem.name === item && cartItem.quantity>0
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
        )
      );

      }
    
    if (cart.length === 0) {
        return (
          <div className={styles.nothing}>
            <img src={logo} alt="logo" className={styles.logo} />
            <p>You need some stuff in this cart. Return to <Link to="/">Shop</Link></p>
          </div>
        );
      }
    
    return (
    <>
      <Header />
      <div className={styles.content}>
        <h1>What a haul!</h1>
        <h2>Your items: <span className={styles.span}>{items}</span></h2>
        <div className={styles.products}>
        {cart.map((element) => (
                <div className={styles.product} key={element.id} id={element.name}>
                    <img src={element.image} alt="product image" className={styles.img} />
                    <p>{element.name}</p>
                    <p>${element.price}</p>
                    <div className={styles.quantity}>
                    <p>{element.quantity}</p>
                    <div className={styles.quant}>
                        <button className={styles.quantbtn} onClick={increment}>+</button>
                        <button className={styles.quantbtn} onClick={decrement}>-</button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        <div className={styles.productstuff}>
        <h2>Your total: ${total}</h2>
        <Button text="Checkout" />
        <p>SSL encrypted</p>
        <FontAwesomeIcon icon={faLock} />
        </div>
      </div>
    </>
  )
}

export default Cart

//props