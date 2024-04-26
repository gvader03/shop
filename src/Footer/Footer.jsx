import styles from './Footer.module.css'
import Nav from "../Nav/Nav"
import logo from "../assets/logo.png"

function Footer() {

    return (
      <>
        <div className={styles.footer}>
          <div className={styles.content}>
          <img src={logo} alt="logo" className={styles.logo} />
          <div className={styles.stuff}>
            <h4>Copyright 2024. Space Store, Inc.</h4>
          <Nav />
          </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Footer