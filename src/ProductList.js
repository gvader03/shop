import earth from '../src/assets/1.png'
import suit from '../src/assets/2.png'
import moon from '../src/assets/3.png'
import alien from '../src/assets/4.png'
import mars from '../src/assets/5.png'
import galaxy from '../src/assets/6.jpg'


const productList = [
    {
        id: '1',
        image: earth,
        name: 'Earth',
        price: '20',
        description: 'The terra-est firma',
      },
      {
        id: '2',
        image: suit,
        name: 'Astro suit',
        price: '50',
        description: 'A dope ass spacesuit',
      },
      {
        id: '3',
        image: moon,
        name: 'Moon',
        price: '2000',
        description: 'The whole ass moon',
      },
      {
        id: '4',
        image: alien,
        name: 'Alien',
        price: '20',
        description: 'An alien. We are not alone',
      },
      {
        id: '5',
        image: mars,
        name: 'Mars',
        price: '50',
        description: 'Fuckin Mars, yo!',
      },
      {
        id: '6',
        image: galaxy,
        name: 'Galaxy',
        price: '2000',
        description: 'The Milky Way galaxy, my man',
      },
];
export { productList }


/*import { useState, useEffect } from "react";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

export default FetchProducts;*/