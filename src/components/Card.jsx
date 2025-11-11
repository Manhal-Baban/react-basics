import styles from "./Card.module.css";

const Card = ({ name, title, age, isFavourite, toggleFavourite, id }) => {
  console.log("isFavourite", isFavourite);

  return (
    <div className={styles.card}>
      <button onClick={() => toggleFavourite(id)}>Toggle Favourite</button>
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>Title: {title}</div>
      <div className={styles.age}>Age: {age}</div>
      <div className={styles.favourite}>{isFavourite && <span>❤️</span>}</div>
    </div>
  );
};

export default Card;
