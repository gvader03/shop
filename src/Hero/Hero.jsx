import styles from './Hero.module.css'

function Hero(props) {
    
      return (
      <>
        <div className={styles.hero} style={{backgroundImage: `url(${props.backgroundImage})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover"   
    }}>
        </div>
      </>
    )
  }
  
  export default Hero