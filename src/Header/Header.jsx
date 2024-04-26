import styles from'./Header.module.css'
import Nav from "../Nav/Nav"
import logo from '../assets/logo.png'

function Header() {

    return (
      <>
        <div className={styles.header}>
          <div className={styles.content}>
          <img src={logo} alt="logo" className={styles.logo} />
          <Nav />
          </div>
        </div>
      </>
    )
  }
  
  export default Header