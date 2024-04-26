import styles from './Button.module.css'

function Button({ text="Add to Cart", handleClick, arg }) {
  
    return (
      <button className={styles.button} onClick={() => handleClick(arg)}>{text}</button>
    );
  }

  export default Button