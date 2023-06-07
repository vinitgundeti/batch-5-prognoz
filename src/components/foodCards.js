import { Link } from "react-router-dom";
import styles from "./foodCards.module.css";

export default function FoodCard({ data}) {
  console.log(data);
  return (
    <div className={styles.foodCard}>
      <Link to={`/food-info?id=${data.id}&title=${data.name}`}>
        <img className={styles.foodImg} src={data.img} alt="" />
      </Link>
      <div className={styles.foodContent}>
        <h3 className={styles.foodTitle}>{data.name}</h3>
        <h4>₹{data.price}</h4>
        <h4>Is Veg Food : {data.isVeg ? "Yes" : "No"}</h4>
        <Link to={`/admin?title=${data.name}&img=${data.img}&price=${data.price}&isVeg=${data.isVeg}&id=${data.id}`} className={styles.linkButton}>Update</Link>
        <Link className={styles.linkButton}>Delete</Link>
      </div>
    </div>
  );
}
