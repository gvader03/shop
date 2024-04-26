/*import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useParams } from 'react-router-dom';

const Pdp = () => {
    const products = [
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
    ];
    
    const { name } = useParams();
    const product = products.find(el => el.name === name);

  return (
    <div>
        <Header />
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      <h2>{product.description}</h2>
      <h2>{product.reviews}</h2>
        <h2>PRODUCT INFO ACCORDION</h2>
        <button>Add to Cart</button>
      <Link to="/">
        Back to home!
      </Link>
    </div>
  );
};

export default Pdp;*/

//props for product info
//button for cart