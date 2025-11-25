import { useNavigate } from "react-router";
import styles from "./Card.module.css";
import prototype from "prop-types";

const Card = ({
  name,
  title,
  age,
  isFavourite,
  toggleFavourite,
  id,
  handleDelete,
}) => {
  console.log("Card props - ID:", id, "Name:", name);

  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <button onClick={() => toggleFavourite(id)}>Toggle Favourite</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <div className={styles.name}>{name}</div>
      <div className={styles.title}>Title: {title}</div>
      <div className={styles.age}>Age: {age}</div>
      <div className={styles.favourite}>{isFavourite && <span>❤️</span>}</div>
      <button onClick={() => navigate(`/employees/${id}`)}>
        View Employee
      </button>
    </div>
  );
};

Card.prototype = {
  name: prototype.string.isRequired,
  title: prototype.string.isRequired,
  age: prototype.number.isRequired,
  isFavourite: prototype.bool,
  id: prototype.string.isRequired,
  handleDelete: prototype.func.isRequired,
};

export default Card;
