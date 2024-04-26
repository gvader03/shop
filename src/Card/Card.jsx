import styles from './Card.module.css';

function Card(props) {
    
    return (
    <>
      <div className={styles.card}>
        <img src={props.image} alt="product image" className={styles.img} />
        <div className={styles.title}>
            <h1 className={styles.title}>{props.title}</h1>
            <h2 className={styles.desc}>${props.price}</h2>
        </div>
      </div>
    </>
)}

export default Card

//props