import { Link } from "react-router-dom";
import styles from "./foodCards.module.css";

export default function FoodCard({ title, image, id }) {
  return (
    <Link className={styles.foodCard} to={`/food-info?id=${id}&title=${title}`}>
      <img className={styles.foodImg} src={image} alt="" />
      <h3 className={styles.foodTitle}>{title}</h3>
    </Link>
  );
}
