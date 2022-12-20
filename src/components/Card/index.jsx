import styles from "./style.module.css";
import flat from "../../flat1.jpg";

const Card = ({ items }) => {
  const { title, info, rating, image, superhost } = items;

  return (
    <div className={styles.card}>
      <div className={styles.img_wrapper}>
        <img src={flat} alt="Flat Image" />
      </div>
      <div className={styles.subtitle}>
        <div>
          {superhost && <div className={styles.host}>SUPER HOST</div>}
          <p>{info}</p>
        </div>
        <div className={styles.rating}>
          <span className={styles.star}>&#9733;</span>
          <span>{rating}</span>
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Card;
