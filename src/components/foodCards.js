import styles from './foodCards.module.css'

export default function FoodCard({ title, image }) {
  return (
    <div className={styles.foodCard}>
      <img
        className={styles.foodImg}
        src={image}
        alt=""
      />
      <h3 className={styles.foodTitle}>{title}</h3>
    </div>
  );
}
