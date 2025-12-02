import { useNavigate } from "react-router";
import styles from "./Card.module.css";
import prototype from "prop-types";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomButton from "./CustomButton";
import { Card as CardMUI, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = ({
  name,
  title,
  age,
  isFavourite,
  toggleFavourite,
  id,
  handleDelete,
}) => {
  const navigate = useNavigate();

  return (
    <CardMUI sx={{ padding: 2 }}>
      <CustomButton
        variant="contained"
        onClick={() => toggleFavourite(id)}
        startIcon={<FavoriteIcon />}
      >
        Toggle Favourite
      </CustomButton>

      <Button
        onClick={() => handleDelete(id)}
        variant="contained"
        color="secondary"
        sx={{ padding: "0.5px", marginLeft: 1 }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <Typography variant="h6" className={styles.name} sx={{ marginTop: 2 }}>
        {name}
      </Typography>

      <Typography variant="body1" className={styles.title}>
        Title: {title}
      </Typography>

      <Typography variant="body1" className={styles.age}>
        Age: {age}
      </Typography>

      <Typography variant="body1" className={styles.favourite}>
        {isFavourite && <span>❤️</span>}
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate(`/employees/${id}`)}
        startIcon={<VisibilityIcon />}
        sx={{ marginTop: 2 }}
      >
        View Employee
      </Button>
    </CardMUI>
  );
};

Card.prototype = {
  name: prototype.string.isRequired,
  title: prototype.string.isRequired,
  age: prototype.number.isRequired,
  isFavourite: prototype.bool,
  id: prototype.string.isRequired,
  handleDelete: prototype.func.isRequired,
  toggleFavourite: prototype.func.isRequired,
};

export default Card;
