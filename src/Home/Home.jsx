import styles from './Home.module.css'
import Header from '../Header/Header'
import { Product } from '../Products/Products'
import Footer from '../Footer/Footer'

const Home = () =>{

    return(
        <>
            <Header />
            <Product />
            <Footer />
        </>
    );
}

export default Home;