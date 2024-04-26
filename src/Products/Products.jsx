import { Link } from "react-router-dom";
import Card from "../Card/Card";
import styles from "./Products.module.css"
//import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
//import FetchProducts from "../ProductList";
import { productList } from "../ProductList";
import Button from "../Button/Button";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

//const { products, error, loading } = FetchProducts();


const Product = () => {
    /*const [productList, setProducts] = useState([
        {
            id: 'C3KfxN2DG',
            image: 'https://cdn2.thedogapi.com/images/C3KfxN2DG.jpg',
            name: 'Bag',
            price: '$20',
          },
          {
            id: 'Mn2A5Urz0',
            image: 'https://cdn2.thedogapi.com/images/Mn2A5Urz0.jpg',
            name: 'Shirt',
            price: '$50',
          },
          {
            id: '8vgnFmYG8',
            image: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
            name: 'Pants',
            price: '$2000',
          },
    ]);*/
    
   /* const { products, error, loading } = FetchProducts();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;*/

  return (
    <div className={styles.productsList}>
      <h1>PRODUCTS</h1>
        <div className={styles.plp}>
        {productList.map((element) => (
                <Link to={`/products/${element.name}`} key={element.id} className={styles.products}>
                    <div className={styles.products}>
                    <Card id={element.id} image={element.image} title={element.name} price={element.price} />
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
};

const ProductPage = () => {
    /*const products = [
        {
            id: 'C3KfxN2DG',
            image: 'https://cdn2.thedogapi.com/images/C3KfxN2DG.jpg',
            name: 'Bag',
            price: '$20',
          },
          {
            id: 'Mn2A5Urz0',
            image: 'https://cdn2.thedogapi.com/images/Mn2A5Urz0.jpg',
            name: 'Shirt',
            price: '$50',
          },
          {
            id: '8vgnFmYG8',
            image: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
            name: 'Pants',
            price: '$2000',
          },
    ];*/
    
    //console.log(products);
    const { name } = useParams();
    const product = productList.find(el => el.name === name);
    const { setCartItems, cart } = useContext(CartContext);

    const addToCart = (product) => {
    const inCart = cart.find((cartItem) => cartItem.name === product.name); // check if the item is already in the cart

    if (inCart) {
      setCartItems(
       cart.map(
          (
            cartItem // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.name === product.name
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem // otherwise, return the cart item
        )
      );
      }else{
        let newCart = [...cart, { ...product, quantity: 1 }];
        setCartItems(newCart);
        console.log(cart);
    }
}
  
    return (
    <div>
        <Header />
        <div className={styles.info}>
            <img src={product.image} alt="product image" className={styles.image} />
            <div className={styles.moreinfo}>
                <h1>{product.name}</h1>
                <h2>${product.price}</h2>
                <h3>{product.description}</h3>
                <Button text="Add to Cart" handleClick={addToCart} arg={product} />
                <Link to="/" className={styles.link}>
                    Back to products!
                </Link>
            </div>
      </div>
    </div>
  );
};

export { Product, ProductPage };

//dynamic links to PDP
//function to populate cards based on state
//move prouducts up a level + use for 